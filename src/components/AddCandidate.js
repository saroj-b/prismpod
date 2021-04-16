import React ,{useState}from "react";
import '../components/css/addcandidate.css';
import Head from "./Head";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
 
function AddCandidate (){
   
const [data,setData]=useState({

  fname: "",
  lname:" ",
  email: "",
  area: "",
  oexpertise: "",
  portfolio: "",
  resetForm: ""
})


function submit(e){
  e.preventDefault();
  const isValid=formValidation();

  axios.post("https://qk46jtsdt7.execute-api.us-east-1.amazonaws.com/dev/add_Candidate_DynamoDB ",{
  
    CandidateFirstName:data.fname, 
    CandidateLastName:data.lname, 
    CandidateEmail:data.email,
    CandidateAreaOfExpertise:data.area,
    CandidateOtherExpertise:data.oexpertise,
    CandidatePortfolio:data.portfolio,
    idfname :parseInt(data.idfname)

  })
  .then(res=>{
    console.log(res.data)
    window.alert
    ("Your profile saved successfully!");
    window.location.reload();
  })
}
 const formValidation =()=>{

 }

 function handle(e){
    const newdata={...data}
    newdata[e.target.id]=e.target.value
    setData(newdata)
    console.log(newdata)
 } 

    return (
        <>
        <Head/>
      <div className="wrapper1">
        <div className="form-wrapper">
          <form onSubmit={(e)=>submit(e)}>
            <div className="email">
              <input
                placeholder="First Name"
                className="oo1"
                type="text"
                value={data.fname}
                onChange={(e)=>handle(e)} id="fname"
              />
            </div>

            <div className="email">
              <input
                className="input1"
                placeholder="Last Name"
                type="text"
                value={data.lname}
                onChange={(e)=>handle(e)} id="lname"
              />
            </div>

            <div className="email">
              <input
                className="input1"
                placeholder="Email"
                type="email"
                value={data.email}
                onChange={(e)=>handle(e)} id="email"
              />
            </div>

            <div className="password">
              <input
                className="input1"
                placeholder="consider your primary area of expertise?"
                type="text"
                value={data.area}
                onChange={(e)=>handle(e)} id="area"
              />          
            </div>

            <div className="password">
              <input             
                className="input1"
                placeholder="Any other expertise you would like to list?"
                type="text"
                value={data.oexpertise}
                onChange={(e)=>handle(e)} id="oexpertise"
              />
            </div>

            <div className="password">
              <input
                className="input1"
                placeholder="portfolio of your prior work ?"
                type="text"
                value={data.portfolio}
                onChange={(e)=>handle(e)} id="portfolio"
              />
            </div>
            <div className="createAccount">
              <button type="submit" >Save</button>
              <a href="/candidatehome">Back to Home</a>
            </div>
          </form>
        </div>
      </div>
      </>
    );
  }

export default AddCandidate;
