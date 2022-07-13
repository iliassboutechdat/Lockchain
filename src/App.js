import Web3 from 'web3'
//import './App.css'
import 'bootstrap'
import { BrowserRouter as Router, Route,Routes, Link } from "react-router-dom";

import React, {Component, useEffect, useState } from "react";

import Home from './pages/Home';
import PageNotFound from './pages/PageNotFound';


//import './config.overrides.js'

class App extends Component {
  
  render() {
    return (
      <Router>
           <Routes>
              <Route path="/" element={<Home/>} exact  />         
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