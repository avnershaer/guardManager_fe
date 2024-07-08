import axios from "axios";
import React, {useState, useEffect} from "react";
import BlueWiteButton from "../buttons/BlueWiteButton";
import GuardListTable from "../guarding/GuardListTable";
import Error1 from "../errorComps/Error1";
import Loading from "../buttons/Loading";



function ChooseList(props){

    const [listId, setListId] = useState('');
    const [glists, setGlists] = useState([]);
    const [error, setError] = useState('');
    const [apiResponse, setApiResponse] = useState('');
    const [displayTable, setDisplayTable] = useState(false);
    const [displayChoice, setDisplayListChoice] = useState(true);
    const [responseErrDetails, setResponnseErrDetails] = useState(false);
    const [loading, setLoading] = useState(false);


    const HandleOnChange = (event) => {
        const {name, value} = event.target;
        if (name === 'listId') {
            setListId(value);
        }
    }

    const HandleOnClick = () => {
        if (listId) {
            setLoading(true);
            axios.get(`/get_glist_by_id/${listId}`)
                .then(result => {
                    setApiResponse(result.data); 
                    console.log('APIRESPONSE:', result.data) 
                    setDisplayTable(true);
                    props.DisplayBackButtonCallback();
                    setDisplayListChoice(false);
                    props.hideListByDate();
                    props.hideListBetweenDates();
                    props.hidePosDateListCallback();
                    props.hideDisplayFutuLists();
                    setLoading(false);

                })
                .catch(err => {
                    setLoading(false);
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
        setDisplayListChoice(inputState);
    };

    useEffect(() => {
        setLoading(true);
        axios.get("/guarding_list")
        .then(result =>{
          setGlists(result.data.Details);
          console.log('GLIST:', result.data.Details)
          setLoading(false);
        })
        .catch(err =>{
          console.log('error:', err)
          setError(err)  
          setLoading(false);
        })
    },[])

    useEffect(() => {
      if (error) {
          setDisplayListChoice(false);
          setListId('')
      }
    }, [error]);

    if (loading){return <Loading/>};

    return(
        
        <div tyle={{ direction: 'rtl', display:"flex", alignItems:"center", justifyContent: 'center'}}>
            {displayChoice && (
            <div className="display_choice_container">
                <label className="display_choices_input-label">
                    <div className="display_choice_inline">
                    בחר רשימה להצגה&nbsp;
                    <select
                      className="custom-input"
                      value={listId}
                      name="listId"
                      onChange={HandleOnChange}
                    >
                      <option value="">בחר</option>
                      {glists.length > 0 && glists.map((glist) => (
                            <option key={glist.guarding_list_id} value={glist.guarding_list_id}>
                                {glist.glist_date}&nbsp;{glist.glist_day}&nbsp;-{glist.glist_position_id.position_name}-
                            </option>
                         ))}
                    </select>&nbsp;&nbsp;
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
            {apiResponse && (
            <div >
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
            <Error1 error={error.response.data.details} displayInput={displayInput}
            />
            </div>
            )}
        </div>
    );
};

export default ChooseList;