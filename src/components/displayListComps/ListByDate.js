import React, {useState, useEffect} from "react";
import BlueWiteButton from "../buttons/BlueWiteButton";
import axios from "axios";
import GuardListTable from "../guarding/GuardListTable";
import Error1 from "../errorComps/Error1";


function ListByDate ({hideListBetweenDates}){

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
                    hideListBetweenDates();
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
        <div style={{backgroundColor:"#e8e8e8f7", height:"30px", marginBottom:"6px", width:"600px"}}>
        <label className="display_choices_input-label">
          <div style={{display: "inline-flex", marginTop:"6px", marginRight:"10px" }}>
        הצג רשימות שמירה לתאריך&nbsp;
        <input 
          type="date"
          name="listDate"
          value={listDate}
          onChange={HandleOnChange}
         
        /> &nbsp; &nbsp;
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
      {displayTables && (
          <div>
              <GuardListTable apiResponse={apiResponse} displayGuardingList={true} />
        </div>
      )}
      {displayError && error && !responseErrDetails && (  // <-- Marked change: use displayError instead of !displayChoice
        <div>
          <Error1 error={error.message} displayInput={displayInput} />
        </div>
      )}
      {displayError && error && responseErrDetails && (  // <-- Marked change: use displayError instead of !displayChoice
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

export default ListByDate;