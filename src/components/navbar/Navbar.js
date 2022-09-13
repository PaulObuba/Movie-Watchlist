import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className='navbar'>
        <h2>Popular</h2>
        <ul className='nav-items'>
            <li className='nav-item'> Popular</li>
            <li className='nav-item'> Top Rated</li>
            <li className='nav-item'> Upcoming</li>
        </ul>
    </nav>
  )
}

export default Navbar;
