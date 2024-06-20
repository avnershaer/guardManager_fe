import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import BlueWiteButton from "../buttons/BlueWiteButton";
import CreatePosition from "../creatPosition/CreatePosition";

function ManagePanel(){

    const [displayCreatePosition, setDisplayCreatePosition] = useState(false);
    const navigate = useNavigate();


    return(
        <div className="gListPanel">
            <BlueWiteButton 
            width="120px" 
            fontSize="12px" 
            height="20px" 
            value="צור רשימת שמירה" 
            fontWeight="normal" 
            onClick={() => navigate('/GetGuardingList')}
            />  
            <BlueWiteButton 
            width="120px" 
            fontSize="12px" 
            height="20px" 
            value="החלפות" 
            fontWeight="normal" 
            onClick={() => navigate('/ExchangesPanel')} 
            /> 
            <BlueWiteButton 
            width="120px" 
            fontSize="12px" 
            height="20px" 
            value="דוחות" 
            fontWeight="normal"
            onClick={() => navigate('/ReportsPanel')}
            />  
            <BlueWiteButton 
            width="120px" 
            fontSize="12px" 
            height="20px" 
            value="צור עמדה" 
            fontWeight="normal"
            onClick={() =>{setDisplayCreatePosition(true)}}
            /> 
            <br/>``
            <div>
                {displayCreatePosition && <CreatePosition/>}    
            </div> 
        </div>
    );
};

export default ManagePanel;