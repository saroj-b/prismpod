import React, { Component } from 'react';
import { Auth } from 'aws-amplify';
// import Button from 'react-bootstrap/Button';
import {Dropdown} from 'react-bootstrap';


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
                Candidate
              </a>
            )} 

            {this.props.auth.isAuthenticated && (
              <a href="/employerhome" className="navbar-item">
                Client
              </a>
            )}
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              {/* {this.props.auth.isAuthenticated && this.props.auth.user && (
                <p>
                  Hello {this.props.auth.user.username}
                </p>
              )} */}
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
                {/* {this.props.auth.isAuthenticated && (
                  <a href="/" onClick={this.handleLogOut} className="button is-danger">
                    Log out
                  </a>
                )} */}
               
                {this.props.auth.isAuthenticated && (  
                <Dropdown>
                  <Dropdown.Toggle variant="Secondary" id="dropdown-basic">
                  {this.props.auth.isAuthenticated && this.props.auth.user && (
                    <strong>
                    Hi {this.props.auth.user.username}
                    </strong>
                    )} 
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#">My Account</Dropdown.Item>
                    <Dropdown.Item href="/changepassword">Change Password</Dropdown.Item>
                    <Dropdown.Item onClick={this.handleLogOut} href="/" className="button is-danger">Log Out</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                )}  
              </div>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}
