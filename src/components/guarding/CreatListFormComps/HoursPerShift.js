import React, {useState} from "react";

function HoursPerShift({getHoursPerDhift}){

    const [hoursPerShift, setHoursPerShift] = useState('');
    const HandleOnChange = (event) => {
        const value = event.target.value;
        setHoursPerShift(value);
        getHoursPerDhift(value);
        console.log('hours per shift:', value);
    }

    return(
      <div className="input-label">
            <label className="input-label">
              מספר שעות למשמרת&nbsp;
              <select 
              name="hours_per_shift" 
              value={hoursPerShift} 
              onChange={HandleOnChange}>
                {[1, 2, 3, 4, 6, 8, 12, 24].map((hours) => (
                  <option key={hours} value={hours}>{hours}</option>
                ))}
              </select>
            </label>
        </div>
    );
};

export default HoursPerShift;