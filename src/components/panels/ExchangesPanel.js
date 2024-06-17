import React from "react";
import {useNavigate} from "react-router-dom";
import BlueWiteButton from "../buttons/BlueWiteButton";

function ExchangesPanel(){

    const navigate = useNavigate();

    
    return(
        <div>
            <div className="exchange-reports-panel">
                <BlueWiteButton 
                width="120px" 
                fontSize="12px" 
                height="20px" 
                value="החלפות רגילות" 
                fontWeight="normal" 
                onClick={() => navigate('/RegularExchanges')}
                />  
                <BlueWiteButton 
                width="120px" 
                fontSize="12px" 
                height="20px" 
                value="החלפות בהצלבה" 
                fontWeight="normal" 
                onClick={() => navigate('/CrossExchange')}
                />  
                <BlueWiteButton 
                width="120px" 
                fontSize="12px" 
                height="20px" 
                value="החלפות בשכר" 
                fontWeight="normal" 
                onClick={() => navigate('/PaidExchanges')}
                />  
                <BlueWiteButton 
                width="120px" 
                fontSize="12px" 
                height="20px" 
                value="חזרה" 
                fontWeight="normal"
                onClick={() => navigate('/ManagePanel')} 
                />  
            </div>
        </div>
    );
};

export default ExchangesPanel;