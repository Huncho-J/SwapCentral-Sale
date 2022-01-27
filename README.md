# SwapCentral-Sale

# Description
SwapCentral is a decentralized exchange for ERC20 cryptocurrencies. This project functions as an ICO or CrowdSale for the DEX platform. The project is still in its initial phase and is meant to document my progress.

- The ICO/CrowdSale site is hosted on: https://huncho-j.github.io/SwapCentral-Sale/
- The MVP for the Exchange is located in it's own repo: https://github.com/Huncho-J/SwapCentral.git

# Interacting with client side
- Can't purchase Tokens until you connect your MetaMask account and your address has been whitelisted
- Smart Contracts are on the ropsten testnet. So you will need to be on the Ropsten testnet in your MetaMask account
- Paste your MetaMask address and click the whitelist button to get whitelisted.
- Then you can click the purchase tokens button.

SCT is currently set to the RATE of 1SCT = 1WEI and only one cant be purchased at a time. Only 1 million SCT have been minted for this mock sale.
# Some project features
- The Central Token and SwapCentral Token Sale contract run on audited openzeppelin smart contract library
- The CrowdSale.sol used by the token sale contract was taken from openzeppelin V2.x and adapted to fit V4.x which supports      solidity ^0.8.0.
- project has ongoing unit testing located in the "./test" directory. The test files are managed by truffle and chai testing framework.
# Next Updates
- Work on the frontend react styling. *Add MetaMask login button
- Enable multiple token purchase with MAX purchase set to 500SCT
- integrate backend with Moralis
- Add deflationary features to Central Token.

- **V2/V3 of DEX is based off of forking popular DEXs like PancakeSwap.

# Built with
- frameworks: Truffle & React
- backend is powered by smart contracts written in solidity
- libraries: web3.eth
- local development done in Ganache
- languages: JavaScript & solidity.


# How to Install and run project [Local Development]
The following assumes the use of Node @v14.16.0 and Ganache

- clone repo: https://github.com/Huncho-J/SwapCentral-Sale.git
- In the project's root run the command: npm migrate --reset
- To launch frontend, Navigate to the client folder then run the command: npm run start

- The current truffle-config is set to already match any network you're on.

# Run Solidity Files Test
