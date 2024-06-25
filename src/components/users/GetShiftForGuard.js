import axios from "axios";
import React, {useState, useEffect} from "react";
import Loading from "../buttons/Loading";
import ShiftsDetailsTable from "../displayListComps/ShiftsDetailsTable";

function GetShiftForGuard({path}){

    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [shifts, setShifts] = useState('');


    useEffect(() => {
        setLoading(true);
        axios.get(path)
            .then(result => {
                console.log("shifts data:", result.data);
                setShifts(result.data);
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

    return(
        <div>
                <ShiftsDetailsTable shifts={shifts}/>
        </div>
    );
};

export default GetShiftForGuard;
