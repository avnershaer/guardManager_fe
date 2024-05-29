import React, {useState, useEffect} from "react";
import ListByDatePosition from "../displayListComps/ListByDatePosition";

function RegularExchanges(props){

    const [displayRegularExchanges, setDisplayRegularExchanges] = useState(true);
    const typeOf = 'rgular';

    function displayRegularExchangesCallBack(){
        setDisplayRegularExchanges(false);
    };

    return (
        <div>
        {displayRegularExchanges && (
        <div style={{textAlign:"center"}}>
            להחלפת שומר הצג את רשימת השמירה ע"פ תאריך ועמדה ובחר שומר להחלפה:
            <div 
        style={{
          display: "flex", 
          justifyContent: "flex-end", 
          alignItems: "center", 
          flexDirection: "column", 
          direction: "rtl"
        }}><ListByDatePosition typeOf={typeOf} displayRegularExchangesCallBack={displayRegularExchangesCallBack}/></div>
           
        </div>
    )}
    </div>
    )
};

export default RegularExchanges;