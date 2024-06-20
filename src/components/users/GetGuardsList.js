import React, { useState, useEffect } from "react";
import axios from "../AxiosPath";
import Loading from "../buttons/Loading";
import BlueWiteButton from "../buttons/BlueWiteButton";
import {useNavigate} from "react-router-dom";
import GuardsTable from "./GuardsTable";


function GetGuardsList(path){
    const [guards, setGuards] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        setLoading(true);
        axios.get('/fguards_list')
            .then(result => {
                console.log("fguards data:", result.data.details);
                setGuards(result.data.details);
                setLoading(false);
            })
            .catch(err => {
                console.log('error:', err);
                setError(err);
            });
    }, [path]);

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
            <BlueWiteButton
                width="60px"
                fontSize="12px"
                height="20px"
                value="חזור"
                fontWeight="normal"
                onClick={() => navigate('/UsersPanel')} 
            />
            <div style={{ textAlign: 'center', marginTop:"-10px"}}>
                <h5>רשימת שומרים</h5>
                <div className="guards-list">
                    <div className="reports-table">
                    <GuardsTable guards={guards} type='fg'/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GetGuardsList;