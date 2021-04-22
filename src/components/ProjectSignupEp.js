import React, { Component } from 'react';
import { MultiSelect } from '@progress/kendo-react-dropdowns';
import './css/projectsignup.css';
import Head from './Head';
import { frontend,backend,mobiletech } from './Multi1';

const sports = 
[ "React js", "Angular", "Php",];
class Form extends Component {
    state = {
        success: false
    };
      
    render() {         
        return (
            <div>
            <Head/>
            <br/>
            <br/>
            <br/>
            <br/>
                <form onSubmit={this.handleSubmit}>
                   
                    <h1></h1>

                    <input type="text" 
                    className="itext"
                     placeholder="Urser name" /><br />
                     <input type="text" 
                     className="itext"
                      placeholder="
                     What is your project objective?" /><br />
                    
                        <MultiSelect
                 style={{ width: '30%' ,
                                           
                
                 }}
               
                 data={frontend}
                       
                    />

                    <br/>
                    <label></label>
                    <MultiSelect
                 style={{ width: '30%' ,
                                           
                
                 }}
               
                 data={backend}
                       
                    />
                    <br/>
                    <label></label>
                    <MultiSelect
                 style={{ width: '30%' ,
                                           
                
                 }}
               
                 data={mobiletech}
                    />
                    <br />
                    <input type="submit" 
                    className="isub"
                    value="Submit" />
                </form>
            </div>
            
        )
    }
}

export default Form
