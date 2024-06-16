import React, {useState} from "react";
import baseURL from "../../config";
import BlueWiteButton from "../buttons/BlueWiteButton";


function ListTable(props) {
  console.log('APIRESPONSE:', props.apiResponse)
  //{selectedRow1, typeOf, displaySecChooseGuardMsgCallBack,  displayRegularExchangesCallBack, apiResponse }
  const [selectedRow, setSelectedRow] = useState(null);


  if (!props.apiResponse || !props.apiResponse.Details || !Array.isArray(props.apiResponse.Details) || props.apiResponse.Details.length === 0) {
    return <div>No data available</div>;
  }

  const handleRowClick = (rowData) => {
    setSelectedRow(rowData);
    props.selectedRowCallBack(rowData);
    props.displayExchangeGuardListCallBack(true);
    
    
    if (props.typeOf === 'cross') {
      props.selectedRowCallBack({selectedRow1:rowData});
      props.displayExchangeGuardListCallBack(false);
      props.secondCrossGuardListCallBack();

    }else if (props.typeOf === 'secCross') {
      props.selectedRow2CallBack({selectedRow2:rowData});
      props.displayExchangeGuardListCallBack(false);
      props.displayApproveCrossMessageCallBack();
      //displaySecChooseGuardMsgCallBack();
      
    }else if (props.typeOf === 'paid') {
      setSelectedRow(rowData);
      props.selectedRowCallBack(rowData);
      props.displayPaidExchangeGuardListCallBack(true);
      props.displayExchangeGuardListCallBack(false);
      
      //props.displayApproveCrossMessageCallBack();
      //displaySecChooseGuardMsgCallBack();
      
    }

    console.log('ROW DATA:', rowData)
  };



  return (
    <div style={{ direction: 'rtl', textAlign:"center", display: 'flex', justifyContent: 'center', alignItems: 'center'}} >
      <div className="glist-table" style={{ direction: 'ltr', maxHeight: '70vh', overflowY: 'auto', marginRight: "5px" }}>
        {props.apiResponse.Details.map((detail, index) => (
          <div key={index}>
            <div className="table-title" style={{textAlign: 'center'}}>
              <h3>רשימת שמירה ל{detail.glist_day}&nbsp;ה-{detail.glist_date}&nbsp;</h3>
            </div>
            <div style={{textAlign: 'center', marginTop:"-5px"}}>
              עמדה:&nbsp;{detail.glist_position_id.position_name}
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
              {detail.shifts.map((shift, shiftIndex) => (
                <table key={shiftIndex} style={{borderRadius: '10px', border: '1px solid', borderColor: "white", backgroundColor: 'rgb(225,225,225)', direction: 'rtl' }}>
                  <tbody>
                    <tr>
                      <td style={{width:"40px"}}>&nbsp;{shift.shift_hour}&nbsp;</td>
                      <td><BlueWiteButton
                            width="50px"
                            fontSize="10px"
                            height="20px"
                            value="החלף"
                            onClick={() => handleRowClick({
                              rowIndex: shiftIndex,
                              guardIndex: 0, // have to be always 0 to display only the first guard
                              glistDay: detail.glist_day,
                              glistDate: detail.glist_date,
                              posId: detail.glist_position_id.position_id,
                              posName: detail.glist_position_id.position_name,
                              shiftHour: shift.shift_hour,
                              guardId: shift.fguard_id[0].fguard_id,
                              guardLastName: shift.fguard_id[0].family_id.family_name,
                              guardFirstName: shift.fguard_id[0].fguard_name,
                              shiftId: shift.shift_id,
                            })}
                            fontWeight="normal"
                          /></td>
                      {shift.fguard_id.length > 0 && (
                        <React.Fragment>
                          <td style={{ width: '25px', height: '25px', borderRadius: '80%', border: '1.5px solid black', overflow: 'hidden', display: 'inline-block', marginTop: '2.5px'}}>
                            <img
                              src={`${baseURL}${shift.fguard_id[0].fguard_pic}`}
                              alt="family_picture"
                              style={{ maxWidth: "25px", maxHeight: "25px" }}
                            />
                          </td>
                          <td
                            style={
                              (props.typeOf === 'secCross' &&
                                selectedRow &&
                                selectedRow.selectedRow2 &&
                                selectedRow.selectedRow2.rowIndex === shiftIndex &&
                                selectedRow.selectedRow2.guardIndex === 0) ||
                              (props.typeOf === 'cross' &&
                                selectedRow &&
                                selectedRow.selectedRow1 &&
                                selectedRow.selectedRow1.rowIndex === shiftIndex &&
                                selectedRow.selectedRow1.guardIndex === 0) ||
                              (selectedRow &&
                                selectedRow.rowIndex === shiftIndex &&
                                selectedRow.guardIndex === 0)
                                ? { backgroundColor: 'rgb(97, 229, 238)', width: '120px', textAlign: 'center' }
                                : { width: '120px', textAlign: 'center' }
                            }
                          >
                            {shift.fguard_id[0].family_id.family_name}&nbsp;&nbsp;{shift.fguard_id[0].fguard_name}&nbsp;&nbsp;
                          </td>
                          <td
                            className="input-label"
                            style={
                              (props.typeOf === 'secCross' &&
                                selectedRow &&
                                selectedRow.selectedRow2 &&
                                selectedRow.selectedRow2.rowIndex === shiftIndex &&
                                selectedRow.selectedRow2.guardIndex === 0) ||
                              (props.typeOf === 'cross' &&
                                selectedRow &&
                                selectedRow.selectedRow1 &&
                                selectedRow.selectedRow1.rowIndex === shiftIndex &&
                                selectedRow.selectedRow1.guardIndex === 0) ||
                              (selectedRow &&
                                selectedRow.rowIndex === shiftIndex &&
                                selectedRow.guardIndex === 0)
                                ? { backgroundColor: 'rgb(97, 229, 238)', width: '80px', paddingLeft: '10px' }
                                : { width: '80px', paddingLeft: '10px' }
                            }
                          >
                            {shift.fguard_id[0].fguard_phone}
                          </td>
                          <td className={shift.fguard_id[0].armed1 ? "armed" : "not-armed"} style={{ width: '30px', paddingLeft: "50px" }}>
                            {shift.fguard_id[0].armed ? "חמוש" : "לא חמוש"}&nbsp;&nbsp;
                          </td>
                        </React.Fragment>
                      )}
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

export default ListTable;