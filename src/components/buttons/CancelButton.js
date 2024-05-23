import React, { useState } from "react";

function CancelButton(props) {
  const [color, setColor] = useState('red');
  const [borderColor, setBorderColor] = useState('white');
  const [textColor, setTextColor] = useState('white');


  function handleMouseOver() {
    setColor('pink');
    setBorderColor('red');
    setTextColor('red');
  }

  function handleMouseOut() {
    setColor('red');
    setBorderColor('white');
    setTextColor('white');
  }

  function handleButtonClick() {
    setColor('pink');
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

export default CancelButton; 