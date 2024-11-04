import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
   <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/restaurants">Restaurants</Link>
      <Link to="/menu">Menu</Link>
      <Link to="/orders">Orders</Link>
   </nav>
);

export default Navbar;
