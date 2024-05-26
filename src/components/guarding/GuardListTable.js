import React, {useState} from "react";
import baseURL from "../../config";
import BlueWiteButton from "../buttons/BlueWiteButton";
import DisplayExchangeGuardList from "../Exchanges/DisplayExchangeGuardList";

function GuardListTable( { displayRegularExchangesCallBack, apiResponse }) {
  console.log('GuardListTable api-response:', apiResponse);
  const [displayExchangeButton, setDisplayExchangeButton] = useState(false)
  const [gurdsList, setGuardList] = useState('');
  const [selectedRow, setSelectedRow] = useState(null);
  const [displayExchangeGuardsList, setDisplayExchangeGuardList] = useState(false);
  const [displayGuardsTable, setDisplayGuarTable] = useState(true);

  // Check if apiResponse, apiResponse.Details, and apiResponse.Details.length are valid
  if (!apiResponse || !apiResponse.Details || !Array.isArray(apiResponse.Details) || apiResponse.Details.length === 0) {
    return <div>No data available</div>;
  }

  const handleRowClick = (rowData) => {
    setSelectedRow(rowData);
    setDisplayExchangeGuardList(true);
    console.log('ROW DATA:', rowData)
  };

  return (
    <div style={{ direction: 'rtl'}} >
      {displayGuardsTable && (
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
                <table key={shiftIndex} style={{borderRadius:'10px',  border: '1px solid', borderColor:"white", backgroundColor:'rgb(225,225,225)',  direction: 'rtl' }}>
                  <tbody>
                  <tr>
                      <td style={{width:"40px"}}>&nbsp;{shift.shift_hour}&nbsp;</td>
                      
                      {shift.family_id.map((guard, guardIndex) => (
                        <React.Fragment key={guardIndex}>
                          <td style={{ width: '25px', height: '25px', borderRadius: '80%', border: '1.5px solid black', overflow: 'hidden', display: 'inline-block', marginTop: '2.5px'}}>
                            <img
                              src={`${baseURL}${guard.family_pic}`}
                              alt="family_picture"
                              style={{ maxWidth: "25px", maxHeight: "25px" }}
                            />
                          </td>
                          <td><BlueWiteButton
                        width="50px"
                        fontSize="10px"
                        heigh t="20px"
                        value="החלף"
                        onClick={() => handleRowClick({
                          rowIndex:shiftIndex,
                          guardIndex: guardIndex, 
                          glistDay:detail.glist_day, 
                          glistDate:detail.glist_date, 
                          posName:detail.glist_position_id.position_name,
                          shiftHour:shift.shift_hour,
                          guardLastName:guard.family_name,
                          guardFirstName:guard.name1,
                          shiftId:shift.shift_id,
                        })}
                        fontWeight="normal"
                        /></td>
                          <td style={selectedRow && selectedRow.rowIndex === shiftIndex && selectedRow.guardIndex === guardIndex ? { backgroundColor: 'rgb(97, 229, 238)',  width: '120px', textAlign:"center"  }:{ width: '120px', textAlign:"center" }}>{guard.family_name}&nbsp;&nbsp;{guard.name1} &nbsp;&nbsp;
                     
                        </td>
                       
                          <td className="input-label" style={selectedRow && selectedRow.rowIndex === shiftIndex && selectedRow.guardIndex === guardIndex ? { backgroundColor: 'rgb(97, 229, 238)',   width: '80px', paddingLeft:"10px"  }:{ width: '80px', paddingLeft:"10px" }}>{guard.phone1}</td>
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
      
      )}
      {displayExchangeGuardsList && (<DisplayExchangeGuardList displayRegularExchangesCallBack={displayRegularExchangesCallBack} selectedRow={selectedRow}/>)} 

    </div>
  );
};

export default GuardListTable;