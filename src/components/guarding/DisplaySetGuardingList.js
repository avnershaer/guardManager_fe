import React, { useState, useEffect } from "react";
import Button1 from "../buttons/button1";
import axios from "../AxiosPath";
import GlistDispalyTable from "./GlistDispalyTable";

function DisplaySetGuardingList(props) {
  console.log('apiResponse:', props.apiResponse)
  console.log('displayGuardingList:', props.displayGuardingList)
  console.log('numOfLists:', props.numOfLists)

  const [saveResponse, setSaveResponse] = useState('');
  const [error, setError] = useState('');
  const [saveData, setSaveData] = useState('');
  const [loading, setLoading] = useState(false);
  const [tableVisibility, setTableVisibility] = useState(props.apiResponse.Details.map(() => true)); // Initially all tables are visible

  useEffect(() => {
    if (saveData) {
      setLoading(true); // Set loading to true when making the request
      axios.post('/save_guard_list', saveData)
        .then(result => {
          console.log('saveData:', saveData)
          setSaveResponse(result.data);
          console.log('saveResponse:', result.data);
          setLoading(false); // Set loading to false when response is received
        })
        .catch(error => {
          console.log('axios error:', error);
          setError(error);
          setLoading(false); // Set loading to false when response is received
        });
    }
  }, [saveData]);

  const handleSaveClick = (data, index) => {
    setSaveData(data);
    setTableVisibility(prevState => {
      const newState = [...prevState];
      newState[index] = false; // Set visibility of the clicked table to false
      return newState;
    });
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
    // Render error details
    return <div className="error">Error: {error.message}</div>;
  }

  return (
    <div>
      {saveResponse.status === 'success' && (
        <div className="save_message">
          <div>
            <span style={{fontWeight:"normal"}}>{saveResponse.Details}</span>&nbsp;&nbsp;
            <span style={{color:"yellow", fontWeight:"normal"}}>עמדה:</span>&nbsp;
            <span style={{fontSize:"15px", color:"rgb(0, 255, 47)", fontWeight:"normal"}}>{saveResponse.position}</span>&nbsp;&nbsp;
            <span style={{color:"yellow", fontWeight:"normal"}}>תאריך:</span>&nbsp;
            <span style={{color:"rgb(0, 255, 47)", fontWeight:"normal"}}>{saveResponse.date}</span>
          </div>
        </div>
      )}

      {props.apiResponse.Details.map((detail, index) => (
        <div key={index}>
          {tableVisibility[index] && (
            <div>
              <GlistDispalyTable apiResponse={detail} displayGuardingList={props.displayGuardingList}/>
              <div style={{ textAlign: 'right' }}>
                <Button1 onClick={() => handleSaveClick(detail, index)} name="save" type="submit" 
                          width="150px" fontSize='10px' height="15px" 
                          textColor="white" onMouseOverTextColor="green" onMouseOutTextColor="white"
                          color="green" onMouseOverColor="yellow" onMouseOutColor="green"
                          borderColor="yellow" mouseborderColor="green" outBorderColor="yellow"    
                          bottunClickColor="#06e806" value='שמור' />
              </div>
              <div style={{ textAlign: 'right' }}>
                <Button1 type="submit" width="150px" fontSize='10px' height="15p  x" 
                          textColor="red" onMouseOverTextColor="yellow" onMouseOutTextColor="red"
                          color="yellow" onMouseOverColor="red" onMouseOutColor="yellow"
                          borderColor="red" mouseborderColor="yellow" outBorderColor="red"    
                          bottunClickColor="#06e806" value='בטל'/>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default DisplaySetGuardingList;