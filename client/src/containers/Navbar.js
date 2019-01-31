import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <Link to='/'>
        <h2>Home</h2>
      </Link>
      <Link to='/friend-add'>
        <h2>Add friend</h2>
      </Link>
    </div>
  );
};

export default Navbar;
