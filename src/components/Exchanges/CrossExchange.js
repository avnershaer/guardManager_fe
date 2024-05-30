import React, {useState} from "react";
import ListByDatePosition from "../displayListComps/ListByDatePosition";

function CrossExchange(props){

    const [displayCrossExchanges, setDisplayCrossExchanges] = useState(true);
    const [displayGrdDateMsg, setDisplayGrdDateMsg] = useState(true);
    const typeOf = 'cross';

    function displayCrossExchangesCallBack(){
        setDisplayCrossExchanges(false);
    };
    
    function displayGrdDateMsgCallBack(){
        setDisplayGrdDateMsg(false);
    };

    return (
        <div>
        {displayCrossExchanges && (
        <div style={{direction:"rtl", textAlign:"center"}}>
            {displayGrdDateMsg && (<span>להחלפת שומר בהצלבה, הצג את רשימת השמירה ע"פ תאריך ועמדה ובחר שומר להחלפה:</span>)}
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
                displayGrdDateMsgCallBack={displayGrdDateMsgCallBack}
                />
            </div>
        </div>
    )}
    </div>
    )
};

export default CrossExchange;