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
        _grantRole(WITHDRAW_ROLE, msg.sender);
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

    function getMessageHash(address sender, string memory randomText) public pure returns (bytes32) {
        return keccak256(abi.encodePacked(sender, randomText));
    }

    function getEthSignedMessageHash(bytes32 _messageHash) public pure returns (bytes32) {
        return keccak256(abi.encodePacked("\x19Ethereum Signed Message:\n32", _messageHash));
    }

    function verifySignature(string memory messageStr, bytes memory signature) public view whenNotPaused returns (bool) {
        bytes32 message = keccak256(abi.encodePacked(messageStr));
        return verifyBytesMessageSignature(message, signature);
    }

    function verifyBytesMessageSignature(bytes32 message, bytes memory signature) public view whenNotPaused returns (bool) {
        bytes32 r;
        bytes32 s;
        uint8 v;

        (r, s, v) = splitSignature(signature);

        if (v != 27 && v != 28) {
            return false;
        }

        bytes32 hashedMessage = keccak256(abi.encodePacked("\x19Ethereum Signed Message:\n32", message));

        address signer = ecrecover(hashedMessage, v, r, s);

        return signer == signerAddress;
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
