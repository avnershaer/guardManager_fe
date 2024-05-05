import React, { useState } from "react";

function Button1(props) {
  const [color, setColor] = useState(props.color);
  const [borderColor, setBorderColor] = useState(props.borderColor);
  const [textColor, setTextColor] = useState(props.textColor);


  function handleMouseOver() {
    setColor(props.onMouseOverColor);
    setBorderColor(props.mouseborderColor);
    setTextColor(props.onMouseOverTextColor);

  
  }

  function handleMouseOut() {
    setColor(props.onMouseOutColor);
    setBorderColor(props.outBorderColor);
    setTextColor(props.onMouseOutTextColor);
    
  }

  function handleButtonClick() {
    setColor(props.bottunClickColor);
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
          fontWeight: props.fontWeight
          //*borderRadius: props.buttonShape === "rounded" ? "15%" : "50"/*
        }}
      >
        {props.value}
      </button>
    </div>
  );
}

export default Button1; 