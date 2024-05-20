import React from "react";
import baseURL from "../../config";

function GuardListTable({ apiResponse }) {
  console.log('GuardListTable api-response:', apiResponse);
  
  // Check if apiResponse, apiResponse.Details, and apiResponse.Details.length are valid
  if (!apiResponse || !apiResponse.Details || !Array.isArray(apiResponse.Details) || apiResponse.Details.length === 0) {
    return <div>No data available</div>;
  }

  return (
    <div style={{ direction: 'rtl'}} >
      <div className="glist-table" style={{ direction: 'ltr', maxHeight: '70vh', overflowY: 'auto',  marginRight:"5px"}}>
        {apiResponse.Details.map((detail, index) => (
          <div key={index}>
            <div className="table-title" style={{textAlign: 'center'}}>
              <h3>רשימת שמירה ל{detail.glist_day}&nbsp;ה-{detail.glist_date}&nbsp;</h3>
            </div>
            <div style={{textAlign: 'center', marginTop:"-5px"}}>
              עמדה:&nbsp;{detail.glist_position_id.position_name}
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
                 
              {detail.shifts.map((shift, shiftIndex) => (
                <table key={shiftIndex} style={{ border: '1px solid', borderColor:"white", backgroundColor:'rgb(225,225,225)',  direction: 'rtl' }}>
                  <tbody>
                    <tr>
                      <td style={{ width: '40px' }}>&nbsp;{shift.shift_hour}&nbsp;</td>
                      {shift.family_id.map((guard, guardIndex) => (
                        <React.Fragment key={guardIndex}>
                          <td style={{ width: '25px', height: '25px', borderRadius: '80%', border: '1.5px solid black', overflow: 'hidden', display: 'inline-block', marginTop: '2.5px'}}>
                            <img
                              src={`${baseURL}${guard.family_pic}`}
                              alt="family_picture"
                              style={{ maxWidth: "25px", maxHeight: "25px" }}
                            />
                          </td>
                          <td style={{ width: '120px', textAlign:"center" }}>{guard.family_name}&nbsp;&nbsp;{guard.name1}</td>
                          <td className="input-label" style={{ width: '80px', paddingLeft:"10px" }}>{guard.phone1}</td>
                          <td className={guard.armed1 ? "armed" : "not-armed"} style={{ width: '30px', paddingLeft:"50px" }}>{guard.armed1 ? "חמוש" : "לא חמוש"}&nbsp;&nbsp;</td>
                        </React.Fragment>
                      ))}
                    </tr>
                  </tbody>
                </table>
               
              ))}
               <br/>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GuardListTable;