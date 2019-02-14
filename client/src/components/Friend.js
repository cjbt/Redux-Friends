import React from 'react';
import { Link } from 'react-router-dom';

const Friend = props => {
  const { id, email, age, name } = props.friend;
  return (
    <div className='Friend'>
      <Link to={`/friend/${id}`}>
        <h3>{name}</h3>
      </Link>
      <strong>{email} email</strong>
      <p>{age} years old</p>
    </div>
  );
};

export default Friend;
