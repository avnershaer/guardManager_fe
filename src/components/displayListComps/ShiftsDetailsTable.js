import React from "react";

function ShiftsDetailsTable({ shifts }) {
    return (
        <div className="reports-table"> 
            <div className="table-container">
            <h3 style={{textAlign:"center"}}>משמרות</h3>
                <table>
                    <thead style={{fontSize:"10px"}}>
                        <tr>
                            <th>תאריך</th>
                            <th>יום</th>
                            <th>שעה</th>
                            <th>עמדה</th>
                            <th>שומר</th>
                        </tr>
                    </thead>
                    <tbody>
                        {shifts.details && shifts.details.map((shift, index) => (
                            <tr key={index}>
                                <td>{shift?.shift_date}</td>
                                <td>{shift?.shift_day}</td>
                                <td>{shift?.shift_hour}</td>
                                <td>{shift?.position_id?.position_name}</td>
                                <td>
                                    {shift?.fguard_id?.[0]?.family_id?.family_name} {shift?.fguard_id?.[0]?.fguard_name}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ShiftsDetailsTable;