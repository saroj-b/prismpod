import React, { Component } from 'react';
import { Auth } from 'aws-amplify';


export default class Navbar extends Component {
  handleLogOut = async event => {
    event.preventDefault();
    try {
      Auth.signOut();
      this.props.auth.setAuthStatus(false);
      this.props.auth.setUser(null);
    }catch(error) {
      console.log(error.message);
    }
  }
  
  render() {
    return (
      <nav className="navbar is-transparent" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item image is-96x96" href="/">
            <img src="prismpodlogo.png" width="112" height="60" alt="prismpod logo" />
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
          
            {!this.props.auth.isAuthenticated && (
              <a href="/" className="navbar-item">
              Home
            </a>
            )}
            
            {this.props.auth.isAuthenticated && (
              <a href="/candidatehome" className="navbar-item">
                Candidate Home
              </a>
            )} 

            {this.props.auth.isAuthenticated && (
              <a href="/employerhome" className="navbar-item">
                Employer Home
              </a>
            )}
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              {this.props.auth.isAuthenticated && this.props.auth.user && (
                <p>
                  Hello {this.props.auth.user.username}
                </p>
              )}
              <div className="buttons">
                {!this.props.auth.isAuthenticated && (
                  <div>
                    <a href="/register" className="button is-primary">
                      <strong>Register</strong>
                    </a>
                    <a href="/login" className="button is-light">
                      Log in
                    </a>
                  </div>
                )}
                {this.props.auth.isAuthenticated && (
                  <a href="/" onClick={this.handleLogOut} className="button is-danger">
                    Log out
                  </a>
                )}
                {/* {this.props.auth.isAuthenticated && (
                <div class="dropdown show">
                  <a class="btn btn-secondary dropdown-toggle" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                    Your Account <span class="caret"></span>
                  </a>

                  <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                      <a href="/changepassword" className="button is-light">
                        Change Password
                      </a>
                  </div>
                </div>
                )} */}
                <ul className="account-dropdown__quick-links account-dropdown__segment">
                      <li className="account-dropdown__link">
                        <a className="account-dropdown__link__anchor" href="#" onClick={this.handleLinkClick}>
                          Your profile
                        </a>
                      </li>
                      <li className="account-dropdown__link">
                        <a className="account-dropdown__link__anchor" href="#" onClick={this.handleLinkClick}>
                          Your stars
                        </a>
                      </li>
                      <li className="account-dropdown__link">
                        <a className="account-dropdown__link__anchor" href="#" onClick={this.handleLinkClick}>
                          Explore
                        </a>
                      </li>
                      <li className="account-dropdown__link">
                        <a className="account-dropdown__link__anchor" href="#" onClick={this.handleLinkClick}>
                          Help
                        </a>
                      </li>
                    </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}
