import React from "react";
import BlueWiteButton from "../buttons/BlueWiteButton";
import { useNavigate } from "react-router-dom";

function Error1(props) {
    const navigate = useNavigate();
    const HandleOnClick = () => {
        if (props.displayInput) {
            props.displayInput(false, true);
        } else if (props.goBack) {
            navigate(-1); // one step back
        } else if (props.handleShowGuardsList) {
            props.handleShowGuardsList();
        }
         else if (props.navigateTo) {
            navigate(`/${props.navigateTo}`);
        } else {
            navigate('/'); // default route if navigateTo is not provided
        }
    };

    
    return (
        <div className="error">
            {props.error}&nbsp;&nbsp;&nbsp;&nbsp;
            <BlueWiteButton
                width="150px"
                fontSize="10px"
                height="20px"
                value="חזור"
                onClick={HandleOnClick}
                fontWeight="normal"
            />
        </div>
    );
};

export default Error1;