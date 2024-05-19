import React from "react";
import baseURL from "../../config";

function GuardListTable({ apiResponse }) {
  console.log('GuardListTable api-response:', apiResponse);
  
  if (!apiResponse || !apiResponse.Details || apiResponse.Details.length === 0) {
    return <div>No data available</div>;
  }

  return (
    <div>
      <div className="glist-table" style={{ direction: 'rtl' }}>
        {apiResponse.Details.map((detail, index) => (
          <div key={index}>
            <div className="table-title" style={{textAlign: 'right', marginRight: "120px"}}>
              <h3>רשימת שמירה ל{detail.glist_day}&nbsp;ה-{detail.glist_date}&nbsp;</h3>
            </div>
            <div style={{textAlign: 'right'}}>
              עמדה:&nbsp;{detail.glist_position_id.position_name}
            </div>
            <div>
              <br />    
              {detail.shifts.map((shift, shiftIndex) => (
                <table key={shiftIndex} style={{ alignItems: 'center', border: '1px solid', backgroundColor: '#f6f6f7' }}>
                  <tbody>
                    <tr>
                      <td style={{ width: '40px' }}>{shift.shift_hour}</td>
                      <td style={{ width: '40px' }}>{shift.shift_day}</td>
                      <td style={{ width: '40px' }}>{shift.shift_date}</td>
                      <td style={{ width: '40px' }}>{shift.position_id}</td>
                      <td style={{ width: '40px' }}>{shift.shift_id}</td>
                      {shift.family_id.map((guard, guardIndex) => (
                        <React.Fragment key={guardIndex}>
                          <td style={{ width: '80px' }}>{guard.family_name}</td>
                          <td style={{ width: '80px' }}>{guard.name1}</td>
                          <td style={{ width: '25px', height: '25px', borderRadius: '80%', border: '1.5px solid black', overflow: 'hidden', display: 'inline-block', marginTop: '2.5px' }}>
                            <img
                              src={`${baseURL}${guard.family_pic}`}
                              alt="family_picture"
                              style={{ maxWidth: "25px", maxHeight: "25px" }}
                            />
                          </td>
                          <td className="input-label" style={{ width: '80px' }}>{guard.phone1}</td>
                          <td className={guard.armed1 ? "armed" : "not-armed"} style={{ width: '30px' }}>{guard.armed1 ? "חמוש" : "לא חמוש"}&nbsp;&nbsp;</td>
                        </React.Fragment>
                      ))}
                    </tr>
                  </tbody>
                </table>
              ))}
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GuardListTable;