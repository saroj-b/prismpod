import React ,{Component}from "react";
import Select from 'react-select';


const candidateSkills = [
  { value: 'Node', label: 'Node'},
  { value: 'Java', label: 'Java'},
  { value: 'React', label: 'React'},
  { value: 'Javascript', label: 'Javascript'},
  { value: 'AWS', label: 'AWS'},
  { value: 'PHP', label: 'PHP'},
  { value: 'Python', label: 'Python'},
  { value: 'C++', label: 'C++'},
  { value: 'DotNet', label: 'Dot Net'}
]


class SearchPage extends React.Component {
  componentDidMount() {
    const apiUrl = 'https://xvc2hr1788.execute-api.us-east-1.amazonaws.com/dev/Get_Candidate';
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => console.log('Data from API', data));
  }
  render() {

    return(
      <div className="container">
        <h1>Candidate Search</h1>
        <div className="field">
          {/* <label>Choose any Skill</label> */}
          <Select
                onChange={this.handleChange}
                options={candidateSkills}
                className="input1"
                id="area"
                placeholder="Choose any Skill"
                />
        </div>

        <div className="field">
          <p className="control">
            <button className="button is-success">
              Search Candidate
            </button>
          </p>
          <a href="/employerhome">Back to client home</a>
        </div>
        
      </div>
      
    )

  }
}

export default SearchPage;