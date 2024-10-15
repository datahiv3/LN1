// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.27;

import "@openzeppelin/contracts-upgradeable/utils/PausableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/AccessControlUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import {RegistryUpgradable} from "./utils/RegistryUpgradable.sol";
import {WithdrawableUpgradable} from "./utils/WithdrawableUpgradable.sol";
import {Registry} from "./Registry.sol";

/// @custom:security-contact pierre@p10node.com
contract NodeFeeManager is
    Initializable,
    AccessControlUpgradeable,
    PausableUpgradeable,
    RegistryUpgradable,
    WithdrawableUpgradable,
    UUPSUpgradeable
{
    bytes32 public constant PAUSER_ROLE = keccak256("PAUSER_ROLE");
    bytes32 public constant UPGRADER_ROLE = keccak256("UPGRADER_ROLE");
    bytes32 public constant FEE_MANAGER_ROLE = keccak256("FEE_MANAGER_ROLE");

    Registry public registry;

    // token -> bool
    mapping(address => bool) public allowToken;
    // token -> fee
    mapping(address => uint256) public fee;

    event AllowToken(address indexed token, bool allow);
    event SetFee(address indexed token, uint256 fee);

    mapping(uint256 => address) public nodeOwner;
    // node id -> owner
    mapping(uint256 => bool) public nodeStatus;
    // node id -> bool
    mapping(uint256 => address) public paidBy;
    // node id -> token
    mapping(uint256 => mapping(address => uint256)) public paidAmount;
    // node id -> token -> amount

    uint256 public nodeId;

    event PaidFee(
        address indexed account,
        uint256 indexed nodeId,
        address indexed token,
        uint256 amount
    );
    event RefundFee(
        address indexed account,
        uint256 indexed nodeId,
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
        _grantRole(FEE_MANAGER_ROLE, msg.sender);

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

    function setAllowToken(address _token) public onlyRole(FEE_MANAGER_ROLE) {
        allowToken[_token] = true;

        emit AllowToken(_token, true);
    }

    function removeToken(address _token) public onlyRole(FEE_MANAGER_ROLE) {
        allowToken[_token] = false;

        emit AllowToken(_token, false);
    }

    function setFee(
        address _token,
        uint256 _fee
    ) public onlyRole(FEE_MANAGER_ROLE) {
        require(allowToken[_token], "token not allowed");
        fee[_token] = _fee;

        emit AllowToken(_token, true);
        emit SetFee(_token, _fee);
    }

    function removeFee(address _token) public onlyRole(FEE_MANAGER_ROLE) {
        require(allowToken[_token], "token not allowed");
        fee[_token] = 0;

        emit AllowToken(_token, false);
        emit SetFee(_token, 0);
    }

    function getFee(address _token) public view returns (uint256) {
        return fee[_token];
    }

    function payFee(address _token) public whenNotPaused {
        require(
            registry.whitelisted().whitelist(msg.sender),
            "account not whitelisted"
        );

        require(allowToken[_token], "token not allowed");

        IERC20 token = IERC20(_token);

        require(
            token.allowance(msg.sender, address(this)) >= fee[_token],
            "allowance not enough"
        );
        token.transferFrom(msg.sender, address(this), fee[_token]);

        nodeOwner[nodeId] = msg.sender;
        nodeStatus[nodeId] = true;
        paidBy[nodeId] = msg.sender;
        paidAmount[nodeId][_token] = fee[_token];

        emit PaidFee(msg.sender, nodeId, _token, fee[_token]);

        nodeId++;
    }

    function refundFee(uint256 _nodeId) public onlyRole(FEE_MANAGER_ROLE) {
        address _account = nodeOwner[_nodeId];

        require(
            registry.whitelisted().whitelist(_account),
            "account not whitelisted"
        );
        require(_nodeId <= nodeId, "node not exist");
        require(nodeOwner[_nodeId] == _account, "node not owned by account");
        require(nodeStatus[_nodeId], "node refunded");

        address tokenAddress = paidBy[_nodeId];
        IERC20 token = IERC20(tokenAddress);

        uint256 refund = paidAmount[_nodeId][tokenAddress];
        token.transfer(_account, refund);

        nodeStatus[_nodeId] = false;

        emit RefundFee(_account, _nodeId, tokenAddress, refund);
    }
}
