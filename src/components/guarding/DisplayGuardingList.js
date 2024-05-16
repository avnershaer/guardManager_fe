import React, { useState, useEffect } from "react";
import axios from "axios";
import GuardListTable from "./GuardListTable";
import BlueWiteButton from "../buttons/BlueWiteButton";
import ListBetweenDates from "../displayListComps/ListBetweenDates";


function DisplayGuardingList() {
  const [listDate, setListDate] = useState("");
  const [parmForApiCall, setParmForApiCall] = useState('');
  const [dispalyListChoice, setDisplayListChoice] = useState(false);
  const [listChoise, setListChoice] = useState('');
  const [apiResponse, setApiResponse] = useState('');
  const [err, setErr] = useState('');
  const [displayGlist, setDisplayGlist] = useState(false);
  const [fromlistDate, setFromlistDate] = useState('');
  const [toListDate, setToListDate] = useState('');


  const handleOnChange = (event) => {
    const {name, value} = event.target;
    if (name === 'listDate') {
      setListDate(value);
      setParmForApiCall(value); 
      console.log('listDate:', value);
      console.log('parmForApiCall:', value); 
      return value; //parmForApiCall to the new value
    } else if (name === 'FromlistDate') {
      setFromlistDate(value);
      console.log('fromlistDate:', value);
    } else if (name === 'TolistDate') {
      setToListDate(value);
      console.log('TolistDate:', value)
    } else if (name === 'listChoise') {
      setListChoice(value);
      setParmForApiCall(value)
        console.log('setListChoice:', value); // Log the updated value of listChoise
        console.log('parmForApiCall:', value); // Log the updated value of parmForApiCall
        return value; // Set parmForApiCall to the new value
    }
  };

  const HandleDisplayClick = () => {
    if (parmForApiCall !== '') {
    setDisplayListChoice(true);
    console.log("***parmForApiCall", parmForApiCall); 
    console.log("***dispalyListChoice", dispalyListChoice);  
     
    } 
  };

  useEffect(() => {
  console.log("dispalyListChoice", dispalyListChoice);
  if (dispalyListChoice === true) {
    axios.get(`/get_glist_by_date/${parmForApiCall}`)
    .then(result =>{
      console.log('guarding list details:', result.data);
      setApiResponse(result.data);
      setDisplayGlist(true);
    })
    .catch(error =>{
      console.log('ERROR:', error)
      setErr(error)
    })}
  },[dispalyListChoice, parmForApiCall]);


  return (
    <div>
      {displayGlist ? (
      <GuardListTable apiResponse={apiResponse}/>
      ) : (
    <div className="display_choices">
      <div>
      <ListBetweenDates/>
      
      <div style={{backgroundColor:"#e8e8e8f7", height:"30px", marginBottom:"6px", width:"600px"}}>
        <label className="display_choices_input-label">
          <div style={{display: "inline-flex", marginTop:"6px", marginRight:"10px" }}>
          הצג רשימה על פי תאריך
       &nbsp;
        <input 
          type="date"
          name="listDate"
          value={listDate}
          onChange={handleOnChange}
         
        /> &nbsp; &nbsp;
          <BlueWiteButton
          width="50px"
          fontSize="10px"
          height="20px"
          value="הצג"
          onClick={HandleDisplayClick}
          fontWeight="normal"
        />
        </div>
         </label>
      </div>
      </div>
      <br/>
      <div style={{backgroundColor:"#e8e8e8f7", height:"30px", width:"600px"}}>
      <label className="display_choices_input-label">
      <div style={{display: "inline-flex", marginTop:"6px", marginRight:"10px" }}>
        הצג את רשימות השמירה העתידיות
        &nbsp; &nbsp;
        <BlueWiteButton
          width="50px"
          fontSize="10px"
          height="20px"
          value="הצג"
          onClick={HandleDisplayClick}
          fontWeight="normal"
        />
      </div>
      </label>
      </div>
      <div>
      <br/>
      <div style={{backgroundColor:"#e8e8e8f7", height:"30px", width:"600px"}}>
        <label className="display_choices_input-label">
        <div style={{display: "inline-flex", marginTop:"6px", marginRight:"10px" }}>
          בחר רשימה להצגה
        &nbsp;
        <select
          value={listChoise}
          name="listChoise"
          onChange={handleOnChange}
        >
          <option value="one">One</option>
          <option value="two">Two</option>
          <option value="three">Three</option>
        </select>&nbsp;&nbsp;
        <BlueWiteButton
          width="50px"
          fontSize="10px"
          height="20px"
          value="הצג"
          onClick={HandleDisplayClick}
          fontWeight="normal"
        />
        </div>
        </label>
        </div>
      </div>
      <br/>
      
      <br/>
      
    </div>
      )}
      </div>
  );
}

export default DisplayGuardingList;