// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.27;

import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/access/AccessControlUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/utils/PausableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import {DataHiveToken} from "./DataHiveToken.sol";
import {NodeFeeManager} from "./NodeFeeManager.sol";
import {NodeStaking} from "./NodeStaking.sol";
import {StakingRewardsDistribution} from "./StakingRewardsDistribution.sol";
import {TestnetFaucet} from "./TestnetFaucet.sol";
import {SignatureVerification} from "./utils/SignatureVerification.sol";
import {Whitelisted} from "./Whitelisted.sol";
import "hardhat/console.sol";

/// @custom:security-contact pierre@p10node.com
contract Registry is Initializable, AccessControlUpgradeable, UUPSUpgradeable {
    bytes32 public constant UPGRADER_ROLE = keccak256("UPGRADER_ROLE");

    mapping(string => address) public contractAddresses;

    address payable public dataHiveTokenAddress;
    address payable public signatureVerificationAddress;

    address payable public whitelistedAddress;
    address payable public nodeFeeManagerAddress;
    address payable public nodeStakingAddress;
    address payable public stakingRewardsDistributionAddress;

    address payable public testnetFaucetAddress;

    DataHiveToken public dataHiveToken;
    SignatureVerification public signatureVerification;

    Whitelisted public whitelisted;
    NodeFeeManager public nodeFeeManager;
    NodeStaking public nodeStaking;
    StakingRewardsDistribution public stakingRewardsDistribution;

    TestnetFaucet public testnetFaucet;

    /// @custom:oz-upgrades-unsafe-allow constructor
    constructor() {
        _disableInitializers();
    }

    function initialize() public initializer {
        __AccessControl_init();
        __UUPSUpgradeable_init();

        _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);

        console.log(msg.sender);
        _grantRole(UPGRADER_ROLE, msg.sender);
    }

    function _authorizeUpgrade(
        address newImplementation
    ) internal override onlyRole(UPGRADER_ROLE) {}

    function setGeneral(
        address payable _dataHiveTokenAddress,
        address payable _signatureVerificationAddress,
        address payable _whitelistedAddress,
        address payable _nodeFeeManagerAddress,
        address payable _nodeStakingAddress,
        address payable _stakingRewardsDistributionAddress,
        address payable _testnetFaucetAddress
    ) public onlyRole(DEFAULT_ADMIN_ROLE) {
        dataHiveTokenAddress = _dataHiveTokenAddress;
        signatureVerificationAddress = _signatureVerificationAddress;

        nodeFeeManagerAddress = _nodeFeeManagerAddress;
        nodeStakingAddress = _nodeStakingAddress;
        stakingRewardsDistributionAddress = _stakingRewardsDistributionAddress;

        testnetFaucetAddress = _testnetFaucetAddress;

        dataHiveToken = DataHiveToken(_dataHiveTokenAddress);
        signatureVerification = SignatureVerification(
            _signatureVerificationAddress
        );

        whitelisted = Whitelisted(_whitelistedAddress);
        nodeFeeManager = NodeFeeManager(_nodeFeeManagerAddress);
        nodeStaking = NodeStaking(_nodeStakingAddress);
        stakingRewardsDistribution = StakingRewardsDistribution(
            _stakingRewardsDistributionAddress
        );

        testnetFaucet = TestnetFaucet(_testnetFaucetAddress);

        contractAddresses["dataHiveToken"] = _dataHiveTokenAddress;
        contractAddresses[
            "signatureVerification"
        ] = _signatureVerificationAddress;

        contractAddresses["nodeFeeManager"] = _nodeFeeManagerAddress;
        contractAddresses["nodeStaking"] = _nodeStakingAddress;
        contractAddresses[
            "stakingRewardsDistribution"
        ] = _stakingRewardsDistributionAddress;

        contractAddresses["testnetFaucet"] = _testnetFaucetAddress;
    }

    function setDataHiveToken(
        address payable _address
    ) public onlyRole(DEFAULT_ADMIN_ROLE) {
        dataHiveTokenAddress = _address;
        contractAddresses["dataHiveToken"] = _address;

        dataHiveToken = DataHiveToken(_address);
    }

    function setSignatureVerification(
        address payable _address
    ) public onlyRole(DEFAULT_ADMIN_ROLE) {
        signatureVerificationAddress = _address;
        contractAddresses["signatureVerification"] = _address;

        signatureVerification = SignatureVerification(_address);
    }

    function setWhitelist(
        address payable _address
    ) public onlyRole(DEFAULT_ADMIN_ROLE) {
        whitelistedAddress = _address;
        contractAddresses["whitelist"] = _address;

        whitelisted = Whitelisted(_address);
    }

    function setNodeFeeManager(
        address payable _address
    ) public onlyRole(DEFAULT_ADMIN_ROLE) {
        nodeFeeManagerAddress = _address;
        contractAddresses["nodeFeeManager"] = _address;

        nodeFeeManager = NodeFeeManager(_address);
    }

    function setNodeStaking(
        address payable _address
    ) public onlyRole(DEFAULT_ADMIN_ROLE) {
        nodeStakingAddress = _address;
        contractAddresses["nodeStaking"] = _address;

        nodeStaking = NodeStaking(_address);
    }

    function setStakingRewardsDistribution(
        address payable _address
    ) public onlyRole(DEFAULT_ADMIN_ROLE) {
        stakingRewardsDistributionAddress = _address;
        contractAddresses["stakingRewardsDistribution"] = _address;

        stakingRewardsDistribution = StakingRewardsDistribution(_address);
    }

    function setTestnetFaucet(
        address payable _address
    ) public onlyRole(DEFAULT_ADMIN_ROLE) {
        testnetFaucetAddress = _address;
        contractAddresses["testnetFaucet"] = _address;

        testnetFaucet = TestnetFaucet(_address);
    }

    function setMapping(
        string memory _name,
        address _address
    ) public onlyRole(DEFAULT_ADMIN_ROLE) {
        contractAddresses[_name] = _address;
    }
}
