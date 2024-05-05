import React from "react";

function NumOfGuards({getNumOfGuards}){

    const HandleOnChange = (event) =>{
      const value = event.target.value;
      getNumOfGuards(value)
      console.log('num of guards value:', value)
    }
  
    return(
        <div className="input-cell">
            <label className="input-label">
              מספר שומרים במשמרת&nbsp;
              <select name="num_of_guards" onChange={HandleOnChange}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
              </select>&nbsp;&nbsp;&nbsp;
            </label>
        </div>
    )
};

export default NumOfGuards;
