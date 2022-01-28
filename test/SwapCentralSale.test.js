const CentralToken = artifacts.require("CentralToken");
const SwapCentralTokenSale = artifacts.require("SwapCentralTokenSale");
const KYCMockup = artifacts.require("KYCMockup")

const chai = require("./chaiSetup.js");
const BN = web3.utils.BN;
const expect = chai.expect;

require("dotenv").config({path: "../.env"});


  function toWei(n){
    return web3.utils.toWei(n, 'ether');
  }

contract("SwapCentralTokenSale Test", async(accounts)=>{
  const [deployer, admin,investor] = accounts;
  let centralToken, kyc, tokenSale;

  before(async () => {
    centralToken = await CentralToken.new(process.env.INITIAL_TOKENS_SUPPLY);
    kyc = await KYCMockup.new();
    tokenSale = await SwapCentralTokenSale.new(1,deployer,centralToken.address,kyc.address);
    await centralToken.transfer(tokenSale.address,process.env.INITIAL_TOKENS_SUPPLY);
  });

  describe('SwapCentral deployment',async () => {
    it('deploys successfully',async () => {
      const address = await tokenSale.address
      assert.notEqual(address, 0x0)
      assert.notEqual(address, '')
      assert.notEqual(address, null)
      assert.notEqual(address, undefined)
    });

     it('currrently holds all tokens sent from deployer', async() => {
       let balance = await centralToken.balanceOf(tokenSale.address);
       console.log(balance.toString())
       assert.equal(balance.toString(),1000000);
    });
  });
  
  describe('SwapCentral Sale',async () => {
    it('allows investor to purchase tokens',async () => {
      await kyc.setKycCompleted(investor, {from:deployer})
      await tokenSale.buyTokens(investor, {from:investor, value:web3.utils.toWei('1', 'wei')});
      let investorBal = await centralToken.balanceOf(investor);
      assert.equal(investorBal.toString(),1);
    });
});
});
