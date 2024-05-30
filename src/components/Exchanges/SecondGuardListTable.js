import React from "react";
import GuardListTable from "../guarding/GuardListTable";

function SecondGuardListTable(props){

    return (
        <div>
            <GuardListTable 
                apiResponse={props.apiResponse} 
                selectedRow1={props.selectedRow} 
                typeOf={props.typeOf}
                displaySecChooseListMsgCallBack={props.displaySecChooseListMsgCallBack}
                displaySecChooseGuardMsgCallBack={props.displaySecChooseGuardMsgCallBack}
                />
        </div>
    );
};

export default SecondGuardListTable;
