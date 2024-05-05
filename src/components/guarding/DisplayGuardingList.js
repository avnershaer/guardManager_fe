import React, { useState, useEffect, prevValue } from "react";
import Button1 from "../buttons/button1";
import axios from "axios";
import GuardListTable from "./GuardListTable";


function DisplayGuardingList() {
  const [listDate, setListDate] = useState("");
  const [parmForApiCall, setParmForApiCall] = useState('');
  const [dispalyListChoice, setDisplayListChoice] = useState(false);
  const [listChoise, setListChoice] = useState('');
  const [apiResponse, setApiResponse] = useState('');
  const [err, setErr] = useState('');
  const [displayGlist, setDisplayGlist] = useState(false);


  const handleOnChange = (event) => {
    const { name, value } = event.target;
    if (name === 'listDate') {
      setListDate(value);
      setParmForApiCall(value); 
      console.log('listDate:', value);
      console.log('parmForApiCall:', value); 
      return value; //parmForApiCall to the new value
      
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
        <label className="display_choices_input-label">
          <input
            type="radio"
            name="display_mode"
            value="date"
            style={{ marginRight: "5px" }}
          />
          הצג רשימה על פי תאריך
        </label>&nbsp;
        <input
          type="date"
          name="listDate"
          value={listDate}
          onChange={handleOnChange}
          style={{ marginTop: "10px" }}
        />
      </div>
      <div>
        <label className="display_choices_input-label">
          <input
            type="radio"
            name="display_mode"
            value="rolling"
            style={{ marginRight: "5px" }}
          />
          בחר רשימה להצגה
        </label>&nbsp;
        <select
          value={listChoise}
          name="listChoise"
          onChange={handleOnChange}
          style={{ marginTop: "10px" }}
        >
          <option value="one">One</option>
          <option value="two">Two</option>
          <option value="three">Three</option>
        </select>
      </div>
      <div className="display_bottun">
        <Button1
          width="50px"
          fontSize="10px"
          height="15px"
          value="הצג"
          onClick={HandleDisplayClick}
          textColor="white"
          onMouseOverTextColor="#183670"
          onMouseOutTextColor="white"
          color="#183670"
          onMouseOverColor="white"
          onMouseOutColor="#183670"
          borderColor="white"
          mouseborderColor="#183670"
          outBorderColor="white"
          bottunClickColor="white"
          fontWeight="normal"
        />
      </div>
      
    </div>
      )}
      </div>
  );
}

export default DisplayGuardingList;