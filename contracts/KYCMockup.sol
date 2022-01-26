pragma solidity 0.8.0;
import "@openzeppelin/contracts/access/Ownable.sol";
// SPDX-License-Identifier: MIT
/// @title KYCMockup
contract KYCMockup is Ownable{

  mapping (address => bool) allowed;
  /**
  /// @notice takes an address as input to be whitelisted
  /// @dev sets user whitelisted status to true. makes use of openzepplins "onlyOwner". onlyOwner is the account that deployed this contract.
   /// @param _addr is users/inevstor's address
  */
  function setKycCompleted(address _addr) public onlyOwner{
    allowed[_addr] = true;
  }

  /// @notice takes an address as input and resets it's whitelisted status to false
  /// @dev sets user status to false in "Allowed" mapping
  /// @param _addr Address of account to revoke access.
  function setKycRevoked(address _addr) public onlyOwner{
    allowed[_addr] = false;
  }

  /// @notice checks KYC status for an address
  /// @dev checks to see if KYC has been completed for a specified address
  /// @param _addr Address of a users account.
  /// @return true or false based on the user's status set in "Allowed" mapping
  function kycCompleted(address _addr) public view returns(bool){
    return allowed[_addr];
  }

}
