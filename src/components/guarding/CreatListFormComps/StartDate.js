import React, { useState } from "react";


function StartDate(props){

    const [selectedDay, setSelectedDay] = useState('');

    const handleDateChange = (event) => {
        const date = event.target.value;
        const dateObject = new Date(date);
        const options = { weekday: 'long' }; // long format for the day
        const day = dateObject.toLocaleDateString('he-IL', options); // get the day from the selected date and set it to hebrew 
        setSelectedDay(day)
        props.getStartDate(date, day)
    };

    return(
        <div>
            <div className="input-cell" style={{ marginTop: "-5px" }}>
            &nbsp;
            החל מתאריך&nbsp;
            <input
              type="date"
              name="date"
              onChange={handleDateChange}
            />
            <label className="input-label">
            <input
              style={{ width: '55px' }}
              type="text"
              name="day"
              value={selectedDay}
              readOnly
            />
            </label>
        </div>
        </div>
    )
};

export default StartDate;