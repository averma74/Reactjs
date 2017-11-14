import React, { Component } from 'react';
import img from './logo.png'

class Header extends Component {
  render() {
    return (
      <header>

        <div className = "logo">
         <img src={img} alt="logo"></img>
         <h1 className = "headerh1">CHELSEA FC</h1>
        </div>

      </header>
    );
  }
}

export default Header;
