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

    address public tokenAddress;
    IERC20 public token;

    mapping(uint256 => address) public nodeOwner;
    // node id -> owner

    mapping(address => uint256[]) public userNodes;

    mapping(address => uint256) public userMaxNodeIndex;

    uint256 public nodeId;

    struct Tier {
        uint256 tier;
        uint256 fee;
        uint256 allocation;
        uint256 stakingFactor;
    }

    mapping(uint256 => Tier) public tiers;

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

        tiers[0] = Tier(1, 375 * 10 ** 18, 7000, 75);
        tiers[1] = Tier(2, 849 * 10 ** 18, 6607, 91);
        tiers[2] = Tier(3, 1322 * 10 ** 18, 6214, 107);
        tiers[3] = Tier(4, 1795 * 10 ** 18, 5821, 123);
        tiers[4] = Tier(5, 2268 * 10 ** 18, 5429, 139);
        tiers[5] = Tier(6, 2742 * 10 ** 18, 5036, 155);
        tiers[6] = Tier(7, 3215 * 10 ** 18, 4643, 171);
        tiers[7] = Tier(8, 3688 * 10 ** 18, 4250, 188);
        tiers[8] = Tier(9, 4161 * 10 ** 18, 3857, 204);
        tiers[9] = Tier(10, 4634 * 10 ** 18, 3464, 220);
        tiers[10] = Tier(11, 5108 * 10 ** 18, 3071, 236);
        tiers[11] = Tier(12, 5581 * 10 ** 18, 2679, 252);
        tiers[12] = Tier(13, 6054 * 10 ** 18, 2286, 268);
        tiers[13] = Tier(14, 6527 * 10 ** 18, 1893, 284);
        tiers[14] = Tier(15, 7000 * 10 ** 18, 1500, 300);
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

    function getCurrentTier() public view returns (uint256) {
        uint256 tier = 0;
        uint256 allocation = 0;

        for (uint256 i = 0; i < 15; i++) {
            allocation += tiers[i].allocation;
            if (nodeId < allocation) {
                tier = tiers[i].tier;
                break;
            }
        }

        return tier;
    }

    function getFee() public view returns (uint256) {
        uint256 fee = 7000;
        uint256 allocation = 0;

        for (uint256 i = 0; i < 15; i++) {
            allocation += tiers[i].allocation;
            if (nodeId <= allocation) {
                fee = tiers[i].fee;
                break;
            }
        }

        return fee;
    }

    function maxNodeId() public view returns (uint256) {
        uint256 allocation = 0;

        for (uint256 i = 0; i < 15; i++) {
            allocation += tiers[i].allocation;
        }
        return allocation;
    }

    function buyNode() public whenNotPaused {
        uint256 totalNode = this.maxNodeId();
        require(nodeId < totalNode, "NodeFeeManager: Node limit reached");

        require(
            token.allowance(msg.sender, address(this)) >= this.getFee(),
            "allowance not enough"
        );
        token.transferFrom(msg.sender, address(this), this.getFee());

        nodeOwner[nodeId] = msg.sender;
        userMaxNodeIndex[msg.sender] = userMaxNodeIndex[msg.sender] + 1;
        userNodes[msg.sender].push(nodeId);

        emit PaidFee(msg.sender, nodeId, tokenAddress, this.getFee());

        nodeId++;
    }

    function getNodeData(
        uint256 _nodeId
    ) public view returns (uint256, uint256, uint256) {
        uint256 tier = 0;
        uint256 allocation = 0;

        for (uint256 i = 0; i < 15; i++) {
            allocation += tiers[i].allocation;
            if (_nodeId < allocation) {
                tier = tiers[i].tier;
                break;
            }
        }

        Tier memory currentTier = tiers[tier - 1];

        return (currentTier.tier, currentTier.fee, currentTier.stakingFactor);
    }
}
