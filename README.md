# SwapCentral-Sale

# Description
SwapCentral is a decentralized exchange for ERC20 cryptocurrencies. This project functions as an ICO or CrowdSale of the DEX platform. The project is still in its initial, phase and is meant to document my progress when it comes to my  understanding of DEFI and DAPP Development as I add to my knowledge.

-The MVP for the Exchange is located in it's own repo:
-The ICO/CrowdSale site is hosted on:

# Interacting with client side
- Can't purchase Tokens until you connect your MetaMask account and your address has been whitelisted
- Enter your MetaMask address to get whitelisted
- Then you can click the purchase tokens button.

SCT is currently set to the RATE of 1SCT = 1WEI and only one cant be purchased at a time. Only 1 million SCT have been minted for this sale.
# Some project features
- Central Token and SwapCentral Token Sale contract run on audited openzeppelin smart contract library
- The CrowdSale.sol used by the token sale contract was taken from openzeppelin V2.x and adapted to fit V4.x which      supports solidity ^0.8.0.
# Next Updates
- Work on frontend react styling. *Add login button
- Enable multiple token purchase
- integrate backend with Moralis
- Add deflationary features to Central Token.

- **V2/V3 of DEX maybe be based from forking a popular DEXs like PancakeSwap and UniSwap

# Built with
- frameworks: Truffle & React
- backend is powered by smart contracts written in solidity
- libraries: web3.eth
- languages: JavaScript & solidity.


# How to Install and run project [Local Development]
The following assumes the use of Node @v14.16.0 and Ganache

- clone repo:
- In the project's root run the command: npm migrate --reset
- To launch frontend, Navigate to the client folder then run the command: npm run start

- The current truffle-config is set to already match any network you're on.
