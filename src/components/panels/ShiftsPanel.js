import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Button1 from "../buttons/button1";

function ShiftsPanel(){

    const navigate = useNavigate();

    return(
        <div className="gListPanel">
          <Button1 width="120px" fontSize='10px' height="15px" value='הצג משמרות עתידיות' onClick={() => navigate('/DisplayFutuShifts')}/>  
          <Button1 width="120px" fontSize='10px' height="15px" value='הצג משמרת לפי שומר'/>      
          <Button1 width="150px" fontSize='10px' height="15px" value='הצג משמרת לפי תאריך ועמדה'/>      
          <Button1 width="200px" fontSize='10px' height="15px" value='הצג משמרת מתוך רשימת משמרות עתידיות'/>      
        </div>
    );
};

export default ShiftsPanel;