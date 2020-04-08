import React, { Component } from 'react';
import App from './App';
import { Link } from "react-router-dom";

class myHome extends Component {
  // calls the login method in authentication service
  login = () => {
    this.props.auth.login();
  }
  // calls the logout method in authentication service
  logout = () => {
    this.props.auth.logout();
  }
  render() {
    // calls the isAuthenticated method in authentication service
    const { isAuthenticated } = this.props.auth;
    return (
      <div>
        {
          isAuthenticated() &&
          <div className="container column">
            <h5>
              You are logged in!{' '}
              <Link
                style={{ cursor: 'pointer' }}
                onClick={this.logout}
              >
                Log Out
              </Link>.
            </h5>
            <App />
          </div>
        }
        {
          !isAuthenticated() && (
            <div className="m-4 container column">
              
              <h5>
                You are not logged in! Please click {' '}
                <Link
                  style={{ cursor: 'pointer' }}
                  onClick={this.login}
                >
                  Log In
                </Link>
                {' '}to continue.
              </h5>
              <h6>This is the default <b><code>Home</code></b> component. The <b><code>App</code></b> component will only be visible once you authenticate.</h6>
            </div>
          )
        }
      </div>
      );
    }
  }

  export default myHome;