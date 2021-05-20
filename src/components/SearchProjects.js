import React from "react";
import Select from 'react-select';


const projectSkills = [
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

class SearchProjects extends React.Component {
  
  render() {

    return(
      <div className="container">
        <h1>Project Search</h1>
        <div className="field">
          {/* <label>Choose any Skill</label> */}
          <Select
                onChange={this.handleChange}
                options={projectSkills}
                className="input1"
                id="searchproject"
                placeholder="Choose any Skill"
                />
        </div>

        <div className="field">
          <p className="control">
            <button className="button is-success">
              Browse Projects
            </button>
          </p>
          <a href="/candidatehome">back to candidate home</a>
        </div>
        
      </div>
    )

  }
}

export default SearchProjects;