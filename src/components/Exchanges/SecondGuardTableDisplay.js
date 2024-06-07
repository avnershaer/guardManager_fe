import React, {useState} from "react";
import ListByDatePosition from "../displayListComps/ListByDatePosition";

function SecondGuardTableDisplay(props){

    const [displaySecChooseListMsg, setDisplaySecChooseListMsg] = useState(true);
    const [displaySecChooseGuardMsg, setDisplaySecChooseGuardMsg] = useState(true);

    function displaySecChooseListMsgCallBack(){
        setDisplaySecChooseListMsg(false);
    };
    
    function displaySecChooseGuardMsgCallBack(){
        setDisplaySecChooseGuardMsg(false);
    };
    
    function displaySecChooseGuardMsgCallBack(){
        setDisplaySecChooseGuardMsg(false);
    };

    return (
        <div>
            {displaySecChooseListMsg && (<div>בחר רשימת שמירה על פי תאריך ועמדה ואז <br/></div>)}
            {displaySecChooseGuardMsg &&  (<div>בחר שומר להחלפה בהצלבה עם השומר מעל:<br/></div>)}
            <div>
                <ListByDatePosition 
                selectedRow={props.selectedRow}
                typeOf='secCross'
                displaySecChooseListMsgCallBack={displaySecChooseListMsgCallBack}
                displaySecChooseGuardMsgCallBack={displaySecChooseGuardMsgCallBack}
                />
            </div>
        </div>
    );
};

export default SecondGuardTableDisplay;