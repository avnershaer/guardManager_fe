import React, {useState} from "react";

function StartGuardHour({getStartGuardHour}){

    const [startGuardhour, setStartGuardHour] = useState('');
    const HandleOnChange = (event) => {
        const value = event.target.value;
        setStartGuardHour(value);
        getStartGuardHour(value);
        console.log('start gurad value:', value);
    };

    return(
        <div className="input-label">
           <label className="input-label">
                שעת התחלת השמירה&nbsp;
                <input
                  type="time"
                  name="gaurd_start_time"
                  value={startGuardhour}
                  onChange={HandleOnChange}
                />&nbsp;&nbsp;
           </label>
        </div>
    );

};

export default StartGuardHour;