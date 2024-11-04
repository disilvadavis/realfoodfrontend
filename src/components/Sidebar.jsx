import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => (
   <aside className="sidebar">
      <Link to="/">Home</Link>
      <Link to="/restaurants">Restaurants</Link>
      <Link to="/orders">Order History</Link>
   </aside>
);

export default Sidebar;
