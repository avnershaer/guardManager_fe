import React, { useState, useEffect } from "react";
import axios from "../AxiosPath";
import GlistDispalyTable from "./GlistDispalyTable";
import CancelButton from "../buttons/CancelButton";
import BlueWiteButton from "../buttons/BlueWiteButton";
import {useNavigate} from "react-router-dom";


function DisplaySetGuardingList(props) {
  console.log('apiResponse:', props.apiResponse)
  console.log('displayGuardingList:', props.displayGuardingList)
  console.log('numOfLists:', props.numOfLists)

  const [saveResponse, setSaveResponse] = useState('');
  const [error, setError] = useState('');
  const [saveData, setSaveData] = useState('');
  const [loading, setLoading] = useState(false);
  const [tableVisibility, setTableVisibility] = useState(props.apiResponse.Details.map(() => true)); // Initially all tables are visible
  const navigate = useNavigate();


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
  
  function handleCancelClick(){
    navigate('/ManagePanel');
  };

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading">
          אנא המתן
          <div className="marquee">
            <span>&lt;&lt;</span>
          </div>
        </div>
      </div>
    );
  }

  if (saveResponse.status === 'error') {
    return <div className="error">Error: {saveResponse.Details}</div>;
  }

  if (error) {
    // Render error details
    return <div className="error">Error: {error.message}</div>;
  }

  return (
    <div className="display_set_list_container">
      {saveResponse.status === 'success' && (
        <div className="save_message">
          <div>
            <span style={{ fontWeight: "normal" }}>{saveResponse.Details}</span>&nbsp;&nbsp;
            <span style={{ color: "yellow", fontWeight: "normal" }}>עמדה:</span>&nbsp;
            <span style={{ fontSize: "15px", color: "rgb(0, 255, 47)", fontWeight: "normal" }}>{saveResponse.position}</span>&nbsp;&nbsp;
            <span style={{ color: "yellow", fontWeight: "normal" }}>תאריך:</span>&nbsp;
            <span style={{ color: "rgb(0, 255, 47)", fontWeight: "normal" }}>{saveResponse.date}</span>
          </div>
        </div>
      )}

      {props.apiResponse.Details.map((detail, index) => (
        <div key={index} className="table_wrapper">
          {tableVisibility[index] && (
            <div>
              <GlistDispalyTable apiResponse={detail} displayGuardingList={props.displayGuardingList} />
              <div className="table-buttons">
                <CancelButton 
                value='בטל' 
                height="15px"
                width="100px" 
                fontSize='10px' 
                onClick={handleCancelClick}
                />
                <BlueWiteButton 
                name="save" 
                type="submit"
                value='שמור'
                width="100px" 
                height="15px" 
                fontSize='10px'
                onClick={() => handleSaveClick(detail, index)} 
                />
              </div>
              <br />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default DisplaySetGuardingList;