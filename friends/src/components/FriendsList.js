import React from 'react';
import { connect } from 'react-redux';
import { deleteFriends } from '../store/actions';

const FriendsList = props => {
  const { name, age, email } = props.friend;

  const deleteFriends = () => {
    props.deleteFriends(props.friend.id);
  };

  const populate = () => {
    
  };
  console.log(props);
  return (
    <div>
      <h1>{name}</h1>
      <p>{age}</p>
      <p>{email}</p>
      <button onClick={deleteFriends}>delete</button>
      <button onClick={populate}>update</button>
    </div>
  );
};

const mapActionsToProps = {
  deleteFriends
};

export default connect(
  null,
  mapActionsToProps
)(FriendsList);
