import React from "react";
import WiteBlueButton from "../buttons/WiteBlueButton";

function PguardsTable(props){


    const handleUpdateClick = (guard) => {
        props.hideGuardListCallBack();
        props.displayPguardFormCallBack();
        props.guardDataCallBack(guard);
        };
    

    const handleShiftsForGuardClick = (fguardId) => {
        props.handleShiftsForGuardCallBack(fguardId);
        props.hideGuardListCallBack();
        };

    return (    
        <div>
             <h5 style={{color:"#183670", textAlign:"center", marginTop:"10px", marginBottom:"2px"}}>רשימת שומרים בשכר</h5>
            <div>
                <div className="reports-table">
                        <table>
                            <thead style={{fontSize:"10px"}}>
                                <th>שם משפחה</th>
                                <th>שם פרטי</th>
                                <th>טלפון</th>
                                <th>פעיל</th>
                                <th></th>
                                <th></th>
                            </thead>
                            
                            {props.guards.map((guard, index) => (
                            <tbody>
                                <tr style={{ borderColor:"lightGrey"}}>                  
                                    <td style={{ width:"90px", textAlign: 'center'}}>{guard.family_id.family_name}</td>
                                    <td style={{ width:"60px", textAlign: 'center', color:'blue' }}>{guard.pguard_name}</td>
                                    <td style={{ width:"110px", textAlign: 'center', color:'blue' }}>{guard.pguard_phone}</td>  
                                    <td style={{ 
                                        textAlign: 'center', 
                                        color: guard.family_id.user.is_active ? 'green' : 'red', 
                                        fontWeight: 'bold' 
                                        }}>
                                        {guard.family_id.user.is_active ? 'כן' : 'לא'}
                                    </td>   
                                    <td>
                                        <WiteBlueButton
                                            width="90px"
                                            fontSize="12px"
                                            height="20px"
                                            value="ערוך פרטי שומר"
                                            fontWeight="normal"
                                            onClick={() => handleUpdateClick(guard)}
                                        />
                                    </td>
                                    <td>
                                        <WiteBlueButton
                                            width="110px"
                                            fontSize="12px"
                                            height="20px"
                                            value="הצג שמירות לשומר"
                                            fontWeight="normal"
                                            onClick={() => handleShiftsForGuardClick(guard.fguard_id)}
                                        />
                                    </td>
                                </tr>
                            </tbody>    
                            ))}
                        </table>
                </div>
            </div>        
        </div>
    );
};

export default PguardsTable;
