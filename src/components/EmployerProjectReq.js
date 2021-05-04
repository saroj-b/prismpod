import React, { Component } from 'react';
import FormErrors from "./FormErrors";
import Validate from "./utility/FormValidation";
import { Auth } from "aws-amplify";
import axios from 'axios';
import './css/register.css';

class Register extends Component {
  
  state = {
    projectObjective: "",
    frontendTechSkills: "",
    backendTechSkills: "",
    mobileTechSkills: "",
    remoteEngineerModelPreference: "",
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

    const { projectObjective, frontendTechSkills, backendTechSkills, mobileTechSkills, remoteEngineerModelPreference  } = this.state;

    // Database insert here
    if (projectObjective && frontendTechSkills && backendTechSkills && mobileTechSkills && remoteEngineerModelPreference) {
      axios.post('https://lt8n4qcae3.execute-api.us-east-1.amazonaws.com/dev/employerProjectRequirements', {ProjectObjective: projectObjective, BackendSkills: backendTechSkills, FrontendSkills:frontendTechSkills, MobileTechSkills: mobileTechSkills, RemoteEngPrefernce:remoteEngineerModelPreference }).then(res => {
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
    return (
      <section className="section auth">
        <div className="container parent">
          <h1>Add a Requirement</h1>
          <FormErrors formerrors={this.state.errors} />
          <form onSubmit={this.handleSubmit}>
          
            
            <div className="field">
                <p className="control">
                  <input 
                    className="input" 
                    type="text"
                    id="projectObjective"
                    aria-describedby="projectObjectiveHelp"
                    placeholder="Project Objective"
                    value={this.state.projectObjective}
                    onChange={this.onInputChange}
                  />
                </p>
              </div>

              <div className="field">
                <p className="control">
                  <input 
                    className="input" 
                    type="text"
                    id="frontendTechSkills"
                    aria-describedby="frontendTechSkillsHelp"
                    placeholder="Enter any Front-end Skill"
                    value={this.state.frontendTechSkills}
                    onChange={this.onInputChange}
                  />
                </p>
              </div>

              <div className="field">
                <p className="control">
                  <input 
                    className="input" 
                    type="text"
                    id="backendTechSkills"
                    aria-describedby="backendTechSkillsHelp"
                    placeholder="Enter any Back-end Skill"
                    value={this.state.backendTechSkills}
                    onChange={this.onInputChange}
                  />
                </p>
              </div>

              <div className="field">
                <p className="control">
                  <input 
                    className="input" 
                    type="text"
                    id="mobileTechSkills"
                    aria-describedby="mobileTechSkillsHelp"
                    placeholder="Enter any Mobile Skill"
                    value={this.state.mobileTechSkills}
                    onChange={this.onInputChange}
                  />
                </p>
              </div>

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
              </div>

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