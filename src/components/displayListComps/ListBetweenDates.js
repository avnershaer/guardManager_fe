import React, {useState,useEffect} from "react";
import BlueWiteButton from "../buttons/BlueWiteButton";
import axios from "axios";
import Error1 from "../errorComps/Error1";
import DisplaySetGuardingList from "../guarding/DisplaySetGuardingList";

function ListBetweenDates() {

    const [date1, setDate1] = useState('');
    const [date2, setDate2] = useState('');
    const [apiResponse, setApiResponse] = useState('');
    const [error, setError] = useState('');
    const [displayChoice, setDisplayListChoice] = useState(true);
    const [displayError, setDisplayError] = useState(false);


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
            axios.post('/get_lists_by_dates', { date1, date2 })
                .then(result => {
                    console.log('LISTS BY DATES:', result.data);
                    setApiResponse(result.data);   
                })
                .catch(err => {
                    console.log('ERROR:', err);
                    setError(err);
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
        }
    }, [error]);

    return (
        <div>
        {displayChoice && (
        <div style={{backgroundColor:"#e8e8e8f7", height:"30px", width:"600px", marginBottom:"5px"}}>
            <label className="display_choices_input-label">
                <div style={{display: "inline-flex" , marginTop:"6px", marginRight:"10px" }}>
                    הצג רשימות שמירה מתאריך&nbsp;&nbsp;
                    <input 
                    type="date"
                    name="date1"
                    value={date1}
                    onChange={HandleOnChange}
                    /> &nbsp; &nbsp;
                    עד לתאריך&nbsp;&nbsp;
                    <input 
                      type="date"
                      name="date2"
                      value={date2}
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
        {!displayChoice && error && (
            <div><Error1 error={error.message} displayInput={displayInput}/></div> 
        )}
      </div>
  ) 
};

export default ListBetweenDates;
