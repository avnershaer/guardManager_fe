import axios from "axios";
import React, { useState, useEffect } from "react";
import OkPaidExchangeMessage from "./OkPaidExchangeMessage";

function DisplayPaidExchangeGuards(props) {
  const [guardsList, setGuardsList] = useState([]);
  const [error, setError] = useState('');
  const [substituteGuard, setSubstituteGuard] = useState(null);
  const [displayOkExchangeMessage, setDisplayOkExchangeMessage] = useState(false);

  useEffect(() => {
    axios.get("/paid_guards_list")
      .then(result => {
        console.log('RESPONSE:', result.data.details);
        setGuardsList(result.data.details);
      })
      .catch(err => {
        console.log('error:', err);
        setError(err);
      });
  }, []);

  const handleOnChange = (event) => {
    const selectedPguardId = parseInt(event.target.value, 10);
    const selectedGuard = guardsList.find(guard => guard.pguard_id === selectedPguardId);
    setSubstituteGuard(selectedGuard);
    displayOkExchangeMessageCallBack();
  };

  function displayOkExchangeMessageCallBack(){
    setDisplayOkExchangeMessage(true);
  }

  return (
    <div style={{ direction: "rtl", textAlign: "center" }}>
      <div>
        {displayOkExchangeMessage && (
          <OkPaidExchangeMessage 
            displayRegularExchangesCallBack={props.displayRegularExchangesCallBack} 
            substituteGuard={substituteGuard} 
            selectedRow={props.selectedRow} 
          />
        )}
        <br />
      </div>
      <div className="rollList">
        <div>בחר שומר מחליף <span style={{fontWeight: "bold"}}>בשכר</span> מתוך הרשימה הנגללת:</div>
        <div>
          <select
            onChange={handleOnChange}
            name="name_id_select"
            value={substituteGuard ? substituteGuard.pguard_id : ""}
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
                key={guard.pguard_id}
                value={guard.pguard_id}
                style={{
                  backgroundColor: "#183670",
                  color: "white",
                  fontSize: "14px",
                  fontWeight: "normal", 
                }}
              >
                {guard.family_id.family_name} {guard.pguard_name} {guard.pguard_id}
              </option>
            ))}
          </select>
        </div>
        <br />
      </div>
    </div>
  );
}

export default DisplayPaidExchangeGuards;