const CentralToken = artifacts.require("CentralToken");
const SwapCentralTokenSale = artifacts.require("SwapCentralTokenSale");

const chai = require("./chaiSetup.js");
const BN = web3.utils.BN;
const expect = chai.expect;

require("dotenv").config({path: "../.env"});

contract("SwapCentralTokenSale Test", async(accounts)=>{

 const [deployer, admin, recipient ] = accounts;
  let swapCentralTokenSale, centralToken, totalSupply;



    it('currrently holds all tokens sent from deployer', async() => {
      centralToken = await CentralToken.deployed();
      expect(centralToken.balanceOf(deployer)).to.eventually.be.a.bignumber.equal(new BN(0));
    });

    // it('facilitates token transfers', async() => {
    //
    // });
    // it('is not possible to send more than current balance', async() => {
    //   const deployerBalance = await centralToken.balanceOf(deployer);
    //   console.log(deployerBalance)
    //   expect(centralToken.transfer(recipient, new BN(deployerBalance+1))).to.eventually.be.rejected;
    // })

});
