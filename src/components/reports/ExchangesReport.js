import axios from "axios";
import React, {useState, useEffect} from "react";
import ExReportTable from "./ExReportTable";
import Loading from "../buttons/Loading";


function ExchangesReport({reportPath}){

    const [apiResponse, setApiResponse] = useState({ details: [] });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        setLoading(true);
        axios.get(reportPath)
        .then (resullt => {
            setLoading(false);
            setApiResponse(resullt.data); 
            console.log('REPORT apiResponse:', resullt.data);       
        })
        .catch(err => {
            setError(err);
            setLoading(false);
        });
    },[reportPath]);


    if (loading){
        return <Loading/>
    };

    if (error) {
        return <div className="error">Error: {error.message}</div>;
    };

    return (
        <ExReportTable apiResponse={apiResponse}/>
    );
};

export default ExchangesReport;
