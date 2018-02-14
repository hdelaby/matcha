import React, { Component } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';

class Login extends Component {
  render() {
    return (
      <form>
        Username: 
        <input type="text" name="username"/>
        <br />
        Password: 
        <input type="text" name="password"/>
        <br />
      </form>
    );
  }
}

Login.propTypes = {
  dispatch: PropTypes.func.isRequired
}

const mapDispatchToProps = dispatch => {
  return {
    onClick: creds => dispatch(loginUser(creds))
  }
}

export default Login;