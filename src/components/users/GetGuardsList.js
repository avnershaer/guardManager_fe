import React, { useState, useEffect } from "react";
import axios from "../AxiosPath";
import Loading from "../buttons/Loading";
import GuardsTable from "./GuardsTable";
import PguardsTable from "./PguardsTable";


function GetGuardsList(props){
    const [guards, setGuards] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    

    useEffect(() => {
        setLoading(true);
        const url = props.handleFguardPaidExchangesCallBack ? '/fguards_list' : '/pguards_list';
        axios.get(url)
            .then(result => {
                console.log("guards data:", result.data.details);
                setGuards(result.data.details);
                setLoading(false);
            })
            .catch(err => {
                console.log('error:', err);
                setError(err);
                setLoading(false);
            });
    }, [props.handleFguardPaidExchangesCallBack]);



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
                        {props.handleFguardPaidExchangesCallBack && (
                        <GuardsTable 
                        handleFguardPaidExchangesCallBack={props.handleFguardPaidExchangesCallBack}
                        handleShiftsForGuardCallBack={props.handleShiftsForGuardCallBack}
                        guardDataCallBack={props.guardDataCallBack}
                        displayFguardFormCallBack={props.displayFguardFormCallBack}
                        hideGuardListCallBack={props.hideGuardListCallBack}
                        handleFguardExchangesCallBack={props.handleFguardExchangesCallBack}
                        handleFguardDidExchangesCallBack={props.handleFguardDidExchangesCallBack}
                        guards={guards} 
                        type='fg'
                        />
                        )}
                    </div>
                    <div>
                        {!props.handleFguardPaidExchangesCallBack && (
                        <PguardsTable
                        displayFguardFormCallBack={props.displayFguardFormCallBack}
                        displayPguardFormCallBack={props.displayPguardFormCallBack}
                        guardDataCallBack={props.guardDataCallBack}
                        hideGuardListCallBack={props.hideGuardListCallBack}
                        guards={guards} 
                        type='pg'/>
                        )}
                    </div>
                        
                </div>
        </div>
    );
};

export default GetGuardsList;