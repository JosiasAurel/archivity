// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.6;

contract Pool {
    struct Project {
        bytes32[] name;
        bytes32[] project_link;
        bytes32[] description;
        address recipient;
    }
}
