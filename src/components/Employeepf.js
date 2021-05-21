import React ,{Component}from "react";
import '../components/css/ef.css';
import Multi from "./Multi";
import Dum from "./Dum";

export class Employeepf extends Component {
  
  state={
    profileImg:
	'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
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
	render() {
    const { profileImg} = this.state
		return (
      <div className="row">
        <div class="col-sm-4" >
				<div className="container1">
					<div className="img-holder1">
						<img src={profileImg} alt="" id="img" className="img1" />
					</div>
					<input type="file" accept="image/*" name="" id="input" onChange={this.imageHandler} />
           <label className="img2" htmlFor="input">Photo </label>
				</div>

          </div>
						
        
    <div class="col-sm-4">

            <div className="email">
              <Multi
                className="input1"
                placeholder="Area"
                type="text"
                
              />
            </div>
            <div className="email">
              <input
                className="input1"
                placeholder="Domain"
                type="text"
                // value={data.lname}
                
              />
            </div>
             <div className="createAccount">
              <button type="submit">Save</button>
              <a href="/employerhome">Back to Home</a>
            </div>
    </div>
    <div class="col-sm-4"></div>
		
      </div>
            
		);
	}
}

// export default App;


export default Employeepf;
