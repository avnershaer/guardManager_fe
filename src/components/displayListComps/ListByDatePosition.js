import React, {useState, useEffect} from "react";
import axios from "axios";
import BlueWiteButton from "../buttons/BlueWiteButton";
import GuardListTable from "../guarding/GuardListTable";
import Error1 from "../errorComps/Error1";

function ListByDatePosition(props){

    const [positions, setPositions] = useState('');
    const [error, setError] = useState('');
    const [listDate, setListDate] = useState('');
    const [positionId, setPositionId] = useState('');
    const [apiResponse, setApiResponse] = useState('');
    const [displayTable, setDisplayTable] = useState(false)
    const [displayChoice, setDisplayListChoice] = useState(true);
    const [responseErrDetails, setResponnseErrDetails] = useState(false)
    const [displayError, setDisplayError] = useState(false);


    const HandleOnChange = (event) => {
        const {name, value} = event.target;
        if (name === 'listDate') {
          setListDate(value);
        }
    }
    
    const HandlePosOnChange = (event) => {
        const {name, value} = event.target;
        if (name === 'position') {
          setPositionId(value);
        }
    }

    const HandleOnClick = () => {
        if (listDate && positionId) {
            axios.get(`/get_list_by_date_position/${listDate}/${positionId}`)
                .then(result => {
                    setApiResponse(result.data);  
                    setDisplayTable(true);
                    setDisplayListChoice(false);
                    props.hideListByDate();
                    props.hideListBetweenDates();
                })
                .catch(err => {
                    console.log('ERROR:', err);
                    setError(err);
                    if (err.response && err.response.data && err.response.data.status === 'none') {
                        setResponnseErrDetails(true);
                    } else {
                        setResponnseErrDetails(false);
                    }
                });
        }
    };
    
    function displayInput(errState ,inputState){
        setDisplayError(errState);
        setDisplayListChoice(inputState);
    };
    
    useEffect(() => {
        axios.get("/positions_list")
        .then(result =>{
          console.log('positions_data:', result.data);
          setPositions(result.data.details);
        })
        .catch(err =>{
          console.log('error:', err)
          setError(err)  
        })
      },[])

    useEffect(() => {
      if (error) {
          setDisplayListChoice(false);
          setListDate('')
          setPositionId('')
      }
    }, [error]);


    return(
        <div>
            {displayChoice && (
            <div style={{backgroundColor:"#e8e8e8f7", height:"30px", marginBottom:"6px", width:"600px"}}>
                <label className="display_choices_input-label">
                    <div style={{display: "inline-flex", marginTop:"6px", marginRight:"10px" }}>
                        הצג רשימה על פי תאריך&nbsp;&nbsp;
                        <input 
                          type="date"
                          name="listDate"
                          value={listDate}
                          onChange={HandleOnChange}
                        /> &nbsp;&nbsp;&nbsp;ועמדה&nbsp;&nbsp;
                        <select
                            name="position"
                            value={positionId}
                            onChange={HandlePosOnChange}
                            >
                            <option value="">בחר עמדה </option>
                            {positions.length > 0 && positions.map((position) => (
                            <option key={position.position_id} value={position.position_id}>
                                {position.position_id}&nbsp;{position.position_name}
                            </option>
                         ))}
                        </select>
                        &nbsp; &nbsp;
                        <BlueWiteButton
                        width="50px"
                        fontSize="10px"
                        height="20px"
                        value="הצג"
                        onClick={HandleOnClick}
                        fontWeight="normal"
                        />
                    </div>
                </label>
            </div>
            )}
            {displayTable && (
            <div>
                <GuardListTable apiResponse={apiResponse} displayGuardingList={true}/>
            </div>
        )}
        {!displayChoice && error && !responseErrDetails && (
          <div>
            <Error1 error={error.message} displayInput={displayInput} />
          </div>
        )}
        {!displayChoice && error && responseErrDetails && (
          <div>
            <Error1
            error={error.response.data.details}
            displayInput={displayInput}
            />
          </div>
        )}
        </div>
    );
};

export default ListByDatePosition;