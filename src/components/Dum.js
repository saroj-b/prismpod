
import React, { Component } from "react";
// import {ProgressBar} from 'react-bootstrap';
import axios from 'axios';
import Employeepf from "./Employeepf";

export class Dum extends Component {

  state = {
    uploadPercentage: 0,
    avatar: ''
  }

  componentDidMount = () =>{
    const {avatar} = this.props;
    this.setState({ avatar })
  }

  uploadFile = ({ target: { files } }) =>{
    console.log( files[0] )
    let data = new FormData();
    data.append( 'file', files[0] )

    const options = {
      onUploadProgress: (progressEvent) => {
        const {loaded, total} = progressEvent;
        let percent = Math.floor( (loaded * 100) / total )
        console.log( `${loaded}kb of ${total}kb | ${percent}%` );

        if( percent < 100 ){
          this.setState({ uploadPercentage: percent })
        }
      }
    }

    axios.post("https://www.mocky.io/v2/5cc8019d300000980a055e76", data, options).then(res => { 
        console.log(res)
        this.setState({ avatar: res.data.url, uploadPercentage: 100 }, ()=>{
          setTimeout(() => {
            this.setState({ uploadPercentage: 0 })
          }, 1000);
        })
    })
  }

  render() {
    const {uploadPercentage} = this.state;
    return (
      <div className="">
        {/* <Employeepf/> */}
        {/* <div className="content"> */}
          {/* <div className="author"> */}
            <a href="#pablo">
             
              <input type="file" className="form-ontrol profile-pic-uploaderc" onChange={this.uploadFile} />
              {/* { uploadPercentage > 0 && <ProgressBar now={uploadPercentage} active label={`${uploadPercentage}%`} /> } */}

              <h4 className="title">
                {this.props.name}
                <br />
                <small>{this.props.userName}</small>
              </h4>
            </a>
          {/* </div> */}
          <p className="description text-center">{this.props.description}</p>
        {/* </div> */}
        {/* <hr /> */}
        <div className="text-center">{this.props.socials}</div>
      </div>
    );
  }
}

export default Dum;

