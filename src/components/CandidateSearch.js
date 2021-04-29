import React from "react";
import { MDBCol, MDBIcon, MDBBtn } from "mdbreact";



class SearchPage extends React.Component {
  componentDidMount() {
    const apiUrl = 'https://xvc2hr1788.execute-api.us-east-1.amazonaws.com/dev/Get_Candidate';
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => console.log('Data from API', data));
  }
  render() {
  
    return <MDBCol md="6">
    <form className="form-inline mt-4 mb-4">
      <MDBIcon icon="search" />
      <input className="form-control form-control-sm ml-3 w-75" type="text" placeholder="Type a Skill" aria-label="Search" />
      <MDBBtn color="unique" rounded size="sm" type="submit" className="mr-auto">
        Search
      </MDBBtn>
    </form>
  </MDBCol>
  }
}

export default SearchPage;