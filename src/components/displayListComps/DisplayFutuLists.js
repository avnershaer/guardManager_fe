import React, {useState, useEffect} from "react";
import BlueWiteButton from "../buttons/BlueWiteButton";
import axios from "axios";
import GuardListTable from "../guarding/GuardListTable";
import Error1 from "../errorComps/Error1";


function DisplayFutuLists(props){

    const [apiResponse, setApiResponse] = useState('');
    const [displayTable, setDisplayTable] = useState(false);
    const [displayListChoice, setDisplayListChoice] = useState(true);
    const [error, setError] = useState('');
    const [responseErrDetails, setResponnseErrDetails] = useState(false);
    

    const HandleOnClick = () => {
        axios.get('/future_gurading_lists')
                .then(result => {
                    setApiResponse(result.data);  
                    setDisplayTable(true);
                    setDisplayListChoice(false);
                    props.hideListByDate();
                    props.hideListBetweenDates();
                    props.hideChooseListCallback();
                    props.hidePosDateListCallback();
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
    
    useEffect(() => {
        if (error) {
            setDisplayListChoice(false);
        }
      }, [error]);

    function displayInput(errState ,inputState){
      //setDisplayError(errState);
      setDisplayListChoice(inputState);
    };



    return (
        <div>
            {displayListChoice && (
            <div className="display_choice_container">
                <label className="display_choices_input-label">
                    <div className="display_choice_inline">
                        הצג את רשימות השמירה העתידיות&nbsp; &nbsp;
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
            <div><GuardListTable apiResponse={apiResponse} displayGuardingList={true}/></div>
        )}
        {!displayListChoice && error && !responseErrDetails && (
          <div><Error1 error={error.message} displayInput={displayInput} /> </div>
        )}
        {!displayListChoice && error && responseErrDetails && (
          <div><Error1 error={error.response.data.details} displayInput={displayInput}/>
          </div>
        )}
        </div>
    );


};

export default DisplayFutuLists;