import React, {useState, useEffect} from "react";
import ListByDatePosition from "../displayListComps/ListByDatePosition";

function RegularExchanges(props){

    return (

        <div style={{textAlign:"center"}}>
            להחלפת שומר הצג את רשימת השמירה ע"פ תאריך ועמדה ובחר שומר להחלפה:
            <div 
        style={{
          display: "flex", 
          justifyContent: "flex-end", 
          alignItems: "center", 
          flexDirection: "column", 
          direction: "rtl"
        }}><ListByDatePosition/></div>
           
        </div>

    )
};

export default RegularExchanges;