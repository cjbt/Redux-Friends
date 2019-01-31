import React from 'react';
import { connect } from 'react-redux';
import { handleChange, updateFriend, postFriend } from '../store/actions';

const FriendForm = props => {
  const handleInputChange = e => {
    props.handleChange(e.target.name, e.target.value);
  };
  const postFriend = e => {
    e.preventDefault();
    props.postFriend(props.name, props.age, props.email);
    props.history.push('/friends');
  };
  const updateFriend = e => {
    e.preventDefault();
    props.updateFriend(props.beingUpdated, props.name, props.age, props.email);
    props.history.push('/friends');
  };
  console.log('%cHELLO', 'color: red;', props.beingUpdated);
  return (
    <div className='FriendForm'>
      <form onSubmit={props.isUpdating ? updateFriend : postFriend}>
        <input
          onChange={handleInputChange}
          placeholder='name'
          value={props.name}
          name='name'
        />
        <input
          onChange={handleInputChange}
          placeholder='age'
          value={props.age}
          name='age'
        />
        <input
          onChange={handleInputChange}
          placeholder='email'
          value={props.height}
          name='email'
        />
        <button type='submit'>
          {props.isUpdating ? 'UPDATING' : 'ADD FRIEND'}
        </button>
      </form>
    </div>
  );
};

const map = state => ({
  isUpdating: state.friendsReducer.isUpdating,
  name: state.friendsReducer.name,
  age: state.friendsReducer.age,
  email: state.friendsReducer.email,
  beingUpdated: state.friendsReducer.beingUpdated
});

const action = {
  handleChange,
  updateFriend,
  postFriend
};
export default connect(
  map,
  action
)(FriendForm);
