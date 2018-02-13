import React, { Component, PropTypes } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';

class Home extends Component {
  render() {
    return (
      <div>
        <h2>Home</h2>
      </div>
    )
  };
}

class SignIn extends Component {
  render() {
    return (
      <form>
        Username: 
        <input type="text" name="username"/>
        <br />
        Email: 
        <input type="text" name="email"/>
        <br />
        First name: 
        <input type="text" name="firstname"/>
        <br />
        Surname: 
        <input type="text" name="surname"/>
        <br />
        Password: 
        <input type="text" name="password"/>
        <br />
      </form>
    )
  }
}

class LogIn extends Component {
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

class Profile extends Component {
  render() {
    return (
      <h2>This will be the user profile for user {this.props.match.params.id}!</h2>
    );
  }
}

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/signin">Sign in</Link></li>
            <li><Link to="/login">Log in</Link></li>
            <li><Link to="/profile/36">Profile</Link></li>
          </ul>

          <hr/>

          <Route exact path="/" component={Home}/>
          <Route path="/signin" component={SignIn}/>
          <Route path="/login" component={LogIn}/>
          <Route path="/profile/:id" component={Profile}/>
        </div>
      </Router>
    );
  }
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
  quote: PropTypes.string,
  isAuthenticated: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string,
  isSecretQuote: PropTypes.bool.isRequired
}

function mapStateToProps(state) {
  const { quotes, auth } = state
  const { quote, authenticated } = quotes
  const { isAuthenticated, errorMessage } = auth

  return {
    quote,
    isSecretQuote: authenticated,
    isAuthenticated,
    errorMessage
  }
}

export default connect(mapStateToProps)(App)
