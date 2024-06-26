import axios from "axios";
import React, {useState, useEffect} from "react";
import ExReportTable from "./ExReportTable";
import Loading from "../buttons/Loading";


function AllExchangesReport(){

    const [apiResponse, setApiResponse] = useState({ details: [] });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        setLoading(true);
        axios.get('/get_all_exchanges')
        .then (resullt => {
            setLoading(false);
            setApiResponse(resullt.data); 
            console.log('REPORT apiResponse:', resullt.data);       
        })
        .catch(err => {
            setError(err);
            setLoading(false);
        });
    },[]);


    if (loading){
        return <Loading/>
    };

    if (error) {
        return <div className="error">Error: {error.message}</div>;
    };

    return (
        <ExReportTable apiResponse={apiResponse} type='all'/>
    );
};

export default AllExchangesReport;
