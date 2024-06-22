import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import BlueWiteButton from "../buttons/BlueWiteButton";
import GetFamiliesList from "../users/GetFamiliesList";
import GetGuardsList from "../users/GetGuardsList";
import FguardForm from "../users/FgaurdForm";

function UsersPanel(){

    const [showFamiliesList, setShowFamiliesList] = useState(false);
    const [showGuardsList, setShowGuardsList] = useState(false);
    const [displayFguardForm, setDisplayFguardForm] = useState(false);
    const [guardData, setGuardData] = useState('');
    const navigate = useNavigate(); 
    
    const guardDataCallBack = (data) => {
        setGuardData(data);
    }; 
    
    const displayFguardFormCallBack = () => {
       setDisplayFguardForm(true);
    }; 

    const handleShowFamiliesList = () => {
        setShowFamiliesList(true);
        setDisplayFguardForm(false);
    };  
    const handleShowGuardsList = () => {
        setShowGuardsList(true);
        setShowFamiliesList(false);
        setDisplayFguardForm(false);
    };

    const hideGuardListCallBack = () => {
        setShowGuardsList(false);
    };



  return (
    <div className="bottuns-panel">
        <div className="buttons-container">
            <BlueWiteButton
                width="80px"
                fontSize="12px"
                height="20px"
                value="חזרה"
                fontWeight="normal"
                onClick={() => navigate('/ManagePanel')}
            />
            <BlueWiteButton
                width="120px"
                fontSize="12px"
                height="20px"
                value="רשימת משתמשים"
                fontWeight="normal"
                onClick={handleShowFamiliesList}
            />
            <BlueWiteButton
                width="120px"
                fontSize="12px"
                height="20px"
                value="רשימת שומרים"
                fontWeight="normal"
                onClick={handleShowGuardsList}
            />
            <BlueWiteButton
                width="150px"
                fontSize="12px"
                height="20px"
                value="רשימת שומרים בשכר"
                fontWeight="normal"
                onClick={() => navigate('/PaidExchangeReport')}
            />
        </div>
        <div style={{ marginTop: "1px", textAlign: "center" }}>
            {displayFguardForm && <FguardForm guardData={guardData}/>}
            {showFamiliesList && <GetFamiliesList />}
            {showGuardsList && 
                <GetGuardsList 
                hideGuardListCallBack={hideGuardListCallBack}
                displayFguardFormCallBack={displayFguardFormCallBack}
                guardDataCallBack={guardDataCallBack}
                />
            }
        </div>
    </div>
);
}

export default UsersPanel;