import React, { useState } from "react";


function StartDate(props){

    const [selectedDay, setSelectedDay] = useState('');
    
    const today = new Date().toISOString().split('T')[0];// today's date in the format yyyy-mm-dd
    
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
            <div className="input-cell" style={{ marginRight: "-5px", marginTop: "5px"}}>
            &nbsp;
            <label className="input-label" >
            החל מתאריך&nbsp;
            <input
              type="date"
              name="date"
              onChange={handleDateChange}
              min={today}
            />
            
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