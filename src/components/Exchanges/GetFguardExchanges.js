import React, { useState, useEffect } from "react";
import axios from "../AxiosPath";
import Loading from "../buttons/Loading";
import GuardsTable from "./GuardsTable";


function GetFguardExchanges(props){
    const [fguard, setFguard] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    

    useEffect(() => {
        setLoading(true);
        axios.get(`get_exchanges_for_fguard/${props.fguard_id}`)
            .then(result => {
                console.log("fguards data:", result.data.details);
                setFguard(result.data.details);
                setLoading(false);
            })
            .catch(err => {
                console.log('error:', err);
                setError(err);
                setLoading(false);
            });
    }, [props.fguard_id]);



    if (error) {
        return (
            <div className="error">
                Error: {error.message}
            </div>
        );
    };

    if (loading) {
        return <div><Loading/></div>
    };

    return (
        <div className="families-list-container">
                <div className="guards-list">
                    <div>
                   
                    <h5 style={{color:"#183670"}}>רשימת שומרים</h5>
                    <GuardsTable 
                    guardDataCallBack={props.guardDataCallBack}
                    displayFguardFormCallBack={props.displayFguardFormCallBack}
                    hideGuardListCallBack={props.hideGuardListCallBack}
                    guards={fguard} 
                    type='fg'
                    />
                </div>
            </div>
        </div>
    );
};

export default GetFguardExchanges;