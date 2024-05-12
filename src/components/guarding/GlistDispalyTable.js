import React from "react"
import baseURL from "../../config";

function GlistDispalyTable ({apiResponse})  {
    console.log('api-response:', apiResponse)

    return(
        <div className="glist_table" style={{ display: 'flex', justifyContent: 'right', alignItems: 'center',  direction: 'rtl' }}>

        <div >
            <div><h3>רשימת שמירה ל{apiResponse.list_day}&nbsp;ה-{apiResponse.list_date}&nbsp;</h3></div>
            <div>עמדה:&nbsp;{apiResponse.position_id.position_name}</div>
            <div><br/>
            {Object.values(apiResponse.shifts).map((shift, index) => (
                    <table key={index} style={{border: '1px solid', backgroundColor: '#fcfcde'  }}>
                        <tbody>
                            <tr>
                                <td style={{ width: '40px'}}>{shift.shift_hour}</td>
                                    {shift.guards.map((guard, index) => (
                                        <React.Fragment key={index}>
                                            <td style={{ width: '80px'}}>{guard.family_name}</td>
                                            <td style={{ width: '80px'}}>{guard.name1}</td>
                                            <td style={{ width: '25px', height: '25px', borderRadius: '80%' ,border: '1.5px solid black', overflow: 'hidden', display: 'inline-block' }}>
                                            <img
                                                    src={`${baseURL}${guard.family_pic}`}
                                                    alt="family_picture"
                                                    style={{ maxWidth: "25px", maxHeight: "25px"}}
                                                />
                                            </td>
                                            <td className="input-label" style={{ width: '80px'}}>{guard.phone1}</td>
                                            <td className={guard.armed1 ? "armed" : "not-armed"} style={{ width: '30px'}}>{guard.armed1 ? "חמוש" : "לא חמוש"}&nbsp;&nbsp;</td>
                                            
                                        </React.Fragment>
                                        
                                ))}
                            </tr>   
                        </tbody>
                    </table>
                ))}
                
            </div>
            </div>
            </div>
    )
}


export default GlistDispalyTable;