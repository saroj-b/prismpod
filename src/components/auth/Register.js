import React, { Component } from 'react';
import FormErrors from "../FormErrors";
import Validate from "../utility/FormValidation";
import { Auth } from "aws-amplify";
import axios from 'axios';
import '../css/register.css';

class Register extends Component {
  
  state = {
    username: "",
    email: "",
    password: "",
    usertype: "",
    confirmpassword: "",
    errors: {
      cognito: null,
      blankfield: false,
      passwordmatch: false
    }
  }

  clearErrorState = () => {
    this.setState({
      errors: {
        cognito: null,
        blankfield: false,
        passwordmatch: false
      }
    });
  }

  handleSubmit = async event => {
    event.preventDefault();

    // Form validation
    this.clearErrorState();
    const error = Validate(event, this.state);
    if (error) {
      this.setState({
        errors: { ...this.state.errors, ...error }
      });
    }

    // AWS Cognito integration here
    const { username, email, usertype, password } = this.state;
    try {
      const signUpResponse = await Auth.signUp({
        username,
        password,
        usertype,
        attributes: {
          email: email
        }
      }); 

     // Database insert here 
      if (username && email && password && usertype) {
        axios.post('https://p2a9aaoopf.execute-api.us-east-1.amazonaws.com/dev/PrismPodSignup', {Username: username, Usertype: usertype, Email:email, Password: password}).then(res => {
            console.log(res);
            console.log(res.data);
        }, (error) => {
            console.log(error);
        });
    }

    this.props.history.push("/welcome");
    
      console.log(signUpResponse);
    } catch (error) {
      let err = null;
      !error.message ? err = { "message": error } : err = error;
      this.setState({
        errors: {
          ...this.state.errors,
          cognito: err
        }
      });
    }
  };

  onInputChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
    document.getElementById(event.target.id).classList.remove("is-danger");
  }

  handleChange = e => {
    const { name, value } = e.target;

    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <section className="section auth">
        <div className="container parent">
          <h1>Register with PrismPod</h1>
          <FormErrors formerrors={this.state.errors} />
          <form onSubmit={this.handleSubmit}>
          
            <div className="field">
                <p className="control">
                  <input 
                    className="input" 
                    type="text"
                    id="username"
                    aria-describedby="userNameHelp"
                    placeholder="Enter username"
                    value={this.state.username}
                    onChange={this.onInputChange}
                  />
                </p>
              </div>

              <div className="field">
                <p className="control">
                  <label>Sign-up as</label> {' '} {' '} {' '}
                    <input 
                      type="radio" 
                      value="candidate" 
                      name="usertype"
                      id="candidate"
                      onChange={this.handleChange} /> Candidate {' '}
                    <input 
                      type="radio"  
                      id="employer"
                      value="employer" 
                      name="usertype"
                      onChange={this.handleChange} /> Employer
                </p>
              </div>
              
              <div className="field">
                <p className="control">
                  <input 
                    className="input" 
                    type="email"
                    id="email"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                    value={this.state.email}
                    onChange={this.onInputChange} 
                  />
                </p>
              </div>

              <div className="field">
                <p className="control">
                  <input 
                    className="input" 
                    type="password"
                    id="password"
                    placeholder="Password"
                    value={this.state.password}
                    onChange={this.onInputChange}
                  />
                </p>
              </div>

              <div className="field">
                <p className="control">
                  <input 
                    className="input" 
                    type="password"
                    id="confirmpassword"
                    placeholder="Confirm password"
                    value={this.state.confirmpassword}
                    onChange={this.onInputChange}
                  />
                </p>
              </div>

              <div className="field">
                <p className="control">
                  <a href="/login">Already have an account?</a>
                </p>
              </div>
              
              <div className="field">
                <p className="control">
                  <button className="button is-success">
                    Register
                  </button>
                </p>
              </div>
          
            
          </form>
        </div>
      </section>
    );
  }
}

export default Register;