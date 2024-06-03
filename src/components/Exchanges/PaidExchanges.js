import React, {useState} from "react";
import ListByDatePosition from "../displayListComps/ListByDatePosition";

function PaidExchanges(props){

    const [displayRegularExchanges, setDisplayRegularExchanges] = useState(true);
    const typeOf = 'rgular';

    function displayRegularExchangesCallBack(){
        setDisplayRegularExchanges(false);
    };

    return (
        <div>
        {displayRegularExchanges && (
        <div style={{textAlign:"center"}}>
            להחלפת שומר בשכר הצג את רשימת השמירה ע"פ תאריך ועמדה ובחר את השומר להחלפה:
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

export default PaidExchanges;