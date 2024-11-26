// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.27;

import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/access/AccessControlUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/utils/ContextUpgradeable.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

abstract contract WithdrawableUpgradable is Initializable, ContextUpgradeable {
    bytes32 public constant WITHDRAW_ROLE = keccak256("WITHDRAW_ROLE");

    function __WithdrawableUpgradable_init() internal onlyInitializing {
        __WithdrawableUpgradable_init_unchained();
    }

    function __WithdrawableUpgradable_init_unchained()
        internal
        onlyInitializing
    {}

    function _authorizeWithdraw() internal virtual;

    function withdrawNative() public virtual {
        _authorizeWithdraw();
        payable(msg.sender).transfer(address(this).balance);
    }

    function withdrawERC20(address _token) public virtual {
        _authorizeWithdraw();
        IERC20(_token).transfer(
            msg.sender,
            IERC20(_token).balanceOf(address(this))
        );
    }

    receive() external payable {}
}
