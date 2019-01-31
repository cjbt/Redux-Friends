import React from 'react';
import { connect } from 'react-redux';
import { deleteFriend, populateFriends } from '../store/actions';

const FriendCard = props => {
  const friend = props.friends.find(
    friend => `${friend.id}` === props.match.params.id
  );
  const deleteFriend = e => {
    e.preventDefault();
    props.deleteFriend(friend.id);
    props.history.push('/friends');
  };
  const populateFriends = e => {
    e.preventDefault();
    props.populateFriends(friend.id);
    props.history.push('/friend-add');
  };
  if (!friend) return <h2>Friend doesn't exist</h2>;

  return (
    <div>
      <div className='Smurf'>
        <h3>{friend.name}</h3>
        <strong>{friend.email} email</strong>
        <p>{friend.age} smurf years old</p>
      </div>
      <button onClick={populateFriends}>update</button>
      <button onClick={deleteFriend}>delete</button>
    </div>
  );
};

const map = state => ({
  friends: state.friendsReducer.friends
});

const actions = {
  deleteFriend,
  populateFriends
};
export default connect(
  map,
  actions
)(FriendCard);
