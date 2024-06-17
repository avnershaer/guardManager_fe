import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Button1 from "../buttons/button1";
import BlueWiteButton from "../buttons/BlueWiteButton";

function ManagePanel(){

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
            />  
        </div>
    );
};

export default ManagePanel;