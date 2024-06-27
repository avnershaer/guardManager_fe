import React, {useState} from "react";
import DisplayGuardingList from "../guarding/DisplayGuardingList";
import GuardListTable from "../guarding/GuardListTable";
import ListTable from "../guarding/ListTable";

function DisplayListsContainer() {

    const [displayGlist, setDisplayGlist] = useState('');
    const [apiResponse, setApiResponse] = useState('');

    function apiResponseCallback(details) {
        setApiResponse(details);
      };

    
      return (
        <div tyle={{ direction: 'rtl', display:"flex", alignItems:"center", justifyContent: 'center'}}>
            {displayGlist ? (
                <div tyle={{ direction: 'rtl', display:"flex", alignItems:"center", justifyContent: 'center'}}>
                <ListTable apiResponse={apiResponse} />
                </div>
            ):(
                <div>
                 <DisplayGuardingList 
                 apiResponseCallback={apiResponseCallback}
                 />
                </div>
            )}
        </div>
    );
};

export default DisplayListsContainer;
