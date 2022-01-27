const CentralToken = artifacts.require("CentralToken");
const SwapCentralTokenSale = artifacts.require("SwapCentralTokenSale");

const chai = require("./chaiSetup.js");
const BN = web3.utils.BN;
const expect = chai.expect;

require("dotenv").config({path: "../.env"});

contract("SwapCentralTokenSale Test", async(accounts)=>{

  before(async () => {
    this.centralToken = await CentralToken.deployed(process.env.INITIAL_TOKENS_SUPPLY);
  })

 const [deployer, admin, recipient ] = accounts;
  let swapCentralTokenSale, centralToken, totalSupply;



    it('currrently holds all tokens sent from deployer', async() => {
      expect(this.centralToken.balanceOf(deployer)).to.eventually.be.a.bignumber.equal(new BN(0));
    });

    // it('facilitates token transfers', async() => {
    //
    // });

});
