import React, { Component } from 'react';
import { connect } from 'react-redux';
import './styles/App.scss';
import { getFriends } from './store/actions';
import { Route } from 'react-router-dom';

import Home from './containers/Home/Home';

class App extends Component {
  componentDidMount() {
    this.props.getFriends();
    console.log(this.props);
  }
  render() {
    console.log(this.props);
    return (
      <>
        <Route exact path='/' component={Home} />
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
