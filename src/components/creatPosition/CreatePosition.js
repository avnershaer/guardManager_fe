import React, { useState } from "react";
import CreatePositionForm from "./CreatePostionForm";
import BlueWiteButton from "../buttons/BlueWiteButton";
import {useNavigate} from "react-router-dom";


function CreatePosition(){

    const [positionName, setPositionName] = useState('');
    const [displayResponse, setDisplayResponse] = useState(false);
    const [displayForm, setDisplayForm] = useState(true);
    const navigate = useNavigate();

    function apiResponseCallBack(posName){
        setPositionName(posName);
        setDisplayResponse(true);
        setDisplayForm(false);
    };

    return (
        <div className="create-position-container">
            
            <div>
                {displayForm && (
                    <div>
                    ליצירת עמדה הקלד שם עמדה<br/>
                    (אותיות A-Z, א-ת, 0-9, מינימום 3 אותיות)
                    <CreatePositionForm apiResponseCallBack={apiResponseCallBack}/>
                    </div>
                )}
                {displayResponse && (
                    <div style={{padding:"10px",width:"250px", height:"20px", textAlign:"center", backgroundColor:"#0d2b12", color:"white", borderRadius:"5px" }}>
                    <div>
                    העמדה <span style={{color:"yellow"}}> {positionName}</span> נוצרה בהצלחה
                    </div>
                    <div style={{marginTop:"35px"}}>
                    <BlueWiteButton 
                    width="100px" 
                    fontSize="12px" 
                    height="20px" 
                    value="חזור" 
                    fontWeight="normal"
                    onClick={() => navigate('ManagePanel')}
                    /> 
                    </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CreatePosition;