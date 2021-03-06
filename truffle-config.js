const path = require("path");

const HDWalletProvider = require('@truffle/hdwallet-provider');
//
// const fs = require('fs');
 const mnemonic = require("./mnemonic.json").mnemonic

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },
    ropsten: {
    provider: () => new HDWalletProvider(mnemonic, `https://speedy-nodes-nyc.moralis.io/b339a04a1ce96516cea5132d/eth/ropsten`),
    network_id: 3,       // Ropsten's id
    gas: 5500000,        // Ropsten has a lower block limit than mainnet
    confirmations: 2,    // # of confs to wait between deployments. (default: 0)
    timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
    skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
    },
  },
  contracts_build_directory: path.join(__dirname, "client/src/contracts"),
    solc: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    },
    // Configure your compilers
    compilers: {
      solc: {
        version: "0.8.0",    // Fetch exact version from solc-bin (default: truffle's version)
        // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
        // settings: {          // See the solidity docs for advice about optimization and evmVersion
        //  optimizer: {
        //    enabled: false,
        //    runs: 200
        //  },
        //  evmVersion: "byzantium"
        // }
      }
    }
}
