import React from "react";
import {useNavigate} from "react-router-dom";
import Button1 from "../buttons/button1";
import BlueWiteButton from "../buttons/BlueWiteButton";

function ExchangesPanel(){

    const navigate = useNavigate();


    return(
        <div>
            <div className="gListPanel">
            <BlueWiteButton width="120px" fontSize="12px" height="20px" value="החלפות רגילות" fontWeight="normal" onClick={() => navigate('/RegularExchanges')}/>  
            <BlueWiteButton width="120px" fontSize="12px" height="20px" value="החלפות בהצלבה" fontWeight="normal"/>  
            <BlueWiteButton width="120px" fontSize="12px" height="20px" value="החלפות בשכר" fontWeight="normal"/>  
            </div>
        </div>
    );
};

export default ExchangesPanel;