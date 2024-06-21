import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import BlueWiteButton from "../buttons/BlueWiteButton";
import GetFamiliesList from "../users/GetFamiliesList";

function UsersPanel(){

  const [showFamiliesList, setShowFamiliesList] = useState(false);
  const navigate = useNavigate();

  const handleShowFamiliesList = () => {
      setShowFamiliesList(true);
  };

  return (
    <div className="users-panel">
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
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
                onClick={() => navigate('/GetGuardsList')}
            />
            <BlueWiteButton
                width="150px"
                fontSize="12px"
                height="20px"
                value="רשימת שומרים בשכר"
                fontWeight="normal"
                onClick={() => navigate('/PaidExchangeReport')}
            />
            <BlueWiteButton
                width="150px"
                fontSize="12px"
                height="20px"
                value="הפוך משתמש ללא זמין"
                fontWeight="normal"
                onClick={() => navigate('/PaidExchangeReport')}
            />
            <BlueWiteButton
                width="80px"
                fontSize="12px"
                height="20px"
                value="חזרה"
                fontWeight="normal"
                onClick={() => navigate('/ManagePanel')}
            />
        </div>
        <div style={{ marginTop: "1px", textAlign: "center" }}>
            {showFamiliesList && <GetFamiliesList />}
        </div>
    </div>
);
}

export default UsersPanel;