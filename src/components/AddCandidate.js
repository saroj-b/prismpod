import React ,{Component}from "react";
import '../components/css/addcandidate.css';
import Head from "./Head";
import axios from 'axios';
// import FormikControl from './formikcontrol';
import Validate from "./utility/FormValidation";
import FormErrors from "./FormErrors";
class AddCandidate extends Component {
  state = {
   fname: "",
  email: "",
  oexpertise: "",
  portfolio: "",
  resetForm: "",
    errors: {
      blankfield: false,
      passwordmatch: false
    }
  }
  clearErrorState = () => {
    this.setState({
      errors: {
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
    const { fname,email,oexpertise, portfolio  } = this.state;
    // Database insert here
    if (fname && email && oexpertise && portfolio) {
      axios.post("https://qk46jtsdt7.execute-api.us-east-1.amazonaws.com/dev/add_Candidate_DynamoDB  ",
       {CandidateFullName:fname,CandidateEmail: email,
        CandidateOtherExpertise: oexpertise,CandidatePortfolio:portfolio }).then(res => {
          console.log(res);
          console.log(res.data);
          window.alert("New Requirement added successfully");
          window.location.reload();
      }, (error) => {
          console.log(error);
      });
  }
  };
  onInputChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
    document.getElementById(event.target.id).classList.remove("is-danger");
  }
  plainArray = ["Option 1", "Option 2", "Option 3", "Option 4", "Option 5"];
render() {
    return (
     <div className="wrapper1">
        <div className="form-wrapper">
          <FormErrors formerrors={this.state.errors} />
          <form onSubmit={this.handleSubmit}>
            <div className="email">
              <input
                placeholder="First Name"
                id="fname"
                className="oo1"
                type="text"
                value={this.state.fname}
                    onChange={this.onInputChange}
              />
            </div>

            <div className="email">
              <input
                className="input1"
                placeholder="Email"
                type="email"
                  value={this.state.email}
                    onChange={this.onInputChange}
                    id="email"
              />
            </div>

            {/* <div className="password">
              <Select
              isMulti
              // options={Country}
                className="input1"
                placeholder="Area"
                type="text"
               value={this.state.area}
                    onChange={this.onInputChange}
                    id="area"
              />   
            </div> */}

            <div className="password">
              <input             
                className="input1"
                placeholder="Any other expertise you would like to list?"
                type="text"
               value={this.state.oexpertise}
                    onChange={this.onInputChange}
                    id="oexpertise"
              />
            </div>

            <div className="password">
              <input
                className="input1"
                placeholder="portfolio of your prior work ?"
                type="text"
                value={this.state.portfolio}
                    onChange={this.onInputChange}
                    id="portfolio"
              />
            </div>

            <div className="createAccount">
              <button type="submit" >Save</button>
              <a href="/candidatehome">Back to Home</a>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default AddCandidate;