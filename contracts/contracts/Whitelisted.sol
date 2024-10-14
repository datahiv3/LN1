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
contract Whitelisted is
    Initializable,
    AccessControlUpgradeable,
    PausableUpgradeable,
    RegistryUpgradable,
    WithdrawableUpgradable,
    UUPSUpgradeable
{
    bytes32 public constant PAUSER_ROLE = keccak256("PAUSER_ROLE");
    bytes32 public constant UPGRADER_ROLE = keccak256("UPGRADER_ROLE");
    bytes32 public constant WHITELIST_ADMIN_ROLE =
        keccak256("WHITELIST_ADMIN_ROLE");

    Registry public registry;

    mapping(address => bool) public whitelist;

    event Whitelist(address indexed account, bool whitelist);

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
        _grantRole(WHITELIST_ADMIN_ROLE, msg.sender);

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

    function isWhitelist(address account) public view returns (bool) {
        return whitelist[account];
    }

    function addWhitelist(
        address account
    ) public onlyRole(WHITELIST_ADMIN_ROLE) {
        whitelist[account] = true;

        emit Whitelist(account, true);
    }

    function removeWhitelist(
        address account
    ) public onlyRole(WHITELIST_ADMIN_ROLE) {
        whitelist[account] = false;

        emit Whitelist(account, false);
    }

    function addWhitelistBatch(
        address[] memory accounts
    ) public onlyRole(WHITELIST_ADMIN_ROLE) {
        for (uint i = 0; i < accounts.length; i++) {
            whitelist[accounts[i]] = true;

            emit Whitelist(accounts[i], true);
        }
    }

    function removeWhitelistBatch(
        address[] memory accounts
    ) public onlyRole(WHITELIST_ADMIN_ROLE) {
        for (uint i = 0; i < accounts.length; i++) {
            whitelist[accounts[i]] = false;

            emit Whitelist(accounts[i], false);
        }
    }
}
