import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button1 from "../buttons/button1";
import DisplayGuardingList from "../guarding/DisplayGuardingList";

function GListPanel(){

    const navigate = useNavigate();
    const [displayList, setDisplayList] = useState(false);
    const [displayCreateBottun, setDisplayCreateBottun] = useState(true)


    const handleDisplayClick = () => {
        setDisplayList(true);
        setDisplayCreateBottun(false);
    }

    return(
        <div>
            <div className="gListPanel">
                {displayCreateBottun && <Button1 width="120px" fontSize='10px' height="15px" value='צור רשימת שמירה' onClick={() => navigate('/GetGuardingList')}
                      textColor="white" onMouseOverTextColor="#183670" onMouseOutTextColor="white"
                      color="#183670" onMouseOverColor="white" onMouseOutColor="#183670"
                      borderColor="white" mouseborderColor="#183670" outBorderColor="white"    
                      bottunClickColor="white" fontWeight="normal"
                /> } 
                <Button1 width="120px" fontSize='10px' height="15px" value='הצג רשימת שמירה' onClick={handleDisplayClick} 
                      textColor="white" onMouseOverTextColor="#183670" onMouseOutTextColor="white"
                      color="#183670" onMouseOverColor="white" onMouseOutColor="#183670"
                      borderColor="white" mouseborderColor="#183670" outBorderColor="white"    
                      bottunClickColor="white" fontWeight="normal" 
                      />  
            </div>
            {displayList && <DisplayGuardingList/>}
        </div>
    );
};

export default GListPanel;