import React from 'react'
import {NavLink, Link} from 'react-router-dom';
import Dashboard from '../protected/Dashboard';

const Header = () => {

  return (
    <>
    
       <nav className='public-nav'>
          <p><Link to='/gstore' className='Link'>G-STORE</Link></p>
          <strong><NavLink className="Link" to="/gstore">Login /</NavLink><NavLink className="Link" to="/gstore/register"> Register</NavLink></strong>
      </nav>
    
    </>
  );


}

export default Header;
