pragma solidity ^0.8.0;
// SPDX-License-Identifier: MIT

import "./CrowdSale.sol";
import "./KYCMockup.sol";


/// @title SwapCentralTokenSale
/// @notice makse use of two other contracts namely: KYCMockup.sol & CrowdSale.sol
/// @dev is a child contract of CrowdSale.sol
contract SwapCentralTokenSale is Crowdsale{
    /// @dev sets an instance of the KYCMockup contract
    KYCMockup kyc;

    /**
      * @dev Sets the values for {_rate}, {_wallet}.to withdraw funds to, {_token} & {KYCMockup}
      * All two of these values are immutable: they can only be set once during
      * deployment.
      *
      * deploys with the CrwodSale contract as well.
      */
    constructor(uint256 _rate,address payable _wallet,IERC20 _token, KYCMockup _kyc)
        Crowdsale(_rate, _wallet, _token){

          kyc = _kyc;
        }

        /// @dev overrides the CrowdSale {_preValidate} function to require a KYC check
        /// @param beneficiary address receiving funds
        /// @param weiAmount total amount in wei sent by user/investor
        function _preValidatePurchase(address beneficiary, uint256 weiAmount) internal view override {
          super._preValidatePurchase(beneficiary, weiAmount);
          require(kyc.kycCompleted(msg.sender), "KYC Not Completed, purchase not allowed");
        }
  }
