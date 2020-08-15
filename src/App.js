import React, { Component } from 'react';
import './App.css';
import {Header} from './components/Header';
import {LoginForm} from './components/LoginForm';
import {TabMenu} from './components/TabMenu';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <LoginForm />
        <TabMenu />
      </div>  
    );
  }
}

export default App;
