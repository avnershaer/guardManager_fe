import React, {useState, useEffect} from "react";


function OkExchangeMessage(props){

    return (

        <div>
            <div style={{
                    width: "500px",
                    height:"150px",
                    padding: "5px",
                    borderRadius: "35px",
                    border: "1px solid black",
                    backgroundColor: "#e8e8e8f7",
                    color: "#183670",
                    fontSize: "14px",
                    fontWeight: "bold",
                  }}>
                    !!&nbsp; האם להחליף ברשימת השמירה ל<span>{props.selectedRow.glistDay}</span>&nbsp;
                את השומר ==== בשומר ====  ? <br/>
            </div>
        </div>
    );
};

export default OkExchangeMessage;
