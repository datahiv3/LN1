// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.27;

import "../DataHiveToken.sol";

// this contract is for test only
contract DataHiveTokenTestV2 is DataHiveToken {
    function version() public pure returns (string memory) {
        return "v2";
    }
}
