// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.6;

contract Pool {
    Project[] public projects;
    Contribution[] public contributions;
    uint256 public poolStartTime;
    // for testing purposes it will take 2 minutes for a pool to end
    uint256 public poolDuration = 120;
    uint256 public poolEndTime;

    // This mapping will be used to determine to
    // which project a certain contribution belongs to
    // to further get the project and send out the funds
    mapping(uint256 => Project) projects_;

    constructor() {
        poolStartTime = block.timestamp;
        poolEndTime = block.timestamp + poolDuration;
    }

    struct Project {
        bytes32[] name;
        bytes32[] project_link;
        bytes32[] description;
        uint256 unique_project;
        address payable recipient;
    }

    struct Contribution {
        address contributor;
        uint256 whichProject;
    }

    // methods
    function submitProject(
        bytes32[] memory name,
        bytes32[] memory project_link,
        bytes32[] memory description,
        uint256 unique_project,
        address payable recipient
    ) public {
        Project memory new_project = Project({
            unique_project: unique_project,
            name: name,
            description: description,
            project_link: project_link,
            recipient: recipient
        });
        if (projects.length <= 10) {
            projects.push(new_project);
            projects_[unique_project] = new_project;
        } else {
            revert PoolIsFull();
        }
    }

    function makeContribution(uint256 project_id) public {
        Contribution memory contribution = Contribution({
            contributor: msg.sender,
            whichProject: project_id
        });
        // add to our contributions list
        contributions.push(contribution);
    }

    function computeAndFundProject(Project memory project) public payable {}

    // errors
    error PoolIsFull();
}
