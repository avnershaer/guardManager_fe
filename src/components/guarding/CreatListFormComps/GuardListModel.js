import React from "react";

function GuardListModel(){
        
   
    return(
        <div>
            <label className="input-label">
              מודל לרשימת שומרים&nbsp;
              <input
                className="grey-text"
                type="text"
                name="model"
                value="Families"
                readOnly
                style={{ width: '50px' }}
              />
            </label>
        </div>
    )






};

export default GuardListModel;