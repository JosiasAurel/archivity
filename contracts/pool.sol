// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.6;

contract Pool {
    Project[] public projects;
    Contribution[] public contributions;
    uint256 public poolStartTime;
    // for testing purposes it will take 2 minutes for a pool to end
    uint256 public poolDuration = 120;
    uint256 public poolEndTime;
    uint256[] public contributed_funds;

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
        uint256 amount;
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

    function makeContribution(uint256 project_id, uint256 amount) public {
        Contribution memory contribution = Contribution({
            contributor: msg.sender,
            whichProject: project_id,
            amount: amount
        });
        // add to our contributions list
        contributions.push(contribution);
    }

    function computeAndFundProject(uint256 project_id) public {
        Project memory project = projects_[project_id];
        uint256 contribution_count = 0;
        uint256 matched_funds = 0;
        uint256 total_funding = 0;

        // collect all contribution to a particular project
        for (uint256 i = 0; i < contributions.length; i++) {
            if (contributions[i].whichProject == project_id) {
                contributed_funds.push(contributions[i].amount);
                contribution_count++;
            }
        }

        // compute funding for the project
        for (uint256 i = 0; i < contributed_funds.length; i++) {
            matched_funds += Math.sqrt(contributed_funds[i]);
            total_funding += contributed_funds[i];
        }
        // sqaure the sum of fund square root
        matched_funds = matched_funds**2;
        total_funding += matched_funds;

        // send funds to the project
        project.recipient.transfer(total_funding);
        // empty contributed funds for the next item in the pool
        delete contributed_funds;

        // remove the project from the pool
    }

    function fundAndEmptyPool() public {
        for (uint256 i = 0; i < projects.length; i++) {
            computeAndFundProject(i);
            // assume funding doesn't fail
            delete projects[i];
        }
    }

    // errors
    error PoolIsFull();
}

// sqrt from Uniswap v2-core, implementation of Babylonian method
library Math {
    function sqrt(uint256 y) internal pure returns (uint256 z) {
        if (y > 3) {
            z = y;
            uint256 x = y / 2 + 1;
            while (x < z) {
                z = x;
                x = (y / x + x) / 2;
            }
        } else if (y != 0) {
            z = 1;
        }
    }
}
