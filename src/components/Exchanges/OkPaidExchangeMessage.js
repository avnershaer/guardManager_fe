import React, {useState} from "react";
import OkButton from "../buttons/OkButton";
import CancelButton from "../buttons/CancelButton";
import {useNavigate} from "react-router-dom";
import Error1 from "../errorComps/Error1";



function OkPaidExchangeMessage(props){

    const [error, setError] = useState('');
    const navigate = useNavigate();

    function handleOkClick(){
        navigate('/ResponseApiPaidExchangeMessage', {
            state: {
                selectedRow:props.selectedRow,
                substituteGuard:props.substituteGuard
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
            <div className="exchange-message">
                &nbsp; האם להחליף בשכר ברשימת השמירה<br /> ל-&nbsp;
                <span style={{ color: "#46fa1e" }}>{props.selectedRow.glistDay}</span>&nbsp;ה-&nbsp;
                <span style={{ color: "#46fa1e" }}>{props.selectedRow.glistDate}</span>&nbsp;
                <br />
                את&nbsp;- 
                <span style={{ backgroundColor: "#183670", color: "rgb(97, 229, 238)" }}>
                    &nbsp;{props.selectedRow.guardLastName}&nbsp;{props.selectedRow.guardFirstName}&nbsp;&nbsp;
                </span>
                ב&nbsp;- 
                <span style={{ backgroundColor: "#183670", color: "yellow" }}>
                    &nbsp;{props.substituteGuard.family_id.family_name}&nbsp;{props.substituteGuard.pguard_name}&nbsp;{props.substituteGuard.name2}
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

export default OkPaidExchangeMessage;
