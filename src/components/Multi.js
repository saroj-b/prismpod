import React, { useState } from 'react';
import Select from 'react-select';


function Multi (){
  var Country=[
    {
      value:1,
      label:"India",
    },
    {
      value:1,
      label:"USA",
    },
    {
      value:1,
      label:"UK",
    },
  ]
//   var [Displayvalue,getvalue]=useState();
//  var Dhandler =(e)=>{
// getvalue=(Array.isarray(e)?e.map(x=>x.label):[]);
//  }
 return(
     <Select
     isMulti="true"
              options={Country}
                className="input1"
                placeholder="Area"
                type="text"
                // value={data.area}
                // onChange={(e)=>handle(e)} id="area"
              />   
 )
 }
export default Multi;
// // Something like this should work. But I still recommend using a different 
// import React, { useState } from 'react';
// import Select from 'react-select';

// function Multi() {
//   const data = [
//     {
//       value: 1,
//       label: "cerulean"
//     },
//     {
//       value: 2,
//       label: "fuchsia rose"
//     },
//     {
//       value: 3,
//       label: "true red"
//     },
//     {
//       value: 4,
//       label: "aqua sky"
//     },
//     {
//       value: 5,
//       label: "tigerlily"
//     },
//     {
//       value: 6,
//       label: "blue turquoise"
//     }
//   ];

//   // set value for default selection
//   const [selectedValue, setSelectedValue] = useState([]);

//   // handle onChange event of the dropdown
//   const handleChange = (e) => {
//     setSelectedValue(Array.isArray(e) ? e.map(x => x.value) : []);
//   }

//   return (
//     <div className="">
//       {/* <h3>Get selected by only value for multi select - <a href="https://www.cluemediator.com">Clue Mediator</a></h3> */}

//       <Select
//         className="input1"
//         placeholder="Select Option"
//         value={data.filter(obj => selectedValue.includes(obj.value))} // set selected values
//         options={data} // set list of the data
//         onChange={handleChange} // assign onChange function
//         isMulti
//         isClearable
//       />

//       {selectedValue && <div style={{ marginTop: 20, lineHeight: '25px' }}>
//         <div><b>Selected Value: </b> {JSON.stringify(selectedValue, null, 2)}</div>
//       </div>}
//     </div>
//   );
// }

// export default Multi;