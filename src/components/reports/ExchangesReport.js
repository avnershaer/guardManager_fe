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
            .then(result => {
                setLoading(false);
                setApiResponse(result.data); 
                console.log('REPORT apiResponse:', result.data);       
            })
            .catch(err => {
                setLoading(false);
                if (err.response && err.response.data && err.response.data.error) {
                    setError(err.response.data.error);
                } else {
                    setError('An unexpected error occurred');
                }
                console.log('error', err.response.data.error);
            });
    }, [reportPath]);

    if (loading){return <Loading/>};

    if (error) {
        return <div><Error1 goBack={true} error={error}/></div>;
    };

    return (
        <ExReportTable apiResponse={apiResponse}/>
    );
};

export default ExchangesReport;
