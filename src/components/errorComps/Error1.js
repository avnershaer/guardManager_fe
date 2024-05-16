import React from "react";
import BlueWiteButton from "../buttons/BlueWiteButton";


function Error1(props){

    const HandleOnClick = () => {
        props.displayInput(false, true)
    }

    return (
        <div className="error">
            Error: {props.error}&nbsp;&nbsp;&nbsp;&nbsp;
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