import React, { useState } from "react";

function BlueWiteButton(props) {
  const [color, setColor] = useState('#183670');
  const [borderColor, setBorderColor] = useState('white');
  const [textColor, setTextColor] = useState('white');


  function handleMouseOver() {
    setColor('white');
    setBorderColor('#183670');
    setTextColor('#183670');
  }

  function handleMouseOut() {
    setColor('#183670');
    setBorderColor('white');
    setTextColor('white');
  }

  function handleButtonClick() {
    setColor('white');
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
          border: `1px solid ${borderColor}`,
          color: textColor,
          width: props.width, 
          height: props.height,
          fontSize: props.fontSize,
          fontWeight: props.fontWeight,
          //*borderRadius: props.buttonShape === "rounded" ? "15%" : "50"/*
        }}
      >
        {props.value}
      </button>
    </div>
  );
}

export default BlueWiteButton; 