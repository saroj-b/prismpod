import React, { Component } from 'react';
import FormErrors from "./FormErrors";
import Validate from "./utility/FormValidation";
import axios from 'axios';
import './css/register.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Select from 'react-select';
import MultiSelect from "react-multi-select-component";

const remoteEngineerPreference = [
  { value: 'USA', label: 'US-Based' },
  { value: 'Canada', label: 'Canada-Based' },
  { value: 'LatinAmerica', label: 'Nearshore- Latin America' },
  { value: 'India', label: 'Offshore- India' }
];

const budget = [
  { value: '10000', label: '< $10,000' },
  { value: '25000', label: '$10000 - $25000' },
  { value: '50000', label: '$25000 - $50000' },
  { value: '50000+', label: '> $50000' }
];

const frontEndSkills = [
  { value: 'React', label: 'React' },
  { value: 'Angular', label: 'Angular' },
  { value: 'Vue', label: 'Vue' },
  { value: 'HTML5', label: 'HTML5' },
  { value: 'Bootstrap', label: 'Bootstrap' },
  { value: 'CSS', label: 'CSS' }
];

const backEndSkills = [
  { value: 'Node', label: 'Node' },
  { value: 'Java', label: 'Java' },
  { value: 'Python', label: 'Python' },
  { value: 'C++', label: 'C++' },
  { value: 'C', label: 'C' },
  { value: 'AWS', label: 'AWS' }
];

const mobileSkills = [
  { value: 'Kotlin', label: 'Kotlin' },
  { value: 'Java', label: 'Java' },
  { value: 'Python', label: 'Python' },
  { value: 'C#', label: 'C#' }
]

class Register extends Component {
  
  state = {
    projectObjective: "",
    frontendTechSkills: null,
    backendTechSkills: null,
    mobileTechSkills: null,
    remoteEngPref: null,
    budgetRange: null,
    errors: {
      blankfield: false
    } 
  }

  //for select option
  handleChange = remoteEngPref => {
    this.setState({ remoteEngPref });
    console.log(`Option selected:`, remoteEngPref.value);
  };

  handleChange = budgetRange => {
    this.setState({ budgetRange });
    console.log(`Option selected:`, budgetRange.value);
  };

  handleChange = frontendTechSkills => {
    this.setState({ frontendTechSkills });
    console.log(`Option selected:`, frontendTechSkills.value);
  };

  handleChange = backendTechSkills => {
    this.setState({ backendTechSkills });
    console.log(`Option selected:`, backendTechSkills.value);
  };

  handleChange = mobileTechSkills => {
    this.setState({ mobileTechSkills });
    console.log(`Option selected:`, mobileTechSkills.value);
  };

  //for clear error
  clearErrorState = () => {
    this.setState({
      errors: {
        blankfield: false
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

    const { projectObjective, frontendTechSkills, backendTechSkills, mobileTechSkills, remoteEngPref, budgetRange  } = this.state;

    // Database insert here
    if (projectObjective  && remoteEngPref) {
      axios.post('https://lt8n4qcae3.execute-api.us-east-1.amazonaws.com/dev/employerProjectRequirements', {ProjectObjective: projectObjective, BackendSkills: backendTechSkills, FrontendSkills:frontendTechSkills, MobileTechSkills: mobileTechSkills, RemoteEngPrefernce: remoteEngPref.value, ProjectBudgetRange: budgetRange }).then(res => {
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

  render() {

    const { remoteEngPref } = this.state;
    const { budgetRange } = this.state;
    const { frontendTechSkills } = this.state;
    const { backendTechSkills } = this.state;
    const { mobileTechSkills } = this.state;

    return (
      <section className="section auth">
        <div className="container parent">
          <h1>Add a Requirement</h1>
          <FormErrors formerrors={this.state.errors} />
          <form onSubmit={this.handleSubmit}>

              <div className="field">
                <p className="control">
                  <textarea
                  className="input" 
                  id="projectObjective"
                  placeholder="Project Objective"
                  value={this.state.projectObjective}
                  onChange={this.onInputChange}
                  />
                </p>
              </div>

              {/* Multiselect Dropdown Starts Here */}

              <div className="field">
                <p className="control">
                <Select
                  value={frontendTechSkills}
                  onChange={this.handleChange}
                  options={frontEndSkills}
                  id="frontEndSkills"
                  placeholder="Front-end Skills"
                  isMulti="true"
                  />
                </p>
              </div>

              <div className="field">
                <p className="control">
                <Select
                  value={backendTechSkills}
                  onChange={this.handleChange}
                  options={backEndSkills}
                  id="backEndSkills"
                  placeholder="Back-end Skills"
                  isMulti="true"
                  />
                </p>
              </div>

              
              <div className="field">
                <p className="control">
                <Select
                  value={mobileTechSkills}
                  onChange={this.handleChange}
                  options={mobileSkills}
                  id="mobileSkills"
                  placeholder="Mobile Skills"
                  isMulti="true"
                  />
                </p>
              </div>

              {/* Select option starts here */}

              <div className="field">
                <p className="control">
                <Select
                  value={remoteEngPref}
                  onChange={this.handleChange}
                  options={remoteEngineerPreference}
                  id="remoteEngModel"
                  placeholder="Remote Eng Pref"
                  />
                </p>
              </div>

              <div className="field">
                <p className="control">
                <Select
                  value={budgetRange}
                  onChange={this.handleChange}
                  options={budget}
                  id="budgetRange"
                  placeholder="Budget Range"
                  />
                </p>
              </div>

              {/*
              <div className="field">
                <p className="control">
                  <input 
                    className="input" 
                    type="text"
                    id="remoteEngineerModelPreference"
                    aria-describedby="remoteEngineerModelPreferenceHelp"
                    placeholder="Remote Eng. Prefference"
                    value={this.state.remoteEngineerModelPreference}
                    onChange={this.onInputChange}
                  />
                </p>
              </div> */}

              <div className="field">
                <p className="control">
                  <a href="/employerhome">Back to Employer Home</a>
                </p>
              </div>
              
              <div className="field">
                <p className="control">
                  <button className="button is-success">
                    Post Requirement
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