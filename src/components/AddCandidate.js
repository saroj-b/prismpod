import React ,{Component}from "react";
import '../components/css/addcandidate.css';
import Head from "./Head";
import axios from 'axios';
// import FormikControl from './formikcontrol';
import Validate from "./utility/FormValidation";
import FormErrors from "./FormErrors";
// import Select from "react-select/src/Select";
import Select from 'react-select';
const area = [
   { 
     value: 'India', label: 'India'
    },
  { 
    value: 'US', label: 'US'
   },
  { 
    value: 'Canada', label: 'Canada'
   },
  { 
    value: 'UK', label: 'UK' 
  },
]
class AddCandidate extends Component {
  state = {
  fname: "",
  candidateemail: "",
  area: "",
  oexpertise: "",
  portfolio: "",
  resetForm: "",
    errors: {
      blankfield: false,
      passwordmatch: false
    }
  }
  handleChange = area=> {
    this.setState({ area });
    console.log(`Option selected:`, area);
  };
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
    const { fname,candidateemail,oexpertise, area, portfolio  } = this.state;
    // Database insert here
    if (fname && candidateemail && area && oexpertise && portfolio) {
      axios.post("https://qk46jtsdt7.execute-api.us-east-1.amazonaws.com/dev/add_Candidate_DynamoDB  ",
       {CandidateFullName:fname,CandidateEmail: candidateemail, CandidateAreaOfExpertise : area,
        CandidateOtherExpertise: oexpertise,CandidatePortfolio:portfolio }).then(res => {
          console.log(res);
          console.log(res.data);
          window.alert("New candidate details added successfully");
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
render() {
    return (
     <div className="container parent">
        <div className="form-wrapper">
          <FormErrors formerrors={this.state.errors} />
          <form onSubmit={this.handleSubmit}>
            {/* For Name */}
            <div className="email">
              <input
                className="input" 
                placeholder="Enter Fullname"
                type="text"
                id="fname"
                value={this.state.fname}
                onChange={this.onInputChange}
              />
            </div>
            {/* For Email */}
            <div className="email">
              <input
                className="input"
                placeholder="Enter Email"
                type="email"
                value={this.state.candidateemail}
                onChange={this.onInputChange}
                id="candidateemail"
              />
            </div>
            {/* For area */}
            <div className="email">
              <Select
                  // value={area}
                  onChange={this.handleChange}
                  options={area}
                  className="input1"
                  id="area"
                  placeholder="Area"
                  isMulti="true"
                  />
            </div>
            {/* Expertise */}
            <div className="password">
              <input             
                className="input"
                placeholder="Any other expertise you would like to list?"
                type="text"
                value={this.state.oexpertise}
                onChange={this.onInputChange}
                id="oexpertise"
              />
            </div>
            <div className="password">
              <input
                className="input"
                placeholder="portfolio of your prior work ?"
                type="text"
                value={this.state.portfolio}
                onChange={this.onInputChange}
                id="portfolio"
              />
            </div>
            <div className="createAccount">
              <button type="submit" className="button is-success">Save</button>
              <a href="/candidatehome">Back to Home</a>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default AddCandidate;