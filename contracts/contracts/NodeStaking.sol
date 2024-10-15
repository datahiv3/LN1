// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.27;

import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/access/AccessControlUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/utils/PausableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import {RegistryUpgradable} from "./utils/RegistryUpgradable.sol";
import {WithdrawableUpgradable} from "./utils/WithdrawableUpgradable.sol";
import {Registry} from "./Registry.sol";

/// @custom:security-contact pierre@p10node.com
contract NodeStaking is
    Initializable,
    AccessControlUpgradeable,
    PausableUpgradeable,
    RegistryUpgradable,
    WithdrawableUpgradable,
    UUPSUpgradeable
{
    bytes32 public constant PAUSER_ROLE = keccak256("PAUSER_ROLE");
    bytes32 public constant UPGRADER_ROLE = keccak256("UPGRADER_ROLE");
    bytes32 public constant STAKING_ADMIN_ROLE =
        keccak256("STAKING_ADMIN_ROLE");

    Registry public registry;

    mapping(address => bool) public tokens;
    mapping(address => mapping(address => uint256)) public stakedAmount;

    event Stake(
        uint256 indexed nodeId,
        address indexed account,
        address indexed token,
        uint256 amount
    );

    event Unstake(
        uint256 indexed nodeId,
        address indexed account,
        address indexed token,
        uint256 amount
    );

    /// @custom:oz-upgrades-unsafe-allow constructor
    constructor() {
        _disableInitializers();
    }

    function initialize() public initializer {
        __Pausable_init();
        __AccessControl_init();
        __RegistryUpgradable_init();
        __WithdrawableUpgradable_init();
        __UUPSUpgradeable_init();

        _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
        _grantRole(UPGRADER_ROLE, msg.sender);
        _grantRole(PAUSER_ROLE, msg.sender);
        _grantRole(WITHDRAW_ROLE, msg.sender);
        _grantRole(STAKING_ADMIN_ROLE, msg.sender);

        _pause();
    }

    function pause() public onlyRole(PAUSER_ROLE) {
        _pause();
    }

    function unpause() public onlyRole(PAUSER_ROLE) {
        _unpause();
    }

    function _authorizeUpgrade(
        address newImplementation
    ) internal override onlyRole(UPGRADER_ROLE) {}

    function _authorizeRegistry()
        internal
        override
        onlyRole(DEFAULT_ADMIN_ROLE)
    {}

    function setRegistry(address _registryAddress) internal override {
        registry = Registry(_registryAddress);
    }

    function _authorizeWithdraw() internal override onlyRole(WITHDRAW_ROLE) {}

    function withdraw() public onlyRole(WITHDRAW_ROLE) {
        withdrawERC20(registry.dataHiveTokenAddress());
    }

    function addAllowToken(address token) public onlyRole(STAKING_ADMIN_ROLE) {
        tokens[token] = true;
    }

    function removeAllowToken(
        address token
    ) public onlyRole(STAKING_ADMIN_ROLE) {
        tokens[token] = false;
    }

    function stake(
        uint256 nodeId,
        address tokenAddress,
        uint256 tokenAmount
    ) public whenNotPaused {
        require(
            nodeId <= registry.nodeFeeManager().nodeId(),
            "NodeStaking: Node does not exist"
        );

        require(tokens[tokenAddress], "NodeStaking: Token not allowed");

        uint256 amount = IERC20(tokenAddress).balanceOf(msg.sender);
        require(amount >= tokenAmount, "NodeStaking: Insufficient balance");

        IERC20(tokenAddress).transferFrom(
            msg.sender,
            address(this),
            tokenAmount
        );

        stakedAmount[msg.sender][tokenAddress] += tokenAmount;

        emit Stake(nodeId, msg.sender, tokenAddress, amount);
    }
}
