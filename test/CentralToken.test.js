const CentralToken = artifacts.require("CentralToken");

const chai = require("./chaiSetup.js");
const BN = web3.utils.BN;
const expect = chai.expect;

require("dotenv").config({path: "../.env"});

contract("CentralToken Test", async(accounts)=>{
 const [deployer, admin, recipient ] = accounts;
let centralToken, totalSupply;

 before(async () => {
   centralToken = await CentralToken.new(process.env.INITIAL_TOKENS_SUPPLY);
 })

    it('deploys successfully',async () => {
      const address = await centralToken.address;
      assert.notEqual(address, 0x0);
      assert.notEqual(address, '');
      assert.notEqual(address, null);
     assert.notEqual(address, undefined);
    })

    it('has totalSupply', async() => {
      totalSupply = await centralToken.totalSupply();
      // let balance = await centralToken.balanceOf(accounts[0]);
      expect(centralToken.balanceOf(deployer)).to.eventually.be.a.bignumber.equal(totalSupply);
    })

    it('facilitates token transfers', async() => {
      centralToken = this.centralToken;
      const amountToBeSent = 10;
      const transfer = await centralToken.transfer(recipient, amountToBeSent)
      expect(centralToken.balanceOf(deployer)).to.eventually.be.a.bignumber.equal(totalSupply);
      expect().to.eventually.be.fulfilled;
      expect(centralToken.balanceOf(deployer)).to.eventually.be.a.bignumber.equal(totalSupply.sub(new BN (amountToBeSent)));
      expect(centralToken.balanceOf(recipient)).to.eventually.be.a.bignumber.equal(new BN(amountToBeSent));
    })
})
