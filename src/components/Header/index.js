import React, { Component } from 'react';
import './Header.css';
import GoBackArrow from "../../images/go-back-arrow.svg";
import MainLogo from "../../images/main-logo.svg";

export const Header = () => {
  return(
    <header className="header">

      <div className="go-back">
        <img src={GoBackArrow} alt="" />
        Go back
      </div>

      <div className="main-logo">
        <img src={MainLogo} alt="" />
      </div>

      <div className="sign-up">
        <button>Sign up</button>
      </div>

      </header>     
  );
}
