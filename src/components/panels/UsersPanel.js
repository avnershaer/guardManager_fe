import React from "react";
import {useNavigate} from "react-router-dom";
import BlueWiteButton from "../buttons/BlueWiteButton";

function UsersPanel(){

    const navigate = useNavigate();

    return(
      <div className="exchange-panel">
          <BlueWiteButton 
          width="120px" 
          fontSize="12px" 
          height="20px" 
          value="רשימת משתמשים"
          fontWeight="normal" 
          onClick={() => navigate('/GetFamiliesList')}
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
  );
};

export default UsersPanel;