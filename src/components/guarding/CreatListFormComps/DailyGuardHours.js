import React, {useState} from "react";

function DailyGuardHours({getDailyGuardHours}){

    const [dailyGuardHoours, setDailyGuardHours] = useState('');
    const HandleOnChange = (event) => {
        const value = event.target.value;
        setDailyGuardHours(value);
        getDailyGuardHours(value);
        console.log('daily guard hours:', value);
    };

    return(
    <div className="input-label">
        <label className="input-label">
            שעות שמירה ליום&nbsp;
            <input
              style={{ width: '35px' }}
              type="number"
              name="daily_guard_hours"
              value={dailyGuardHoours}
              onChange={HandleOnChange}
            />&nbsp;
        </label>
    </div>
    );
};

export default DailyGuardHours;