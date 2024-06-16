import axios from "axios";
import React, {useState, useEffect, useRef} from "react";
import { useLocation } from "react-router-dom";
import Error1 from "../errorComps/Error1";
import BlueWiteButton from "../buttons/BlueWiteButton";
import {useNavigate} from "react-router-dom";


function ResponseApiCrossExchangeMessage(){

    const [apiResponse, setApiResponse] = useState('');
    const [error, setError] = useState('');
    const location = useLocation();
    const {selectedRow, substituteGuard} = location.state; 
    const navigateTo = 'ExchangesPanel';
    const navigate = useNavigate();
    const requestSent = useRef(false);

    useEffect(() => { 
        if (!requestSent.current) {
            requestSent.current = true;
        axios.put('/cross_exchange_guards', {selectedRow, substituteGuard})
        .then(result =>{
            setApiResponse(result.data);
            setError('');
            console.log('API RESPONSE:', result.data);
        })
        .catch(err =>{
            setError(err.message);
            console.log('ERROR:', err);
        });
    }
    }, [selectedRow, substituteGuard]);

    function handleonClick(){
        navigate('/ExchangesPanel');
    };

    if (error){
        return (
            <div>
                <Error1 error={error} navigateTo={navigateTo}/>
            </div>
        );
    };

    if (!apiResponse) {
        return  (
            <div className="loading-container">
            <div className="loading">
                אנא המתן
                <div className="marquee">
                    <span>&lt;&lt;</span>
                </div>
            </div>
        </div>
        )
    };  

    const first = apiResponse?.Details?.first;
    const second = apiResponse?.Details?.second;

    return (
        <div style={{ fontSize: "12px", display: 'flex', justifyContent: 'center', paddingRight: '20px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div className="dasa" style={{ width: "450px", backgroundColor: "#183670", margin: "20px", padding: "5px", borderRadius: "35px", direction: "rtl" }}>
                    <div style={{ direction: "rtl" }}>
                        <span style={{ color: "white" }}>ההחלפה בוצעה בהצלחה.<br /></span>
                        <span style={{ color: "rgb(97, 229, 238)" }}>{first?.origin_guard_id?.family_id?.family_name}&nbsp;{first?.origin_guard_id?.fguard_name}</span>
                        <span style={{ color: "white" }}>&nbsp;הוחלף עם&nbsp;</span>
                        <span style={{ color: "yellow" }}>{first?.substitute_guard_id?.family_id?.family_name}&nbsp;{first?.substitute_guard_id?.fguard_name}</span>
                        <br /><span style={{ color: "white" }}>&nbsp;ב&nbsp;</span>
                        <span style={{ color: "#46fa1e" }}>{first?.exchange_day}</span>
                        <span style={{ color: "white" }}>&nbsp;ה-&nbsp;</span>
                        <span style={{ color: "#46fa1e" }}>{first?.exchange_date}</span>
                        <span style={{ color: "white" }}>&nbsp;בשעה&nbsp;</span>
                        <span style={{ color: "#46fa1e" }}>{first?.exchange_hour}</span>
                    </div>
                </div>
                <div className="dasa" style={{ width: "450px", backgroundColor: "#183670", margin: "20px", padding: "5px", borderRadius: "35px", direction: "rtl" }}>
                    <div style={{ direction: "rtl" }}>
                        <span style={{ color: "#0dff00" }}>ההחלפה בוצעה בהצלחה.<br /></span>
                        <span style={{ color: "rgb(97, 229, 238)" }}>{second?.origin_guard_id?.family_id?.family_name}&nbsp;{second?.origin_guard_id?.fguard_name}</span>
                        <span style={{ color: "white" }}>&nbsp;הוחלף עם&nbsp;</span>
                        <span style={{ color: "yellow" }}>{second?.substitute_guard_id?.family_id?.family_name}&nbsp;{second?.substitute_guard_id?.fguard_name}</span>
                        <br /><span style={{ color: "white" }}>&nbsp;ב&nbsp;</span>
                        <span style={{ color: "#46fa1e" }}>{second?.exchange_day}</span>
                        <span style={{ color: "white" }}>&nbsp;ה-&nbsp;</span>
                        <span style={{ color: "#46fa1e" }}>{second?.exchange_date}</span>
                        <span style={{ color: "white" }}>&nbsp;בשעה&nbsp;</span>
                        <span style={{ color: "#46fa1e" }}>{second?.exchange_hour}</span>
                    </div>
                </div>
                <div style={{ marginTop: "-10px" }}>
                    <BlueWiteButton
                        width="80px"
                        fontSize="12px"
                        height="20px"
                        value="חזור"
                        onClick={handleonClick}
                    />
                </div>
            </div>
        </div>
    );
};
    
export default ResponseApiCrossExchangeMessage;