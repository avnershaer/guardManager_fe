import axios from "axios";
import React, { useState, useEffect } from "react";
import OkExchangeMessage from "./OkExchangeMessage";

function DisplayExchangeGuardList(props) {
  const [guardsList, setGuardsList] = useState([]);
  const [error, setError] = useState('');
  const [substituteGuard, setSubstituteGuard] = useState(null);
  const [displayOkExchangeMessage, setDisplayOkExchangeMessage] = useState(false);

  useEffect(() => {
    axios.get("/families_list")
      .then(result => {
        setGuardsList(result.data.Details);
      })
      .catch(err => {
        console.log('error:', err);
        setError(err);
      });
  }, []);

  const handleOnChange = (event) => {
    const selectedFamilyId = parseInt(event.target.value, 10);
    const selectedGuard = guardsList.find(guard => guard.family_id === selectedFamilyId);
    setSubstituteGuard(selectedGuard);
    displayOkExchangeMessageCallBack();
  };



  function displayOkExchangeMessageCallBack(){
    setDisplayOkExchangeMessage(true);
  };


  return (
    
    <div style={{ direction: "rtl", textAlign:"center"}}>
      <div>{displayOkExchangeMessage && <OkExchangeMessage displayRegularExchangesCallBack={props.displayRegularExchangesCallBack} substituteGuard={substituteGuard} selectedRow={props.selectedRow} />}<br/></div>
        <div className="rollList">
          <div>בחר שומר מחליף מתוך הרשימה הנגללת:</div>
            <div>
              <select
                onChange={handleOnChange}
                name="name_id_select"
                value={substituteGuard ? substituteGuard.family_id : ""}
                style={{
                  width: "300px",
                  padding: "5px",
                  borderRadius: "5px",
                  border: "1px solid #ccc",
                  backgroundColor: "#d4dceb",
                  color: "#183670",
                  fontSize: "14px",
                  fontWeight: "bold",
                }}
              >
              <option value="">בחר</option>
                {guardsList && guardsList.length > 0 && guardsList.map((guard) => (
                <option
                  key={guard.family_id}
                  value={guard.family_id}
                  style={{
                    backgroundColor: "#183670",
                    color: "white",
                    fontSize: "14px",
                    fontWeight: "normal",
                  }}
                >
                  {guard.family_name}&nbsp;{guard.name1}&nbsp;{guard.name2}&nbsp;{guard.family_id}
                </option>
                ))}
              </select>
            </div><br/>
        </div>
    </div>
    
  );
};

export default DisplayExchangeGuardList;