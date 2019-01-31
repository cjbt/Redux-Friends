import React from 'react';
import { connect } from 'react-redux';
import { Friend } from '../components';

const FriendsList = props => {
  return (
    <div>
      <h1>Friend's List</h1>
      {props.friends.map(friend => (
        <Friend friend={friend} key={friend.id} />
      ))}
    </div>
  );
};
const map = state => ({
  friends: state.friendsReducer.friends
});
export default connect(
  map,
  {}
)(FriendsList);
