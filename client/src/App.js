import React, { Component } from 'react';
import { connect } from 'react-redux';
import './styles/App.scss';
import { getFriends } from './store/actions';
import { Route } from 'react-router-dom';

import { Home, FriendsList, FriendForm, Navbar } from './containers';
import { FriendCard } from './components';

class App extends Component {
  componentDidMount() {
    this.props.getFriends();
    console.log(this.props);
  }
  render() {
    console.log(this.props);
    return (
      <>
        <Navbar />
        <Route exact path='/' component={Home} />
        <Route path='/friends' component={FriendsList} />
        <Route path='/friend-add' component={FriendForm} />
        <Route path='/friend/:id' component={FriendCard} />
      </>
    );
  }
}

const map = state => ({
  friends: state.friendsReducer.friends
});

export default connect(
  map,
  { getFriends }
)(App);
