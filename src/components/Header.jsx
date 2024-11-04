import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
   <header className="header">
      <h1>Food Delivery</h1>
      <nav>
         <Link to="/">Home</Link>
         <Link to="/restaurants">Restaurants</Link>
         <Link to="/orders">Orders</Link>
      </nav>
   </header>
);

export default Header;
