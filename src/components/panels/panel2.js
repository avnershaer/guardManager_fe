import React from "react";
import {Link} from "react-router-dom"
import Button1 from "../buttons/button1";


function Panel2(){

    return(
        <div style={{ display: "flex", justifyContent: "center"}}>
            <Link to='GetFamiliesList'><Button1 width="120px" fontSize='10px' height="15px" value='הצג רשימת משפחות'/></Link>
            <Link to='getGuardingList'><Button1 width="120px" fontSize='10px' height="15px" value='צור רשימת שמירה'/></Link>  
            <Link to='DisplayFutuShifts'><Button1 width="120px" fontSize='10px' height="15px" value='הצג משמרות עתידיות'/></Link>  
        </div>
    )


}

export default Panel2;