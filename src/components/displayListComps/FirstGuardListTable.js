import React from "react";
import GuardListTable from "../guarding/GuardListTable";

function FirstGuardListTable(props){

    return (
        <div>
            <div style={{direction:"rtl"}}>בחר שומר להחלפה:</div>
            <div>
                <GuardListTable 
                typeOf={props.typeOf}
                apiResponse={props.apiResponse}
                />
            </div>
        </div>
    );
};

export default FirstGuardListTable;