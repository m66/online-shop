import React from 'react';
import './header.scss';
import NavbarComp from './NavbarComp/NavbarComp';
import { useNavigate } from "react-router-dom";
import DarkMode from '../DarkMode/DarkMode';

const Header = () => {
  let navigate = useNavigate();
  return (
    <div className='header'>
        <div className="header-top">
          <h1>Online Shop</h1>
          <button onClick={() => navigate("/admin")}>Admin</button>
          {/* <DarkMode /> */}
        </div>
        <NavbarComp />
    </div>
  )
}

export default Header;