import React from 'react';
import './header.scss';
import NavbarComp from './NavbarComp/NavbarComp';


const Header = () => {
  return (
    <div className='header'>
        <div className="header-top">
          <h1>Online Shop</h1>
          <button>Admin</button>
        </div>
        <NavbarComp />
    </div>
  )
}

export default Header;