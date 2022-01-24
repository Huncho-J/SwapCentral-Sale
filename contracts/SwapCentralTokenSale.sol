pragma solidity ^0.8.0;
// SPDX-License-Identifier: MIT

import "./CrowdSale.sol";
import "./KYCMockup.sol";


contract SwapCentralTokenSale is Crowdsale{
    KYCMockup kyc;

    constructor(uint256 _rate,address payable _wallet,IERC20 _token, KYCMockup _kyc)
        Crowdsale(_rate, _wallet, _token){

          kyc = _kyc;
        }

        function _preValidatePurchase(address beneficiary, uint256 weiAmount) internal view override {
          super._preValidatePurchase(beneficiary, weiAmount);
          require(kyc.kycCompleted(msg.sender), "KYC Not Completed, purchase not allowed");
        }
  }
