import axios from "axios";
import React, {useState, useEffect} from "react";
import ExReportTable from "./ExReportTable";
import Loading from "../buttons/Loading";
import Error1 from "../errorComps/Error1";


function ExchangesReport({reportPath}){

    const [apiResponse, setApiResponse] = useState({ details: [] });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        setApiResponse('');
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

    if (loading){return <Loading/>};

    if (error) {
        return <div><Error1 goBack={true} error={error.message}/></div>;
    };

    return (
        <ExReportTable apiResponse={apiResponse}/>
    );
};

export default ExchangesReport;
