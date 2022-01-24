import React, { Component } from "react";
import CentralToken from "./contracts/CentralToken.json";
import SwapCentralTokenSale from "./contracts/SwapCentralTokenSale.json";
import KYCMockup from "./contracts/KYCMockup.json";

import getWeb3 from "./getWeb3";

import "./App.css";

class App extends Component {
  state = {loaded:false, kycAddress:"0x00123...", tokenSaleAddress:null, userBalance:0};

  componentDidMount = async () => {
    try {
      // Get network provider and web3 instance.
      this.web3 = await getWeb3();

      // Use web3 to get the user's accounts.
      this.accounts = await this.web3.eth.getAccounts();

      // Get the contract instance.
      this.networkId = await this.web3.eth.net.getId();

      this.centralTokenInstance = new this.web3.eth.Contract(
        CentralToken.abi,
        CentralToken.networks[this.networkId] && CentralToken.networks[this.networkId].address,
      );

      this.tokenSaleInstance = new this.web3.eth.Contract(
        SwapCentralTokenSale.abi,
        SwapCentralTokenSale.networks[this.networkId] && SwapCentralTokenSale.networks[this.networkId].address,
      );

      this.kycInstance = new this.web3.eth.Contract(
        KYCMockup.abi,
        KYCMockup.networks[this.networkId] && KYCMockup.networks[this.networkId].address,
      );

      // Set web3, accounts, and contract to the state, and then proceed with an
      // example of interacting with the contract's methods.
      this.listenForTransfer()
      this.setState({loaded:true, tokenSaleAddress:SwapCentralTokenSale.networks[this.networkId].address}, this.updateUserBalance);
    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`,
      );
      console.error(error);
    }
  };

handleInput= (event) =>{
  const target = event.target;
  const value = target.type === "checkbox" ? target.checked : target.value;
  const name = target.name;
  this.setState({[name]:value});
}

handleKycWhitelist = async () => {
  await this.kycInstance.methods.setKycCompleted(this.state.kycAddress).send({from:this.accounts[0]});
  alert(this.state.kycAddress + " Has been added to the whitelist!")
}

updateUserBalance= async() =>{
  let userBalance = await this.centralTokenInstance.methods.balanceOf(this.accounts[0]).call()
  this.setState({userBalance:userBalance})
}

listenForTransfer = async() =>{
this.centralTokenInstance.events.Transfer({to:this.accounts[0]}).on("data",this.updateUserBalance);
}

handleTokenPurchase= async() =>{
await this.tokenSaleInstance.methods.buyTokens(this.accounts[0]).send({from:this.accounts[0], value:this.web3.utils.toWei("1","wei")})
}

  render() {
    if (!this.state.loaded) {
      return <div>Loading Web3, accounts, and contract...</div>;
    }
    return (
      <div className="App">
        <h1>SwapCentral Token Sale!</h1>
        <p>Partake in Token Sale!</p>
        <h2>KYC Whitelisting</h2>
        Whitelist Address: <input type="text" name ="kycAddress" value={this.state.kycAddress} onChange={this.handleInput} />
        <button type="button" onClick={this.handleKycWhitelist}>Add to Whitelist</button>
        <h2>Buy CentralTokens(SCT)</h2>
        <p>{this.state.tokenSaleAddress}</p>
        <p>SCT Balance: {this.state.userBalance} SCT</p>
        <button type="button" onClick={this.handleTokenPurchase}>Buy more tokens!</button>
      </div>
    );
  }
}

export default App;
