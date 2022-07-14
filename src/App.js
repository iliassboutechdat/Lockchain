import Web3 from 'web3'
//import './App.css'
import 'bootstrap'
import { BrowserRouter as Router, Route,Routes, Link } from "react-router-dom";

import React, {Component, useEffect, useState } from "react";

import Home from './pages/Home';
import PageNotFound from './pages/PageNotFound';
import CryptoPayementForm from './pages/CryptoPayementForm';



//import './config.overrides.js'

class App extends Component {

  componentWillMount() {
    this.loadBlockchainData()
    this.returnAccount()
  }

  async loadBlockchainData() {
    const web3 = new Web3(Web3.givenProvider /*|| "http://localhost:7545"*/)
    const accounts = await web3.eth.requestAccounts()
    this.setState({ account: accounts[0] })
    console.log({ account: accounts[0] });

  }
  async returnAccount(){
    document.createTextNode(this.state.account);
  }
  constructor(props) {
    super(props)
    this.state = { account: '' }
  }
  
  render() {
    return (
      <Router>
           <Routes>
              <Route path="/" element={<Home/>} exact  />
              <Route path="/pagenotfound" element={<PageNotFound/>} exact  />         
              <Route path="/payement" element={<CryptoPayementForm/>} exact  />         
         
</Routes>
        
        </Router>
        /*
      <div className="container">
        <h1>Hello, World!</h1>
        <h1>{this.state.account}</h1>
        <p></p> 
      </div>*/
    );
  }
}

export default App;