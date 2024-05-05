import React from "react";

// global data (date, day) for guarding list
function NumOfLists ({getNumOfLists}){

    const handleChange = (event) => {
    const value = event.target.value; // selected value
    getNumOfLists(value); // pass selected value to function
    };

    return(
        <div>
          <div className="input-cell" style={{ marginTop: "-5px" }}>
            <label className="input-label">
              מספר ימים&nbsp;
              <select 
              name="number_of_lists" 
              onChange={handleChange}
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
              </select>
            </label>
           </div>
       
        </div>
        
    )
};

export default NumOfLists;