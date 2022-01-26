pragma solidity ^0.8.0;


// SPDX-License-Identifier: MIT

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

/// @title CentralToken
contract CentralToken is ERC20 {
    /// @notice
    /// @dev mints initial token supply to the deployer's account
    /// @param initialSupply
    constructor(uint256 initialSupply) ERC20("CentralToken", "SCT") {
        _mint(msg.sender, initialSupply);
    }
}
