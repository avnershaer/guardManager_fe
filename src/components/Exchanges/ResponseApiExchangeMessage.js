import axios from "axios";
import React, {useState, useEffect} from "react";
import { useLocation } from "react-router-dom";
import Error1 from "../errorComps/Error1";



function ResponseApiExchangeMessage(){

    const [apiResponse, setApiResponse] = useState('');
    const [error, setError] = useState('');
    const location = useLocation();
    const {selectedRow, substituteGuard} = location.state; 
    const navigateTo = 'ExchangesPanel';

    useEffect(() => { 
        axios.put('/exchange_guard', {selectedRow, substituteGuard})
        .then(result =>{
            setApiResponse(result.data);
            setError('');
        })
        .catch(err =>{
            setError(err.message);
        });
    }, [selectedRow, substituteGuard]);

    if (error){
        return (
            <div>
                <Error1 error={error} navigateTo={navigateTo}/>
            </div>
        )
    };



    return (
        <div>
        <div>responseApiExchangeMessage</div>
        <div>{selectedRow.posName}</div>
        <div>{substituteGuard.family_name}</div>
        </div>
    )
};
    
export default ResponseApiExchangeMessage;