import React from 'react';
import logo from '../imgs/logo.jpeg';

const Header = () => {
  return (
    <header>
      <img className="logo" src={logo} alt="logo"/>
      <h1>Alpha Chat</h1>
    </header>
  )
}

export default Header;