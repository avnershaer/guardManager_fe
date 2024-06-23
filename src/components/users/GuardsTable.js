import React, {useState} from "react";
import BlueWiteButton from "../buttons/BlueWiteButton";
import {useNavigate} from "react-router-dom";


function GuardsTable(props){

    const navigate = useNavigate();
    
    const handleUpdateClick = (guard) => {
        props.hideGuardListCallBack();
        props.displayFguardFormCallBack();
        props.guardDataCallBack(guard);
        };

    return (    
        <div>
            <div>
            </div>
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
                            <td style={{ width:"100px", textAlign: 'center'}}>{guard.family_id.family_name}</td>
                            <td style={{ width:"50px", textAlign: 'center', color:'blue' }}>{guard.fguard_name}</td>
                            <td style={{ textAlign: 'center', color:'blue' }}>{guard.fguard_phone}</td>  
                            <td style={{ 
                                textAlign: 'center', 
                                color: guard.family_id.user.is_active ? 'green' : 'red', 
                                fontWeight: 'bold' 
                                }}>
                                {guard.family_id.user.is_active ? 'כן' : 'לא'}
                            </td>   
                            <td>
                                <BlueWiteButton
                                    width="120px"
                                    fontSize="12px"
                                    height="20px"
                                    value="ערוך פרטי שומר"
                                    fontWeight="normal"
                                    onClick={() => handleUpdateClick(guard)}
                                />
                            </td>
                            <td>
                                <BlueWiteButton
                                    width="120px"
                                    fontSize="12px"
                                    height="20px"
                                    value="הצג שמירות לשומר"
                                    fontWeight="normal"
                                    onClick={() => navigate('/CrossExchangeReport')}
                                />
                            </td>
                            <td>
                                <BlueWiteButton
                                    width="120px"
                                    fontSize="12px"
                                    height="20px"
                                    value="הצג החלפות לשומר"
                                    fontWeight="normal"
                                    onClick={() => navigate('/CrossExchangeReport')}
                                />
                            </td>
                        </tr>
                    </tbody>    
                    ))}
                </table>
            </div>
        </div>
    );
};

export default GuardsTable;
