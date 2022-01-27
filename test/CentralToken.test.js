const CentralToken = artifacts.require("CentralToken");

const chai = require("./chaiSetup.js");
const BN = web3.utils.BN;
const expect = chai.expect;

require("dotenv").config({path: "../.env"});

contract("CentralToken Test", async(accounts)=>{
 const [deployer, admin, recipient ] = accounts;
let centralToken, totalSupply;

 before(async () => {
   this.centralToken = await CentralToken.new(process.env.INITIAL_TOKENS_SUPPLY);
 })

    it('deploys successfully',async () => {
      centralToken = this.centralToken;
      const address = await centralToken.address;
      assert.notEqual(address, 0x0);
      assert.notEqual(address, '');
      assert.notEqual(address, null);
     assert.notEqual(address, undefined);
    })

    it('has totalSupply', async() => {
      centralToken = this.centralToken;
      totalSupply = await centralToken.totalSupply();
      // let balance = await centralToken.balanceOf(accounts[0]);
      expect(centralToken.balanceOf(deployer)).to.eventually.be.a.bignumber.equal(totalSupply);
    })

    it('facilitates token transfers', async() => {
      centralToken = this.centralToken;
      const amountToBeSent = 10;
      expect(centralToken.balanceOf(deployer)).to.eventually.be.a.bignumber.equal(totalSupply);
      expect(centralToken.transfer(recipient, amountToBeSent)).to.eventually.be.fulfilled;
      expect(centralToken.balanceOf(deployer)).to.eventually.be.a.bignumber.equal(totalSupply.sub(new BN (amountToBeSent)));
      expect(centralToken.balanceOf(recipient)).to.eventually.be.a.bignumber.equal(new BN(amountToBeSent));
    })
    // it('is not possible to send more than current balance', async() => {
    //   const deployerBalance = await centralToken.balanceOf(deployer);
    //   console.log(deployerBalance)
    //   expect(centralToken.transfer(recipient, new BN(deployerBalance+1))).to.eventually.be.rejected;
    // })

})
