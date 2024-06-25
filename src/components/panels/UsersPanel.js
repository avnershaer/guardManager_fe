import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import BlueWiteButton from "../buttons/BlueWiteButton";
import GetFamiliesList from "../users/GetFamiliesList";
import GetGuardsList from "../users/GetGuardsList";
import FguardForm from "../users/FgaurdForm";
import ExchangesReport from "../reports/ExchangesReport";
import baseURL from "../../config";
import GetShiftForGuard from "../users/GetShiftForGuard";


function UsersPanel(){

    const [showFamiliesList, setShowFamiliesList] = useState(false);
    const [showGuardsList, setShowGuardsList] = useState(false);
    const [displayFguardForm, setDisplayFguardForm] = useState(false);
    const [displayFguarExchanges, setDisplayFguarExchanges] = useState(false);
    const [displayFguarDidExchanges, setDisplayFguarDidExchanges] = useState(false);
    const [displayShiftsForFguard, setDisplayShiftsForFguard] = useState(false);
    const [guardData, setGuardData] = useState('');
    const [fguardId, setFguardId] = useState('');

    const navigate = useNavigate(); 
    
    const guardDataCallBack = (data) => {
        setGuardData(data);
    }; 
    
    const displayFguardFormCallBack = () => {
        setGuardData('');
        setDisplayFguardForm(true);
    }; 

    const handleShowFamiliesList = () => {
        setShowFamiliesList(true);
        setDisplayFguardForm(false);
        setShowGuardsList(false);
    };  
    const handleShowGuardsList = () => {
        setShowGuardsList(true);
        setShowFamiliesList(false);
        setDisplayFguardForm(false);
        setDisplayFguarExchanges(false);
        setDisplayFguarDidExchanges(false);
        setDisplayShiftsForFguard(false);
    };

    const hideGuardListCallBack = () => {
        setShowGuardsList(false);
    };
    
    const handleFguardExchangesCallBack = (fGuardId) => {
        setDisplayFguarExchanges(true);
        setFguardId(fGuardId)
    };
    
    const handleFguardDidExchangesCallBack = (fGuardId) => {
        setDisplayFguarDidExchanges(true);
        setFguardId(fGuardId)
    };
    
    const handleShiftsForGuardCallBack = (fGuardId) => {
        setDisplayShiftsForFguard(true);
        setFguardId(fGuardId)
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
                onClick={() => navigate('/Panel1')}
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
                handleShiftsForGuardCallBack={handleShiftsForGuardCallBack}
                hideGuardListCallBack={hideGuardListCallBack}
                displayFguardFormCallBack={displayFguardFormCallBack}
                guardDataCallBack={guardDataCallBack}
                handleFguardExchangesCallBack={handleFguardExchangesCallBack}
                handleFguardDidExchangesCallBack={handleFguardDidExchangesCallBack}
                />
            }
            {displayFguarExchanges && 
            <ExchangesReport 
            reportPath={`/get_exchanges_for_fguard/${fguardId}`}
            />
            }
            {displayFguarDidExchanges && 
            <ExchangesReport 
            reportPath={`/get_did_exchanges_for_fguard/${fguardId}`}
            />
            }
            {displayShiftsForFguard && 
            <GetShiftForGuard 
            path={`/get_fguard_shifts/${fguardId}`}
            />
            }
        </div>
    </div>
);
}

export default UsersPanel;