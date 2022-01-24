const CentralToken = artifacts.require("CentralToken.sol");
const SwapCentralSale = artifacts.require("SwapCentralTokenSale.sol")
const KYCMockup = artifacts.require("KYCMockup.sol")

require("dotenv").config({path: "../.env"});

module.exports = async function (deployer, networks, accounts) {
  let addresses = await web3.eth.getAccounts()

  await deployer.deploy(CentralToken, process.env.INITIAL_TOKENS_SUPPLY);
  const centralToken = await CentralToken.deployed()

  await deployer.deploy(KYCMockup)

  await deployer.deploy(SwapCentralSale,1,addresses[0], centralToken.address, KYCMockup.address);
  swapCentralSale = await SwapCentralSale.deployed();

  await centralToken.transfer(swapCentralSale.address,process.env.INITIAL_TOKENS_SUPPLY)
};
