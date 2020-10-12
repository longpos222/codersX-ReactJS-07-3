import React, { Component } from 'react';
import './App.css';
import {Header} from './components/Header';
import LoginForm from './components/LoginForm';
import TabMenu from './components/TabMenu/';

import iconHome from './images/TabMenu-home.svg';
import iconDeals from './images/TabMenu-deals.svg';
import iconUpload from './images/TabMenu-upload.svg';
import iconWork from './images/TabMenu-work.svg';
import iconSettings from './images/TabMenu-settings.svg';

const items = [
  {label: 'HOME', icon: iconHome},
  {label: 'DEALS', icon: iconDeals},
  {label: 'UPLOAD', icon: iconUpload},
  {label: 'WORK', icon: iconWork},
  {label: 'SETTINGS', icon: iconSettings},
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <LoginForm email='abc@gmail.com' />
        <TabMenu items={items} />
      </div>
    );
  }
}

export default App;
