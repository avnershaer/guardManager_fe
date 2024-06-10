import React, { useState, useEffect } from 'react';
import baseURL from "../../config";

function GlistDispalyTable ({apiResponse})  {
    console.log('api-response:', apiResponse)
    const [shifts, setShifts] = useState([]);
    
    useEffect(() => {
        // Assuming apiResponse is passed as a prop and doesn't need to be fetched
        if (apiResponse && apiResponse.shifts) {
            setShifts(Object.values(apiResponse.shifts));
        }
    }, [apiResponse]);
    
    return (
        <div className="glist_table" style={{ display: 'flex', justifyContent: 'right', alignItems: 'center', direction: 'rtl' }}>
            <div>
                <div style={{ marginTop: "40px" }}>
                    <h3>רשימת שמירה ל{apiResponse.list_day}&nbsp;ה-{apiResponse.list_date}&nbsp;</h3>
                </div>
                <div style={{ marginTop: "-20px" }}>עמדה:&nbsp;{apiResponse.position_id.position_name}</div>
                <div>
                    {shifts.map((shift, shiftIndex) => {
                        const guards = shift.guards ? Object.values(shift.guards) : [];
                        return (
                            <table key={shiftIndex} style={{ border: '1px solid', backgroundColor: '#fcfcde' }}>
                                <tbody>
                                    <tr>
                                        <td style={{ width: '40px' }}>{shift.shift_hour}</td>
                                        {guards.map((guard, guardIndex) => (
                                            <React.Fragment key={guardIndex}>
                                                <td style={{ width: '80px' }}>{guard.family.family_name}</td>
                                                <td style={{ width: '80px' }}>{guard.guard_details.fguard_name}</td>
                                                <td style={{ width: '25px', height: '25px', borderRadius: '80%', border: '1.5px solid black', overflow: 'hidden', display: 'inline-block' }}>
                                                    <img
                                                        src={`${baseURL}${guard.guard_details.fguard_pic || 'default-pic.jpg'}`}
                                                        alt="family_picture"
                                                        style={{ maxWidth: "25px", maxHeight: "25px" }}
                                                    />
                                                </td>
                                                <td className="input-label" style={{ width: '80px' }}>{guard.guard_details.fguard_phone}</td>
                                                <td className={guard.guard_details.armed ? "armed" : "not-armed"} style={{ width: '30px' }}>
                                                    {guard.guard_details.armed ? "חמוש" : "לא חמוש"}&nbsp;&nbsp;
                                                </td>
                                            </React.Fragment>
                                        ))}
                                    </tr>
                                </tbody>
                            </table>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}


export default GlistDispalyTable;