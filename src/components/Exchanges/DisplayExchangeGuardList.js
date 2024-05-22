import axios from "axios";
import React, {useState, useEffect} from "react";
import OkExchangeMessage from "./OkExchangeMessage";


function DisplayExchangeGuardList(props){

    const [guardsList, setGuardsList] = useState('');
    const [error, setError] = useState('');
    const [substituteGuardId, setSubstituteGuardId] = useState('');
    const [displayOkExchangeMessage, setDisplayOkExchangeMessage] = useState(false);

    const dataForExchang = {
        substituteGuardId:substituteGuardId,

    }

    useEffect(() => {
        axios.get("/families_list")
        .then(result =>{
          console.log('families_data:', result.data);
          setGuardsList(result.data.Details);
        })
        .catch(err =>{
          console.log('error:', err)
          setError(err)  
        })
      },[])
    
    const HandleOnChange = (event) => {
        const selectedguard = event.target.value;
        setSubstituteGuardId(selectedguard);
        setDisplayOkExchangeMessage(true);
        console.log('selectedguard:', selectedguard);

    };

    return (
        <div  style={{direction:"rtl"}}>
            <div>
                בחר שומר מחליף מתוך הרשימה הנגללת:
            </div>
            <div>
                <select 
                  onChange={HandleOnChange}
                  name="name_id_select"
                  value={substituteGuardId}
                  style={{
                    width: "300px", // Adjust the width as needed
                    padding: "5px",
                    borderRadius: "5px",
                    border: "1px solid #ccc",
                    backgroundColor: "#d4dceb",
                    color: "#183670",
                    fontSize: "14px",
                    fontWeight: "bold",
                  }}
                  >
                <option value="">בחר </option>
                    {guardsList && guardsList.length > 0 && guardsList.map((guard) => (
                <option 
                key={guard.family_id} 
                value={JSON.stringify({familyId: guard.family_id, familyName: guard.family_name, guardName1: guard.name1, guardName2: guard.name2})}
                style={{
                backgroundColor: "#183670", // Adjust option background color
                color: "white", // Adjust option text color
                fontSize: "14px",
                fontWeight: "normal",
              }}>
                    {guard.family_name}&nbsp;{guard.name1}&nbsp;{guard.name2}&nbsp;{guard.family_id}
                </option>
                ))}
              </select>
             
            </div>
            <br/>
            <div>
               {displayOkExchangeMessage && <OkExchangeMessage selectedRow={props.selectedRow}/>}
            </div>
        </div>
    );
};

export default DisplayExchangeGuardList;
