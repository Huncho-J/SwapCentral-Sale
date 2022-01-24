pragma solidity ^0.8.0;


// SPDX-License-Identifier: MIT

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract CentralToken is ERC20 {
    constructor(uint256 initialSupply) ERC20("CentralToken", "SCT") {
        _mint(msg.sender, initialSupply);
    }
}
