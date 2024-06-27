import React, {useState,useEffect} from "react";
import BlueWiteButton from "../buttons/BlueWiteButton";
import axios from "axios";
import Error1 from "../errorComps/Error1";
import GuardListTable from "../guarding/GuardListTable";

function ListBetweenDates(props) {

    const [date1, setDate1] = useState('');
    const [date2, setDate2] = useState('');
    const [apiResponse, setApiResponse] = useState('');
    const [error, setError] = useState('');
    const [displayChoice, setDisplayListChoice] = useState(true);
    const [displayError, setDisplayError] = useState(false);
    const [responseErrDetails, setResponnseErrDetails] = useState(false)
    const [displayTables, setDisplayTables] = useState(false)

    const HandleOnChange = (event) => {
        const {name, value} = event.target;
        if (name === 'date1') {
            setDate1(value);
            console.log('DATE!:', value);
        }else if (name === 'date2') {
            setDate2(value);
            console.log('DATE2:', value);
        };
    };

    const HandleOnClick = () => {
        if (date1 && date2) {
            axios.get(`/get_lists_by_dates/${date1}/${date2}`)
                .then(result => {
                    console.log('LISTS BY DATES:', result.data);
                    setApiResponse(result.data);  
                    setDisplayTables(true);
                    setDisplayListChoice(false);
                    props.hidePosDateListCallback();
                    props.hideListByDate();
                    props.hideChooseListCallback();
                    props.hideDisplayFutuLists();
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
            setDate1('')
            setDate2('')
        }
    }, [error]);

    return (
        <div>
        {displayChoice && (
        <div className="display_choice_container">
            <label>
                <div className="display_choice_inline">
                    הצג רשימות שמירה מתאריך&nbsp;&nbsp;
                    <input 
                    className="custom-input"
                    type="date"
                    name="date1"
                    value={date1}
                    onChange={HandleOnChange}
                    /> &nbsp; &nbsp;
                    עד לתאריך&nbsp;&nbsp;
                    <input 
                      className="custom-input"
                      type="date"
                      name="date2"
                      value={date2}
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
  ) 
};

export default ListBetweenDates;
