import React, {useState} from "react";
import ListByDatePosition from "../displayListComps/ListByDatePosition";

function CrossExchange(props){

    const [displayCrossExchanges, setDisplayCrossExchanges] = useState(true);
    const typeOf = 'cross';

    function displayCrossExchangesCallBack(){
        setDisplayCrossExchanges(false);
    };

    return (
        <div>
        {displayCrossExchanges && (
        <div style={{direction:"rtl", textAlign:"center"}}>
            להחלפת שומר בהצלבה, הצג את רשימת השמירה ע"פ תאריך ועמדה ובחר שומר להחלפה:
            <div 
                style={{
                  display: "flex", 
                  justifyContent: "flex-end", 
                  alignItems: "center", 
                  flexDirection: "column", 
                  direction: "rtl"
                }}><ListByDatePosition 
                typeOf={typeOf} 
                displayCrossExchangesCallBack={displayCrossExchangesCallBack}
                />
            </div>
        </div>
    )}
    </div>
    )
};

export default CrossExchange;