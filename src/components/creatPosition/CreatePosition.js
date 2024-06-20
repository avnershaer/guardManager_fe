import React, { useState } from "react";
import CreatePositionForm from "./CreatePostionForm";

function CreatePosition(){

    const [positionName, setPositionName] = useState('');
    const [displayResponse, setDisplayResponse] = useState(false);
    const [displayForm, setDisplayForm] = useState(true);

    function apiResponseCallBack(posName){
        setPositionName(posName);
        setDisplayResponse(true);
        setDisplayForm(false);
    };

    return (
        <div className="create-position-container">
            
            <div>
                {displayForm && (
                    <div>
                    ליצירת עמדה הקלד שם עמדה<br/>
                    (אותיות A-Z, א-ת, 0-9, מינימום 3 אותיות)
                    <CreatePositionForm apiResponseCallBack={apiResponseCallBack}/>
                    </div>
                )}
                {displayResponse && (
                    <div>
                    עמדה {positionName} נוצרה בהצלחה
                    </div>
                )}
            </div>
        </div>
    );
};

export default CreatePosition;