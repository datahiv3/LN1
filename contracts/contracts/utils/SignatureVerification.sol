// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.27;

import "hardhat/console.sol";
import "@openzeppelin/contracts-upgradeable/utils/PausableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/AccessControlUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import {RegistryUpgradable} from "./RegistryUpgradable.sol";
import {WithdrawableUpgradable} from "./WithdrawableUpgradable.sol";
import {Registry} from "../Registry.sol";

/// @custom:security-contact pierre@p10node.com
contract SignatureVerification is Initializable, AccessControlUpgradeable, PausableUpgradeable, RegistryUpgradable, WithdrawableUpgradable, UUPSUpgradeable {
    bytes32 public constant UPGRADER_ROLE = keccak256("UPGRADER_ROLE");
    bytes32 public constant PAUSER_ROLE = keccak256("PAUSER_ROLE");

    Registry public registry;

    address public signerAddress;

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

    function _authorizeUpgrade(address newImplementation) internal override onlyRole(UPGRADER_ROLE) {}

    function _authorizeRegistry() internal override onlyRole(DEFAULT_ADMIN_ROLE) {}

    function setRegistry(address _registryAddress) internal override {
        registry = Registry(_registryAddress);
    }

    function _authorizeWithdraw() internal override onlyRole(WITHDRAW_ROLE) {}

    function setSignerAddress(address _signerAddress) public onlyRole(DEFAULT_ADMIN_ROLE) {
        signerAddress = _signerAddress;
    }

    function splitSignature(bytes memory sig) public pure returns (bytes32 r, bytes32 s, uint8 v) {
        require(sig.length == 65, "invalid signature length");

        assembly {
            r := mload(add(sig, 32))
            s := mload(add(sig, 64))
            v := byte(0, mload(add(sig, 96)))
        }
    }

    function verifySignature(bytes32 hashedMessage, bytes memory signature) public view returns (bool) {
        (bytes32 r, bytes32 s, uint8 v) = splitSignature(signature);

        if (v != 27 && v != 28) {
            return false;
        }

        address signer = ecrecover(hashedMessage, v, r, s);

        return signer == signerAddress;
    }

    function verifyMessage(string memory message, bytes memory signature) public view returns (bool) {
        bytes32 hashedMessage = keccak256(abi.encodePacked("\x19Ethereum Signed Message:\n", uintToString(bytes(message).length), message));

        return verifySignature(hashedMessage, signature);
    }

    function verifyBytes(bytes32 message, bytes memory signature) public view whenNotPaused returns (bool) {
        bytes32 hashedMessage = keccak256(abi.encodePacked("\x19Ethereum Signed Message:\n32", message));

        return verifySignature(hashedMessage, signature);
    }

    function uintToString(uint256 value) internal pure returns (string memory) {
        if (value == 0) {
            return "0";
        }
        uint256 temp = value;
        uint256 digits;
        while (temp != 0) {
            digits++;
            temp /= 10;
        }
        bytes memory buffer = new bytes(digits);
        while (value != 0) {
            digits -= 1;
            buffer[digits] = bytes1(uint8(48 + uint256(value % 10)));
            value /= 10;
        }
        return string(buffer);
    }
}
