import React, { useState, useEffect } from "react";
import Button1 from "../buttons/button1";
import axios from "../AxiosPath";
import GlistDispalyTable from "./GlistDispalyTable";

function DisplaySetGuardingList(props) {
  console.log('api-response:', props.apiResponse)
  console.log('displayGuardingList:', props.displayGuardingList)
  console.log('numOfLists:', props.numOfLists)

  const [displayTable, setDisplayTable] = useState(true);
  const [saveResponse, setSaveResponse] = useState('');
  const [error, setError] = useState('');
  const [save, setSave] = useState(false);
  const [posName, setPosName] = useState('');
  const [listDate, setListDate] = useState('');
  const [loading, setLoading] = useState(false); 


  useEffect(() => {
    if (save) {
      setLoading(true); // loading to true when making the request
      axios.post('/save_guard_list', props.apiResponse)
        .then(result => {
          setSaveResponse(result.data);
          console.log('saveResponse:', result.data);
  
          setDisplayTable(false);
          setPosName(result.data.Details.position);
          console.log('PosName:', result.data.Details.position);
          setListDate(result.data.Details.date);
          setLoading(false); // Set loading to false when response is received
          }
        )
        .catch(error => {
          console.log('axios error:', error);
          setError(error);
          setLoading(false); // Set loading to false when response is received
        });
    }
  }, [save, error, props.apiResponse]);

  const handleSaveClick = () => {
    setSave(true);
  };

  if (props.numOfLists > "7") {
    return null; 
  }

  if (loading) {
    // Display "Please wait" message while loading
    return <div className="loading">...אנא המתן</div>;
  }


  if (saveResponse.status === 'error') {
    return <div className="error">Error: {saveResponse.Details}</div>;
  }


  if (error) {
    //  if error, render error details
    return <div className="error">Error: {error.message}</div>;
  }

  return (
    <div>
      {displayTable ? (
        <div>
          <GlistDispalyTable apiResponse={props.apiResponse} displayGuardingList={props.displayGuardingList}/>
          <div style={{ textAlign: 'right' }}>
            <Button1 onClick={handleSaveClick} name="save" type="submit" 
                      width="150px" fontSize='10px' height="15px" 
                      textColor="white" onMouseOverTextColor="green" onMouseOutTextColor="white"
                      color="green" onMouseOverColor="yellow" onMouseOutColor="green"
                      borderColor="yellow" mouseborderColor="green" outBorderColor="yellow"    
                      bottunClickColor="#06e806" value='שמור' />
          </div>
          <div style={{ textAlign: 'right' }}>
            <Button1 type="submit" width="150px" fontSize='10px' height="15px" 
                      textColor="red" onMouseOverTextColor="yellow" onMouseOutTextColor="red"
                      color="yellow" onMouseOverColor="red" onMouseOutColor="yellow"
                      borderColor="red" mouseborderColor="yellow" outBorderColor="red"    
                      bottunClickColor="#06e806" value='בטל'/>
          </div>
        </div>
      ) : (
        <div className="save_message">
          <div><span style={{fontWeight:"normal"}}>{saveResponse.Details}</span>&nbsp;&nbsp;
          <span style={{color:"yellow", fontWeight:"normal"}}>עמדה:</span>&nbsp;
          <span style={{fontSize:"15px", color:"rgb(0, 255, 47)", fontWeight:"normal"}}>{saveResponse.position}</span>&nbsp;&nbsp;
          <span style={{color:"yellow", fontWeight:"normal"}}>תאריך:</span>&nbsp;
          <span style={{color:"rgb(0, 255, 47)", fontWeight:"normal"}}>{saveResponse.date}</span>
        </div>
        </div>
      )}
    </div>
  );
}

export default DisplaySetGuardingList;