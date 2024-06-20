import React, {useState, useEffect} from "react";
import BlueWiteButton from "../buttons/BlueWiteButton";
import axios from "axios";
import Loading from "../buttons/Loading";

function CreatePositionForm({apiResponseCallBack}){

    const [apiResponse, setApiResponse] = useState('');
    const [positionName, setPositionName] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const HandlePositionClick = () => {
        setLoading(true);
        axios.post('/create_position',{positionName:positionName})
            .then(result => {
                setLoading(false);
                setApiResponse(result.data.details.position_name);
                console.log('create_position apiResponse:', result.data);
                apiResponseCallBack(apiResponse);
            })
            .catch(err => {
                setError(err);
                setLoading(false);
            });
    };

    const handleInputChange = (e) => {
        setPositionName(e.target.value);
    };

    if (loading){
        return <Loading/>
    };

    if (error) {
        return <div className="error">Error: {error.message}</div>;
    };
    return (
        <div>
            <div>
            <input
            style={{ width: '245px', backgroundColor:"#dce0e8", borderRadius:"10px", direction:"rtl" }}
            type="text"
            name="positionName"
            value={positionName}
            onChange={handleInputChange}
            >
            </input>
            </div>
            <div>
            <BlueWiteButton 
            width="250px" 
            fontSize="12px" 
            height="20px" 
            value="צור עמדה" 
            fontWeight="normal"
            onClick={HandlePositionClick}
            /> 
            </div>
        </div>
    )
};

export default CreatePositionForm;