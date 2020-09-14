import React, { Component } from 'react';
import './TabMenu.css';
import iconHome from '../../images/TabMenu-home.svg';
import iconDeals from '../../images/TabMenu-deals.svg';
import iconUpload from '../../images/TabMenu-upload.svg';
import iconWork from '../../images/TabMenu-work.svg';
import iconSettings from '../../images/TabMenu-settings.svg';


class TabMenu extends Component {
  render(){

    const iconList = [
      {label: 'HOME', icon: iconHome},
      {label: 'DEALS', icon: iconDeals},
      {label: 'UPLOAD', icon: iconUpload},
      {label: 'WORK', icon: iconWork},
      {label: 'SETTINGS', icon: iconSettings},
    ];

    return (
      <div className="tab-menu">
        <ul>
          {
          iconList.map(item => (
            <a href="google.com">
              <li>
                <img width="48" src={item.icon} alt="" />
                  <p>{item.label}</p>
              </li>
            </a>
          ))
          }
        </ul>
      </div>  
    );
  }; 
} 

export default TabMenu;