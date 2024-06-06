import React, {useState} from "react";
import ListByDatePosition from "../displayListComps/ListByDatePosition";

function PaidExchanges(props){

    const [displayPaidExchanges, setDisplayPaidExchanges] = useState(true);
    const typeOf = 'paid';

    function displayPaidExchangesCallBack(){
        setDisplayPaidExchanges(false);
    };

    return (
        <div>
        {displayPaidExchanges && (
        <div style={{textAlign:"center"}}>
            להחלפת שומר בשכר הצג את רשימת השמירה ע"פ תאריך ועמדה ובחר את השומר להחלפה:
            <div 
        style={{
          display: "flex", 
          justifyContent: "flex-end", 
          alignItems: "center", 
          flexDirection: "column", 
          direction: "rtl"
        }}><ListByDatePosition typeOf={typeOf} displayPaidExchangesCallBack={displayPaidExchangesCallBack}/></div>
           
        </div>
    )}
    </div>
    )
};

export default PaidExchanges;