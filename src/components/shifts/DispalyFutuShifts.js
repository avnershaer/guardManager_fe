import React, {useState, useEffect} from "react";
import axios from "axios";
import Button1 from "../buttons/button1";


function DisplayFutuShifts(){

    const [shifts, setShifts] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('/shifts_list')
        .then(result => {
            console.log('shifts:', result.data.Details);
            setShifts(result.data.Details);
        })
        .catch(error => {
            console.log('shifts error:', error);
            setError(error);
        });
    },[]);

    if (error) {
        return (
            <div className="error">
                Error: {error.message}
            </div>
        );
    }

    if (shifts === null) {
        return <div>Loading...</div>;
    }


    return (
        <div style={{ alignItems: "flex-start", textAlign: "right", display: "flex", justifyContent: "right", direction: "rtl" }}>
          <div style={{ textAlign: "center" }}>
            <h3>רשימת משמרות</h3>
            <div className="shifts-list">
              <table style={{ borderCollapse: "collapse" }}>
                <thead>
                  <tr>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th>ID</th>
                    <th>משפחות</th>
                    <th>עמדה</th>
                    <th>שעה</th>
                    <th>תאריך</th>
                    <th>יום</th>
                  </tr>
                </thead>
                <tbody>
                  {shifts.map((shift, index) => (
                    <tr key={index}>
                      <td style={{ textAlign: "center", padding: "10px", color: "blue", width: "40px" }}>
                        <Button1 width="50px" fontSize="10px" height="15px" value="החלפה" />
                      </td>
                      <td style={{ textAlign: "center", padding: "10px", }}>
                        <Button1 width="100px" fontSize="10px" height="15px" value="החלפה בהצלבה" />
                      </td>
                      <td style={{ textAlign: "center", padding: "10px", width: "70px" }}>
                        <Button1 width="80px" fontSize="10px" height="15px" value="החלפה בשכר" />
                      </td>
                      <td style={{ textAlign: "center", padding: "10px" }}>{shift.shift_id}</td>
                      <td style={{ textAlign: "center", padding: "10px" }}>{shift.family_id[0]},{shift.family_id[1]}</td>
                      <td style={{ textAlign: "center", padding: "10px" }}>{shift.position_id}</td>
                      <td style={{ textAlign: "center", padding: "10px" }}>{shift.shift_hour}</td>
                      <td style={{ textAlign: "center", padding: "10px" }}>{shift.shift_date}</td>
                      <td style={{ textAlign: "center", padding: "10px" }}>{shift.shift_day}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      );

}

export default DisplayFutuShifts;
