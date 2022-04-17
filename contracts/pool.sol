// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.6;

contract Pool {
    Project[] public projects;
    uint256 public poolStartTime;
    // for testing purposes it will take 2 minutes for a pool to end
    uint256 public poolDuration = 120;
    uint256 public poolEndTime;

    constructor() {
        poolStartTime = block.timestamp;
        poolEndTime = block.timestamp + poolDuration;
    }

    struct Project {
        bytes32[] name;
        bytes32[] project_link;
        bytes32[] description;
        uint64 unique_project;
        address payable recipient;
    }

    struct Contribution {
        address contributor;
        uint64 whichProject;
    }

    // methods
    function submitProject(
        bytes32[] memory name,
        bytes32[] memory project_link,
        bytes32[] memory description,
        uint64 unique_project,
        address payable recipient
    ) public {
        if (projects.length <= 10) {
            projects.push(
                Project({
                    unique_project: unique_project,
                    name: name,
                    description: description,
                    project_link: project_link,
                    recipient: recipient
                })
            );
        } else {
            revert PoolIsFull();
        }
    }

    // errors
    error PoolIsFull();
}
