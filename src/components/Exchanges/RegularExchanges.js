import React, {useState} from "react";
import ListByDatePosition from "../displayListComps/ListByDatePosition";

function RegularExchanges(){

    const [displayRegularExchanges, setDisplayRegularExchanges] = useState(true);
    const typeOf = 'rgular';

    function displayRegularExchangesCallBack(){
        setDisplayRegularExchanges(false);
    };

    return (
        <div >
            {displayRegularExchanges && (
            <div style={{textAlign:"center", direction:"rtl", fontSize:"12px", color:"#183670"}}>
            להחלפת שומר הצג את רשימת השמירה ע"פ תאריך ועמדה ובחר שומר להחלפה:
                <div 
                style={{
                marginTop:"5px",
                display: "flex", 
                justifyContent: "center", 
                alignItems: "center", 
                flexDirection: "column", 
                direction: "rtl"
                }}>
                    <ListByDatePosition 
                    typeOf={typeOf} 
                    displayRegularExchangesCallBack={displayRegularExchangesCallBack}
                    />
                </div>
            </div>
            )}
    </div>
    );
};

export default RegularExchanges;