import React ,{Component}from "react";
import '../components/css/addcandidate.css';
import axios from 'axios';
// import FormikControl from './formikcontrol';
import Validate from "./utility/FormValidation";
import FormErrors from "./FormErrors";
// import Select from "react-select/src/Select";
import Select from 'react-select';
import Dum from "./Dum";
const area = [
   { 
     value: 'Node', label: 'Node'
    },
  { 
    value: 'Java', label: 'Java'
   },
  { 
    value: 'React', label: 'React'
   },
  { 
    value: 'Python', label: 'Python' 
  },
  { 
    value: 'AWS', label: 'AWS' 
  },
  { 
    value: 'C++', label: 'C++' 
  }
]

//for country
const country = [
  { 
    value: 'USA', label: 'USA'
   },
 { 
   value: 'Canada', label: 'Canada'
  },
 { 
   value: 'India', label: 'India'
  }
]

class AddCandidate extends Component {

 state={
    profileImg:
	'/https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
  }
  imageHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () =>{
      if(reader.readyState === 2){
        this.setState({profileImg: reader.result})
      }
    }
    reader.readAsDataURL(e.target.files[0])
  };


  state = {
  fname: "",
  mname:"",
  lname:"",
  candidateemail: "",
  area: "",
  country:"",
  oexpertise: "",
  portfolio: "",
  linkedin:"",
  github:"",
  resetForm: "",
    errors: {
      blankfield: false,
      passwordmatch: false
    }
  }

  handleChange = area => {
    this.setState({ area });
    console.log(`Option selected:`, area);
  };

  handleChange = country => {
    this.setState({ country });
    console.log(`Option selected:`, country.value);
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
    const { fname, mname, lname, candidateemail, area, country, linkedin, github, oexpertise, portfolio  } = this.state;
    // Database insert here
    if (fname && mname && lname && candidateemail && country && linkedin && github && oexpertise && portfolio) {
      axios.post("https://qk46jtsdt7.execute-api.us-east-1.amazonaws.com/dev/add_Candidate_DynamoDB",
       {CandidateFirstName:fname, CandidateMiddleName : mname, CandidateLastName : lname, CandidateEmail: candidateemail,
        CandidateAreaOfExpertise : area, CandidateCountry : country, CandidateLinkedIn : linkedin, CandidateGithub : github,
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
  const { profileImg} = this.state
    return (
     <div className="container">
  <div className="row">
    <div className="col-sm">
      <div className="img-holder1">
						<img src={profileImg} alt="" id="img" className="img1" />
					</div>
          <input type="file" accept="image/*" name="" id="input" onChange={this.imageHandler} />
           <label className="img2" htmlFor="input">Photo </label>
					{/* <div className="label1">
         
						<i className="material-icons">Upload Photo</i>
						
				
          </div> */}
      <Dum/>
    </div>
    <div className="col-sm">
      <div className="container parent">
      <h1>Add Your Profile</h1>
        <div className="form-wrapper">
          <FormErrors formerrors={this.state.errors} />
          <form onSubmit={this.handleSubmit}>

            {/* For First Name */}
            <div className="email">
              <input
                className="input" 
                placeholder="Enter First Name"
                type="text"
                id="fname"
                value={this.state.fname}
                onChange={this.onInputChange}
              />
            </div>

            {/* For Middle Name */}
            <div className="email">
              <input
                className="input" 
                placeholder="Enter Middle Name"
                type="text"
                id="mname"
                value={this.state.mname}
                onChange={this.onInputChange}
              />
            </div>

             {/* For Last Name */}
             <div className="email">
              <input
                className="input" 
                placeholder="Enter Last Name"
                type="text"
                id="lname"
                value={this.state.lname}
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

            {/* For Primary Expertise */}
            <div className="email">
              <Select
                onChange={this.handleChange}
                options={area}
                className="input1"
                id="area"
                placeholder="Primary Expertise"
                isMulti="true"
                />
            </div>

            {/* Other Expertise */}
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

             {/* For Country */}
             <div className="email">
              <Select
                  //value={area}
                  onChange={this.handleChange}
                  options={country}
                  className="input1"
                  id="country"
                  placeholder="What's your country"
                  />
            </div>

            {/* Portfolio */}
            <div className="password">
              <input
                className="input"
                placeholder="url of your portfolio work"
                type="url"
                value={this.state.portfolio}
                onChange={this.onInputChange}
                id="portfolio"
              />
            </div>

            {/* LinkedIn */}
            <div className="password">
              <input
                className="input"
                placeholder="paste your LinkedIn profile url"
                type="url"
                value={this.state.linkedin}
                onChange={this.onInputChange}
                id="linkedin"
              />
            </div>

            {/* GitHub */}
            <div className="password">
              <input
                className="input"
                placeholder="paste your GitHub url"
                type="url"
                value={this.state.github}
                onChange={this.onInputChange}
                id="github"
              />
            </div>

            <div className="createAccount">
              <button type="submit" className="button is-success">Save</button>
              <a href="/candidatehome">Back to Home</a>
            </div>
          </form>
          {/* <Dum/> */}
        </div>
      </div>
    </div>
    
  </div>
</div>
    );
  }
}
export default AddCandidate;