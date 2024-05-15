import React from "react";
import {useNavigate } from "react-router-dom";
import Button1 from "../buttons/button1";

function GListPanel(){

    const navigate = useNavigate();


    return(
        <div>
            <div className="gListPanel">
                <Button1 width="120px" fontSize='10px' height="15px" value='צור רשימת שמירה' onClick={() => navigate('/GetGuardingList')}
                      textColor="white" onMouseOverTextColor="#183670" onMouseOutTextColor="white"
                      color="#183670" onMouseOverColor="white" onMouseOutColor="#183670"
                      borderColor="white" mouseborderColor="#183670" outBorderColor="white"    
                      bottunClickColor="white" fontWeight="normal"
                /> 
                <Button1 width="120px" fontSize='10px' height="15px" value='הצג רשימת שמירה' onClick={() => navigate('/DisplayGuardingList')}
                      textColor="white" onMouseOverTextColor="#183670" onMouseOutTextColor="white"
                      color="#183670" onMouseOverColor="white" onMouseOutColor="#183670"
                      borderColor="white" mouseborderColor="#183670" outBorderColor="white"    
                      bottunClickColor="white" fontWeight="normal" 
                      />
            </div>
        </div>
    );
};

export default GListPanel;