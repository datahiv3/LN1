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
import {SignatureVerification} from "./utils/SignatureVerification.sol";

contract TestnetFaucet is
    Initializable,
    AccessControlUpgradeable,
    PausableUpgradeable,
    RegistryUpgradable,
    WithdrawableUpgradable,
    UUPSUpgradeable
{
    bytes32 public constant PAUSER_ROLE = keccak256("PAUSER_ROLE");
    bytes32 public constant UPGRADER_ROLE = keccak256("UPGRADER_ROLE");

    mapping(address => uint256) public firstFaucetTime;
    mapping(address => uint256) public totalFaucet;

    uint256 constant DAY = 1 days;

    Registry public registry;

    mapping(bytes => bool) public usedSignature;

    event Faucet(address indexed account, uint256 amount);

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

    function _faucet(address to, uint256 amount) internal {
        registry.dataHiveToken().mint(to, amount * 10 ** 18);
    }

    function faucet(address to) public onlyRole(DEFAULT_ADMIN_ROLE) {
        _faucet(to, 1000);

        emit Faucet(to, 1000);
    }

    function proofFaucet(
        string memory randomText,
        bytes memory signature
    ) public whenNotPaused limitedTime {
        SignatureVerification sign = registry.signatureVerification();

        bytes32 message = getMessageHash(msg.sender, randomText);

        require(sign.verifyBytes(message, signature), "Invalid signature");
        require(!usedSignature[signature], "Signature already used");

        usedSignature[signature] = true;
        uint256 faucetAmount = 1000;

        _faucet(msg.sender, faucetAmount);
        totalFaucet[msg.sender] += faucetAmount;

        emit Faucet(msg.sender, faucetAmount);
    }

    modifier limitedTime() {
        address minter = msg.sender;
        if (block.timestamp - firstFaucetTime[minter] > DAY) {
            firstFaucetTime[minter] = block.timestamp;
            totalFaucet[minter] = 0;
        }

        // max = 4 because the first mint is at 0
        require(
            totalFaucet[minter] < (5 - 1),
            "You can only mint 5 tokens per day"
        );
        _;
    }

    function getMessageHash(
        address sender,
        string memory randomText
    ) public pure returns (bytes32) {
        return keccak256(abi.encodePacked(sender, randomText));
    }
}
