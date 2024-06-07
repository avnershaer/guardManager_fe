import React, { useState, useEffect } from "react";
import axios from "axios";
import GuardListTable from "../guarding/GuardListTable";
import Error1 from "../errorComps/Error1";
import SecondGuardListTable from "../Exchanges/SecondGuardListTable";
import FirstGuardListTable from "./FirstGuardListTable";
import ChooseDatePosition from "./ChooseDatePosition";

function ListByDatePosition(props) {
    const [error, setError] = useState('');
    const [listDate, setListDate] = useState('');
    const [positionId, setPositionId] = useState('');
    const [apiResponse, setApiResponse] = useState('');
    const [displayTable, setDisplayTable] = useState(false);
    const [displayListChoice, setDisplayListChoice] = useState(true);
    const [responseErrDetails, setResponseErrDetails] = useState(false);
    const [firstTable, setFirstTable] = useState(false);
    const [secondTable, setSecondTable] = useState(false);

    function listDateCallBack(CallBackListDate) {
        setListDate(CallBackListDate);
    }

    function positionIdCallBack(CallBackPositionId) {
        setPositionId(CallBackPositionId);
    }

    const handleSubmit = (listDate, positionId) => {
        if (listDate && positionId) {
            axios.get(`/get_list_by_date_position/${listDate}/${positionId}`)
                .then(result => {
                    setApiResponse(result.data);
                    setDisplayTable(true);
                    setDisplayListChoice(false);
                    if (props.hideListByDate) props.hideListByDate();
                    if (props.hideListBetweenDates) props.hideListBetweenDates();
                    if (props.hideChooseListCallback) props.hideChooseListCallback();
                    if (props.hideDisplayFutuLists) props.hideDisplayFutuLists();
                    if (props.typeOf === 'secCross') {
                        setSecondTable(true);
                        setDisplayTable(false);
                        props.displaySecChooseListMsgCallBack();
                    }
                    if (props.typeOf === 'cross') {
                        setFirstTable(true);
                        setDisplayTable(false);
                        props.displayGrdDateMsgCallBack();
                    }
                    if (props.typeOf === 'paid') {
                        setFirstTable(false);
                        setDisplayTable(true);
                        //props.displayGrdDateMsgCallBack();
                    }
                })
                .catch(err => {
                    console.log('ERROR:', err);
                    setError(err);
                    if (err.response && err.response.data && err.response.data.status === 'none') {
                        setResponseErrDetails(true);
                    } else {
                        setResponseErrDetails(false);
                    }
                });
        }
    };

    function displayInput(errState, inputState) {
        setDisplayListChoice(inputState);
    }

    useEffect(() => {
        if (error) {
            setDisplayListChoice(false);
            setListDate('');
            setPositionId('');
        }
    }, [error]);

    return (
        <div>
            {displayListChoice && (
                <div>
                    <ChooseDatePosition
                        listDateCallBack={listDateCallBack}
                        positionIdCallBack={positionIdCallBack}
                        handleSubmit={handleSubmit}
                    />
                </div>
            )}
            {firstTable && (
                <div>
                    <FirstGuardListTable
                        typeOf='cross'
                        apiResponse={apiResponse}
                    />
                </div>
            )}
            {secondTable && (
                <div>
                    <SecondGuardListTable
                        selectedRow1={props.selectedRow}
                        typeOf={props.typeOf}
                        apiResponse={apiResponse}
                        displaySecChooseListMsgCallBack={props.displaySecChooseListMsgCallBack}
                        displaySecChooseGuardMsgCallBack={props.displaySecChooseGuardMsgCallBack}
                    />
                </div>
            )}
            {displayTable && (
                <div>
                    <GuardListTable
                        selectedRow1={props.selectedRow}
                        typeOf={props.typeOf}
                        displayCrossExchangesCallBack={props.displayCrossExchangesCallBack}
                        apiResponse={apiResponse}
                        displayGuardingList={true}
                    />
                </div>
            )}
            {!displayListChoice && error && !responseErrDetails && (
                <div>
                    <Error1 error={error.message} displayInput={displayInput} />
                </div>
            )}
            {!displayListChoice && error && responseErrDetails && (
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