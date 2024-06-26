import React from "react";

function ExReportTable(props){

    return (
        <div className="reports-table"> 
            <div className="table-container">
            <h3 style={{textAlign:"center", color:"#183670"}}>החלפות לשומר</h3>                <table>
                    <thead style={{fontSize:"10px"}}>
                        <th>מס"ד</th>
                        <th>סוג ההחלפה</th>
                        <th>תאריך</th>
                        <th>יום</th>
                        <th>שעה</th>
                        <th>שומר מקורי</th>
                        <th>טלפון</th>
                        <th>שומר מחליף</th>
                        <th>טלפון</th>
                    </thead>
                    <tbody>
                        {props.apiResponse.details.map((detail, index) => (
                            <tr key={index}>
                                <td>{detail?.exchange_id}</td>
                                <td>{detail?.exchange_type}</td>
                                <td>{detail?.exchange_date}</td>
                                <td>{detail?.exchange_day}</td>
                                <td>{detail?.exchange_hour}</td>
                                <td>
                                    {detail?.origin_guard_id?.family_id?.family_name} &nbsp;
                                    {detail?.origin_guard_id?.fguard_name} &nbsp;
                                </td>
                                <td>{detail?.origin_guard_id?.fguard_phone}</td>
                                
                                {detail.substitute_Pguard_id != null && (
                                <>
                                  <td>
                                      {detail?.substitute_Pguard_id?.family_id?.family_name} &nbsp;
                                      {detail?.substitute_Pguard_id?.pguard_name} &nbsp;
                                  </td>
                                  <td>{detail?.substitute_Pguard_id?.pguard_phone}</td>
                                </>
                                )}
                                {detail.substitute_Pguard_id === null && (
                                <>
                                  <td>
                                      {detail?.substitute_fguard_id?.family_id?.family_name} &nbsp;
                                      {detail?.substitute_fguard_id?.fguard_name} &nbsp;
                                  </td>
                                  <td>{detail?.substitute_fguard_id?.fguard_phone}</td>
                                </>
                                )}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ExReportTable;
