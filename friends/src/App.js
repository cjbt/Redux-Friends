import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import FriendsList from './components/FriendsList';
import { fetchFriends } from './store/actions';
import FriendsForm from './components/FriendsForm';

class App extends Component {
  componentDidMount() {
    this.props.fetchFriends();
  }
  render() {
    console.log(this.props);
    return (
      <div className='App'>
        <h1>h1</h1>
        <FriendsForm />
        {this.props.friends.map(friend => (
          <FriendsList friend={friend} key={friend.id} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  friends: state.friends
});

export default connect(
  mapStateToProps,
  { fetchFriends }
)(App);
