import React, { Component } from "react";
import './css/addcandidate.css';
import Head from './Head';


class AddCandidate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: null,
      lastName: null,
      email: null,
      password: null, 
      
      formErrors: {
        firstName: "",
        lastName: "",
        email: "",
        password: ""
      }
    };
  }

  render() {
    const { formErrors } = this.state;

    return (
        <>
        {/* <Head/> */}
      <div className="wrapper1">
        <div className="form-wrapper">
          <form>
            <div className="email">
              <input
                className={formErrors.firstName.length > 0 ? "error" : null}
                placeholder="Enter Skill"
                className="oo1"
                type="text"
                name="skill"
                noValidate
                onChange={this.handleChange}
              />
            </div>
            
            <div className="createAccount">
              <button type="submit">Search Candidate</button>
              <a href="/employerhome">Back to Home</a>
            </div>
          </form>
        </div>
      </div>
      </>
    );
  }
}

export default AddCandidate;
