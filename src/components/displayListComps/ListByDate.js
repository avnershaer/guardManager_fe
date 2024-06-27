import React, {useState, useEffect} from "react";
import BlueWiteButton from "../buttons/BlueWiteButton";
import axios from "axios";
import GuardListTable from "../guarding/GuardListTable";
import Error1 from "../errorComps/Error1";


function ListByDate (props){

    const [listDate, setListDate] = useState("");
    const [apiResponse, setApiResponse] = useState('');
    const [displayTables, setDisplayTables] = useState(false)
    const [displayChoice, setDisplayListChoice] = useState(true);
    const [error, setError] = useState('');
    const [responseErrDetails, setResponnseErrDetails] = useState(false)
    const [displayError, setDisplayError] = useState(false);


    const HandleOnChange = (event) => {
        const {name, value} = event.target;
        if (name === 'listDate') {
          setListDate(value);
          console.log('listDate:', value);
          return value; 
        }
    }

    const HandleOnClick = () => {
        if (listDate) {
            axios.get(`/get_glist_by_date/${listDate}`)
                .then(result => {
                    console.log('LIST BY DATE:', result.data);
                    setApiResponse(result.data);  
                    setDisplayTables(true);
                    setDisplayListChoice(false);
                    props.hideListBetweenDates();
                    props.hidePosDateListCallback();
                    props.hideChooseListCallback();
                    props.hideDisplayFutuLists();
                    setError('');
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
        if (error) {
            setDisplayError(true);
            setDisplayListChoice(false);
            setListDate('')
        }
    }, [error]);

    return (
        <div>
          {displayChoice && (
            <div className="display_choice_container">
              <label className="display_choices_input-label">
                <div className="display_choice_inline">
                  הצג רשימות שמירה לתאריך&nbsp;   
                  <input 
                    className="custom-input"
                    type="date"
                    name="listDate"
                    value={listDate}
                    onChange={HandleOnChange}

                  /> &nbsp; &nbsp;
                    <BlueWiteButton
                    width="50px"
                    fontSize="10px"
                    height="15px"
                    value="הצג"
                    onClick={HandleOnClick}
                    fontWeight="normal"
                  />
                </div>
              </label>
            </div>
           )}
          {displayTables && (
          <div><GuardListTable apiResponse={apiResponse} displayGuardingList={true}/></div>
      )}
      {displayError && error && !responseErrDetails && ( // use displayError instead of !displayChoice
        <div><Error1 error={error.message} displayInput={displayInput}/></div>
      )}
      {displayError && error && responseErrDetails && ( // use displayError instead of !displayChoice
        <div><Error1 error={error.response.data.details} displayInput={displayInput}/></div>
      )}
      </div>
    );
};

export default ListByDate;