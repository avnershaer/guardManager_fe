import React from "react";
import { Link } from "react-router-dom";
import Button1 from "../buttons/button1";

function Panel1() {
    const linkStyle = {
        color: "inherit", // Inherit the color from parent
        textDecoration: "inherit", // Inherit the text decoration from parent
    };

    return (    
        <div style={{textAlign: "right", marginRight: "35px", marginTop: "-4px"}}>
            <Link to='gListPanel' style={linkStyle}>&nbsp;&nbsp;רשימות שמירה&nbsp;&nbsp;</Link>|
            <Link to='ShiftsPanel' style={linkStyle}>&nbsp;&nbsp;משמרות&nbsp;&nbsp;</Link>| 
            <Link to='ShiftsPanel' style={linkStyle}>&nbsp;&nbsp;שומרים&nbsp;&nbsp;</Link>| 
            <Link to='GateManual' style={linkStyle}>&nbsp;&nbsp;תפעול שער חשמלי&nbsp;&nbsp;</Link>| 
            <Link to='GuardProcedures' style={linkStyle}>&nbsp;&nbsp;נהלי שמירה&nbsp;&nbsp;</Link>| 
            כניסה&nbsp;&nbsp;|
        </div>
    );
}

export default Panel1;