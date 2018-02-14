import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Login from './containers/Login';

class Home extends Component {
  render() {
    return (
      <div>
        <h2>Home</h2>
      </div>
    )
  };
}

class App extends Component {
  render() {
    return (
      <div>
        <Home />
        <Login />
      </div>
    );
  }
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string,
}

function mapStateToProps(state) {
  const { isAuthenticated, errorMessage } = state;

  return {
    isAuthenticated,
    errorMessage
  };
}

export default connect(mapStateToProps)(App)
