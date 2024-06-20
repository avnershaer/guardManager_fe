import React from "react";
import BlueWiteButton from "../buttons/BlueWiteButton";
import {useNavigate} from "react-router-dom";


function GuardsTable({guards, type}){

    const navigate = useNavigate();
    
    return (
        <div>
            <div className="reports-table">
                <table>
                    <thead style={{fontSize:"10px"}}>
                        <th>שם משפחה</th>
                        <th>שם פרטי</th>
                        <th>טלפון</th>
                        <th></th>
                        <th></th>
                    </thead>
                    {guards.map((guard, index) => (
                    <tbody>
                        <tr>                    
                            <td style={{ width:"100px", textAlign: 'center'}}>{guard.family_id.family_name}</td>
                            <td style={{ width:"50px", textAlign: 'center', color:'blue' }}>{guard.fguard_name}</td>
                            <td style={{ textAlign: 'center', color:'blue' }}>{guard.fguard_phone}</td>   
                            <td>
                                <BlueWiteButton
                                    width="120px"
                                    fontSize="12px"
                                    height="20px"
                                    value="ערוך פרטי שומר"
                                    fontWeight="normal"
                                    onClick={() => navigate('/CrossExchangeReport')}
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
