import React, { useState, useEffect } from "react";
import axios from "axios";
import GuardListTable from "./GuardListTable";
import BlueWiteButton from "../buttons/BlueWiteButton";
import ListBetweenDates from "../displayListComps/ListBetweenDates";
import ListByDate from "../displayListComps/ListByDate";
import ListByDatePosition from "../displayListComps/ListByDatePosition";
import ChooseList from "../displayListComps/ChooseList";


function DisplayGuardingList() {
  const [parmForApiCall, setParmForApiCall] = useState('');
  const [dispalyListChoice, setDisplayListChoice] = useState(false);
  const [listChoise, setListChoice] = useState('');
  const [apiResponse, setApiResponse] = useState('');
  const [err, setErr] = useState('');
  const [displayGlist, setDisplayGlist] = useState(false);
  const [fromlistDate, setFromlistDate] = useState('');
  const [toListDate, setToListDate] = useState('');
  const [displayChoices, setdisplayChoices] = useState(true);
  const [hideListBetweenDates, setHideListBetweenDates] = useState(false); 
  const [hideListByDate, setHideListByDate] = useState(false); 
  const [hideChooseList, setChooseList] = useState(false); 


  const handleOnChange = (event) => {
    const {name, value} = event.target;
    if (name === 'FromlistDate') {
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

  function hideListBetweenDatesCallback() {
    setHideListBetweenDates(true);
  }
  
  function hideListByDateCallback() {
    setHideListByDate(true);
  }
  
  function hideChooseListCallback() {
    setChooseList(true);
  }


  return (
    <div>
      {displayGlist ? (
      <GuardListTable apiResponse={apiResponse}/>
      ) : (
      displayChoices && (
    <div className="display_choices">
      <div>
      {!hideListBetweenDates && <ListBetweenDates hideListByDate={hideListByDateCallback} />}
      <ListByDatePosition hideListByDate={hideListByDateCallback} hideListBetweenDates={hideListBetweenDatesCallback}/>
      {!hideListByDate && <ListByDate hideListBetweenDates={hideListBetweenDatesCallback}/>}
      {!hideChooseList && <ChooseList hideChooseList={hideChooseListCallback} hideListByDate={hideListByDateCallback} hideListBetweenDates={hideListBetweenDatesCallback}/>}</div>
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
      
      </div>
      <br/>
      
      <br/>
      
    </div>
      ))}
      </div>
  );
}

export default DisplayGuardingList;