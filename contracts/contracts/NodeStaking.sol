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

    address public tokenAddress;
    IERC20 public token;

    // total staked amount per node
    mapping(uint256 => uint256) public stakedAmount;
    // node id -> total staked amount

    mapping(uint256 => mapping(address => uint256)) public stakedAmountPerUser;
    // node id -> user -> staked amount

    mapping(address => mapping(uint256 => uint256)) public userStakeNodeId;
    // user -> index -> node id

    mapping(address => mapping(uint256 => uint256))
        public userStakeNodeIdAmount;
    // user -> index -> amount

    mapping(address => uint256) public userStakeIndex;
    // user -> index

    event Stake(
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

    function setToken(address _token) public onlyRole(DEFAULT_ADMIN_ROLE) {
        tokenAddress = _token;
        token = IERC20(_token);
    }

    function stake(uint256 nodeId, uint256 tokenAmount) public whenNotPaused {
        uint256 maxNodeId = registry.nodeFeeManager().nodeId();

        // check if node exists
        require(nodeId <= maxNodeId, "NodeStaking: Node does not exist");

        (, uint256 fee, uint256 stakingFactor) = registry
            .nodeFeeManager()
            .getNodeData(nodeId);

        uint256 amount = IERC20(tokenAddress).balanceOf(msg.sender);

        // check if user has enough balance
        require(amount >= tokenAmount, "NodeStaking: Insufficient balance");

        uint256 maxStake = (fee * stakingFactor) / 100;

        // check if staked amount exceeds max stake
        require(
            tokenAmount + stakedAmount[nodeId] <= maxStake,
            "NodeStaking: Exceeds max stake"
        );

        IERC20(tokenAddress).transferFrom(
            msg.sender,
            address(this),
            tokenAmount
        );

        stakedAmount[nodeId] += tokenAmount;
        stakedAmountPerUser[nodeId][msg.sender] += tokenAmount;
        userStakeNodeId[msg.sender][userStakeIndex[msg.sender]] = nodeId;
        userStakeNodeIdAmount[msg.sender][
            userStakeIndex[msg.sender]
        ] = tokenAmount;
        userStakeIndex[msg.sender] += 1;

        emit Stake(nodeId, msg.sender, tokenAddress, amount);
    }
}
