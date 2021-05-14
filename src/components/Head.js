import React, { Component } from "react";
import './css/head.css';
class Head extends Component{
  render(){
    return(
      <div>
        <div className="toolbar_logo"><img src="/prismpodmaster.jpg"/></div>
      <header className="toolbar ">
          <nav className="toolbar_navigation">
              <div></div>
                           <div className="spacer"></div>
         <div className="toolbar_item">
         
      <ul className="mr-2">

         <li className="nav-item"> 
         <a className="nav-link" href="/http://dev.prismpod.com.s3-website-us-east-1.amazonaws.com/"> 
            About us
          </a>
      </li> 
     <li className="nav-item"> 
          <a className="nav-link" href="/"> 
            Blogs
          </a>
          
      </li>  
       <li className="nav-item"> 
          <a className="nav-link" href="/"> 
            Agencies
          </a> 
      </li>  
      <li>
              <a className="btn btn-default btn-outline btn-circle collapsed bg-info"  
              data-toggle="collapse" href="#nav-collapse2" aria-expanded="false" aria-controls="nav-collapse2">Sign up</a>
            </li>
            &nbsp;&nbsp;&nbsp;
            {/* <li>
              <a className="btn btn-default btn-outline btn-circle collapsed bg-primary" 
               data-toggle="collapse" href="#nav-collapse2" aria-expanded="false" aria-controls="nav-collapse2">Sign in</a>
            </li> */}


  </ul> 
  </div>
  </nav>
  </header>
  </div>
       
        

    );
  }
} 
export default Head;