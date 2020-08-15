import React, { Component } from 'react';
import './TabMenu.css';
import IconHome from '../../images/TabMenu-home.svg';
import IconDeals from '../../images/TabMenu-deals.svg';
import IconUpload from '../../images/TabMenu-upload.svg';
import IconWork from '../../images/TabMenu-work.svg';
import IconSettings from '../../images/TabMenu-settings.svg';

export const TabMenu = () => {
    return(
      <div className="tab-menu">

        <div className="menu-item home">
          <div className="tab-menu-icon">
            <img src={IconHome} alt="" />
          </div>
          <div className="icon-tittle">HOME</div>
        </div>

        <div className="menu-item deals">
          <div className="tab-menu-icon">
            <img src={IconDeals} alt="" />
          </div>
          <div className="icon-tittle">DEALS</div>
        </div>

        <div className="menu-item upload">
          <div className="tab-menu-icon">
            <img src={IconUpload} alt="" />
          </div>
          <div className="icon-tittle">UPLOAD</div>
        </div>

        <div className="menu-item work">
          <div className="tab-menu-icon">
          <img src={IconWork} alt="" />
          </div>
          <div className="icon-tittle">WORK</div>
        </div>

        <div className="menu-item settings">
          <div className="tab-menu-icon">
            <img src={IconSettings} alt="" />
          </div>
          <div className="icon-tittle">SETTINGS</div>
        </div>

      </div>  

    );
}
