import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <Link to='/friends'>
        <h1>My Friends List</h1>
      </Link>
    </div>
  );
};

export default Home;
