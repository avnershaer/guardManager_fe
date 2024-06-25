import React, { useState } from "react";

function WiteBlueButton(props) {
  const [color, setColor] = useState('white');
  const [borderColor, setBorderColor] = useState('#183670');
  const [textColor, setTextColor] = useState('#183670');


  function handleMouseOver() {
    setColor('#183670');
    setBorderColor('#183670');
    setTextColor('white');
  }

  function handleMouseOut() {
    setColor('white');
    setBorderColor('#183670');
    setTextColor('#183670');
  }

  function handleButtonClick() {
    setColor('#183670');
    console.log("Button clicked");
    if (props.onClick) {
      props.onClick();
    }
  }
  return (
    <div>
      <button
        onClick={handleButtonClick}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        type={props.type} 
        style={{
          backgroundColor: color,
          borderRadius: "10px",
          border: `1px solid ${borderColor}`,
          color: textColor,
          width: props.width, 
          height: props.height,
          fontSize: props.fontSize,
          fontWeight: props.fontWeight,
          
        }}
      >
        {props.value}
      </button>
    </div>
  );
}

export default WiteBlueButton; 