import React, {useState, useEffect} from "react";
import OkButton from "../buttons/OkButton";
import CancelButton from "../buttons/CancelButton";
import axios from "axios";
import {useNavigate} from "react-router-dom";



function OkCrossExchangeMessage(props){

    const [error, setError] = useState('');
    const navigate = useNavigate();

    function handleOkClick(){
        navigate('/ResponseApiExchangeMessage', {
            state: {
                selectedRow:props.selectedRow,
                substituteGuard:props.substituteGuard
            }
        });
    }
    
    function handleCancelClick(){
        navigate('/ExchangesPanel');
    }
    console.log('PROPS:',props)
    return (
        <div>
            <div className="exchange-message">
                &nbsp; האם להחליף ברשימת השמירה<br /> ל-&nbsp;
                <span style={{ color: "#46fa1e" }}>{props.selectedRow1.glistDay}</span>&nbsp;ה-&nbsp;
                <span style={{ color: "#46fa1e" }}>{props.selectedRow1.glistDate}</span>&nbsp;
                <br />
                את&nbsp;- &nbsp;
                <span style={{ backgroundColor: "#183670", color: "rgb(97, 229, 238)" }}>
                    &nbsp;{props.selectedRow1.guardLastName}&nbsp;{props.selectedRow1.guardFirstName}&nbsp;&nbsp;
                </span>
                ב&nbsp;- &nbsp; 
                <span style={{ backgroundColor: "#183670", color: "yellow" }}>
                    &nbsp;  {props.selectedRow2.guardLastName}&nbsp;
                            {props.selectedRow2.guardFirstName}&nbsp;
                </span>
                <span style={{ color: "red", fontSize: "16px", fontWeight: "bolder" }}>?</span>
                <br />
                <div style={{ display: "inline-flex", marginTop: "3px" }}>
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
