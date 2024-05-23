import React, { useState } from "react";

function OkButton(props) {
  const [color, setColor] = useState('#46fa1e');
  const [borderColor, setBorderColor] = useState('white');
  const [textColor, setTextColor] = useState('#183670');


  function handleMouseOver() {
    setColor('#b8f4b7f7');
    setBorderColor('#183670');
    setTextColor('#183670');
  }

  function handleMouseOut() {
    setColor('#46fa1e');
    setBorderColor('white');
    setTextColor('#183670');
  }

  function handleButtonClick() {
    setColor('#b8f4b7f7');
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

export default OkButton; 