import React from 'react'
import {NavLink, Link} from 'react-router-dom';
import Dashboard from '../protected/Dashboard';

const Header = () => {

  return (
    <>
    
       <nav className='public-nav'>
          <p><Link to='/g-store' className='Link'>G-STORE</Link></p>
          <strong><NavLink className="Link" to="/g-store">Login /</NavLink><NavLink className="Link" to="/g-store/register"> Register</NavLink></strong>
      </nav>
    
    </>
  );


}

export default Header;
