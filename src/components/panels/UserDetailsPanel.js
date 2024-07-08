import React from "react";
import {useNavigate} from "react-router-dom";
import BlueWiteButton from "../buttons/BlueWiteButton";

function UserDetailsPanel(){

    const navigate = useNavigate();

    return (
        <div className="bottuns-panel">
            <div className="buttons-container">
                <BlueWiteButton
                    width="80px"
                    fontSize="12px"
                    height="20px"
                    value="חזרה"
                    fontWeight="normal"
                    onClick={() => navigate('/panel1')}
                />
                <BlueWiteButton
                    width="130px"
                    fontSize="12px"
                    height="20px"
                    value="ערוך את הפרטים שלי"
                    fontWeight="normal"
                    onClick={() => navigate('/panel1')}
                />
                <BlueWiteButton
                    width="130px"
                    fontSize="12px"
                    height="20px"
                    value="הצג את השמירות שלי"
                    fontWeight="normal"
                    onClick={() => navigate('/panel1')}
                />
                <BlueWiteButton
                    width="130px"
                    fontSize="12px"
                    height="20px"
                    value="שמירות שהוחלפתי"
                    fontWeight="normal"
                    onClick={() => navigate('/panel1')}
                />
                <BlueWiteButton
                    width="130px"
                    fontSize="12px"
                    height="20px"
                    value="שמירות שהחלפתי"
                    fontWeight="normal"
                    onClick={() => navigate('/panel1')}
                />
                <BlueWiteButton
                    width="130px"
                    fontSize="12px"
                    height="20px"
                    value="החלפות בתשלום"
                    fontWeight="normal"
                    onClick={() => navigate('/panel1')}
                />
            </div>
        </div>
    );
};

export default UserDetailsPanel;