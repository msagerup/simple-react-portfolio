import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>Portfolio</h1>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/prosjects">Prosjects</NavLink>
    <NavLink to="/contact">Contact</NavLink>
  </header>
);

export default Header;
