import React from "react";
import { Link } from "react-router-dom";

function Panel1() {
    const linkStyle = {
        color: "inherit", // Inherit the color from parent
        textDecoration: "inherit", // Inherit the text decoration from parent
    };

    return (    
        <div style={{fontSize:"14px", textAlign: "right", marginRight: "35px", marginTop: "-3px"}}>
            <Link to='ManagePanel' style={linkStyle}>&nbsp;&nbsp;ניהול&nbsp;&nbsp;</Link>|
            <Link to='DisplayGuardingList' style={linkStyle}>&nbsp;&nbsp;הצג רשימות שמירה&nbsp;&nbsp;</Link>|
            <Link to='UsersPanel' style={linkStyle}>&nbsp;&nbsp;משתמשים&nbsp;&nbsp;</Link>| 
            <Link to='ShiftsPanel' style={linkStyle}>&nbsp;&nbsp;הפרטים שלי&nbsp;&nbsp;</Link>| 
            <Link to='GateManual' style={linkStyle}>&nbsp;&nbsp;תפעול שער חשמלי&nbsp;&nbsp;</Link>| 
            <Link to='GuardProcedures' style={linkStyle}>&nbsp;&nbsp;נהלי שמירה&nbsp;&nbsp;</Link>| 
            יציאה&nbsp;&nbsp;|
        </div>
    );
}

export default Panel1;