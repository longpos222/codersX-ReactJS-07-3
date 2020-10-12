import React, { Component } from 'react';
import './TabMenu.css';


class TabMenu extends Component {
  render(){
    return (
      <div className="tab-menu">
        <ul>
           {
          this.props.items.map(item => (
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
  }
} 

export default TabMenu;