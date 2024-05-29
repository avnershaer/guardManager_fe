import React, {useState, useEffect} from "react";
import OkButton from "../buttons/OkButton";
import CancelButton from "../buttons/CancelButton";
import axios from "axios";
import ResponseApiExchangeMessage from "./ResponseApiExchangeMessage";
import {useNavigate} from "react-router-dom";



function OkExchangeMessage(props){

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

    
    
    console.log('PROPS:', props)
    return (

        <div>
            <div style={{
                    width: "450px",
                    height:"80px",
                    padding: "5px",
                    borderRadius: "35px",
                    border: "1px solid black",
                    backgroundColor: "#183670",
                    color: "white",
                    fontSize: "12px",
                    fontWeight: "normal",
                    textAlign:"center"
                  }}>
                    &nbsp; האם להחליף ברשימת השמירה<br/> ל-&nbsp; 
                    <span style={{color:"#46fa1e"}}>{props.selectedRow.glistDay}</span>&nbsp;ה-&nbsp; 
                    <span style={{color:"#46fa1e"}}>{props.selectedRow.glistDate}</span>&nbsp;
                    <br/>
                    את&nbsp;- &nbsp;
                    {props.selectedRow.selectedRow1 ? (
                        <span style={{backgroundColor:"#183670", color:"rgb(97, 229, 238)"}}>&nbsp;
                        {props.selectedRow.selectedRow1.guardLastName}&nbsp;
                        {props.selectedRow.selectedRow1.guardFirstName}&nbsp;
                        &nbsp;
                        </span>
                    ) : (
                        <span style={{backgroundColor:"#183670", color:"rgb(97, 229, 238)"}}>&nbsp;
                        {props.selectedRow.guardLastName}&nbsp;
                        {props.selectedRow.guardFirstName}&nbsp;
                        &nbsp;
                        </span>
                    )}
                    ב&nbsp;- &nbsp;
                    {props.selectedRow.selectedRow2 ? (
                      <span style={{backgroundColor:"#183670", color:"yellow"}}>&nbsp;
                        {props.selectedRow.selectedRow2.guardLastName}&nbsp;
                        {props.selectedRow.selectedRow2.guardFirstName}&nbsp;
                        &nbsp;
                      </span>
                    ) : (
                      <span style={{backgroundColor:"#183670", color:"yellow"}}>&nbsp;
                        {props.substituteGuard.family_name}&nbsp;
                        {props.substituteGuard.name1}&nbsp;
                        {props.substituteGuard.name2}
                      </span>
                    )}
                    <span style={{color:"red", fontSize:"16px", fontWeight:"bolder"}}>?</span><br/>
                    <div style={{display:"inline-flex", marginTop:"3px"}}>
                        <OkButton 
                            width="50px"
                            fontSize="10px"
                            height="20px"
                            value="אישור"
                            onClick={handleOkClick}
                        />&nbsp;&nbsp;&nbsp;
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

export default OkExchangeMessage;
