import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header.js';
import LoginFormABC from './components/loginFormABC.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <LoginFormABC />
      </div>  
    );
  }
}

export default App;
