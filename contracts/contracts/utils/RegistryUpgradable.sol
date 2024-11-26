// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.27;

import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/access/AccessControlUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/utils/ContextUpgradeable.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

abstract contract RegistryUpgradable is Initializable, ContextUpgradeable {
    address public registryAddress;

    function __RegistryUpgradable_init() internal onlyInitializing {
        __RegistryUpgradable_init_unchained();
    }

    function __RegistryUpgradable_init_unchained() internal onlyInitializing {}

    function _authorizeRegistry() internal virtual;

    function setRegistry(address newImplementation) internal virtual;

    function setRegistryAddress(address _registryAddress) public virtual {
        _authorizeRegistry();

        registryAddress = _registryAddress;

        setRegistry(registryAddress);
    }
}
