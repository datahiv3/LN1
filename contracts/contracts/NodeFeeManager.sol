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

    mapping(address => bool) public allowToken;
    mapping(address => uint256) public fee;

    event AllowToken(address indexed token, bool allow);
    event SetFee(address indexed token, uint256 fee);

    mapping(address => mapping(uint256 => mapping(address => uint256)))
        public paidFees;
    // address -> node id -> token -> amount
    mapping(address => mapping(uint256 => address)) public paidToken;
    // address -> node id -> token
    mapping(address => mapping(uint256 => bool)) public nodes;
    // address -> node id -> bool

    mapping(address => uint256) nodeCount;

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
        allowToken[_token] = true;
        fee[_token] = _fee;

        emit AllowToken(_token, true);
        emit SetFee(_token, _fee);
    }

    function removeFee(address _token) public onlyRole(FEE_MANAGER_ROLE) {
        allowToken[_token] = false;
        fee[_token] = 0;

        emit AllowToken(_token, false);
        emit SetFee(_token, 0);
    }

    function getFee(address _token) public view returns (uint256) {
        return fee[_token];
    }

    function payFee(address _token) public {
        require(allowToken[_token], "token not allowed");
        require(
            registry.whitelisted().whitelist(msg.sender),
            "account not whitelisted"
        );

        IERC20 token = IERC20(_token);

        require(
            token.allowance(msg.sender, address(this)) >= fee[_token],
            "allowance not enough"
        );
        token.transferFrom(msg.sender, address(this), fee[_token]);

        uint256 nodeId = nodeCount[msg.sender];

        paidToken[msg.sender][nodeId] = _token;
        paidFees[msg.sender][nodeId][_token] = fee[_token];
        nodes[msg.sender][nodeId] = true;

        nodeCount[msg.sender]++;

        emit PaidFee(msg.sender, nodeId, _token, fee[_token]);
    }

    function refundFee(
        address _account,
        uint256 nodeId
    ) public onlyRole(FEE_MANAGER_ROLE) {
        require(nodes[_account][nodeId], "node not exist");

        address tokenAddress = paidToken[_account][nodeId];
        IERC20 token = IERC20(tokenAddress);

        uint256 refund = paidFees[_account][nodeId][tokenAddress];
        token.transfer(_account, refund);

        nodes[_account][nodeId] = false;

        emit RefundFee(
            _account,
            nodeId,
            tokenAddress,
            paidFees[_account][nodeId][tokenAddress]
        );
    }
}
