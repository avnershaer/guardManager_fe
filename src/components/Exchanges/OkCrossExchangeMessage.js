import React, {useState, useEffect} from "react";
import OkButton from "../buttons/OkButton";
import CancelButton from "../buttons/CancelButton";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import Error1 from "../errorComps/Error1";



function OkCrossExchangeMessage(props){


    const [error, setError] = useState('');
    const navigate = useNavigate();

    function handleOkClick(){
        navigate('/ResponseApiCrossExchangeMessage', {
            state: {
                selectedRow:props.selectedRow1.selectedRow1,
                substituteGuard:props.selectedRow2
            }
        });
    }
    
    function handleCancelClick(){
        navigate('/ExchangesPanel');
    }

    if (error){
        return (
            <div>
                <Error1 error={error} navigateTo={'/ExchangesPanel'}/>
            </div>
        );
    };

    return (
        <div>
            <div className="exchange-message" style={{ height: "128px" }} >
               
                &nbsp;האם להחליף בהצלבה ברשימת השמירה<br/>ל-&nbsp;
                <span style={{ color: "#46fa1e" }}>{props.selectedRow1.selectedRow1.glistDay}</span>&nbsp;ה-&nbsp;
                <span style={{ color: "#46fa1e" }}>{props.selectedRow1.selectedRow1.glistDate}</span>&nbsp;
                <br/>
                את&nbsp;- &nbsp;
                <span style={{ backgroundColor: "#183670", color: "rgb(97, 229, 238)" }}>
                    &nbsp;{props.selectedRow1.selectedRow1.guardLastName}&nbsp;{props.selectedRow1.selectedRow1.guardFirstName}&nbsp;&nbsp;<br/>
                </span>
                ב&nbsp;-  
                <span style={{ backgroundColor: "#183670", color: "yellow" }}>
                    &nbsp;  {props.selectedRow2.guardLastName}&nbsp;
                            {props.selectedRow2.guardFirstName}&nbsp;</span><br/>
                            מרשימת השמירה <br/>ל - &nbsp;
                            <span style={{ color: "#46fa1e" }}>{props.selectedRow2.glistDay}</span>&nbsp;ה- &nbsp; 
                            <span style={{ color: "#46fa1e" }}>{props.selectedRow2.glistDate}</span> 
                            <span style={{ color: "red", fontSize: "12px", fontWeight: "bolder" }}>&nbsp;?</span>
                            <br/>
                <div style={{ display: "inline-flex", marginTop: "8px" }}>
                    <OkButton
                        width="50px"
                        fontSize="10px"
                        height="20px"
                        value="אישור"
                        onClick={handleOkClick}
                    />
                    &nbsp;&nbsp;&nbsp;
                    <CancelButton
                        width="50px"
                        fontSize="10px"
                        height="20px"
                        value="ביטול"
                        onClick={handleCancelClick}
                    />
                </div>
                {error && <div className="error">Error: {error}</div>}
            </div>
        </div>
    );
};

export default OkCrossExchangeMessage;
