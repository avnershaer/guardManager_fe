import React, {useState, useEffect} from "react";
import baseURL from "../../config";
import BlueWiteButton from "../buttons/BlueWiteButton";
import DisplayExchangeGuardList from "../Exchanges/DisplayExchangeGuardList";
import ListByDatePosition from "../displayListComps/ListByDatePosition";
import OkExchangeMessage from "../Exchanges/OkExchangeMessage";
import SecondGuardTableDisplay from "../Exchanges/SecondGuardTableDisplay";
import OkCrossExchangeMessage from "../Exchanges/OkCrossExchangeMessage";

function ListTable( {apiResponse, selectedRow1, typeOf, displayRegularExchangesCallBack}) {
  // displaySecChooseGuardMsgCallBack,  displayRegularExchangesCallBack, 
  console.log('GuardListTable api-response:', apiResponse);
  const [secondCrossGuardList, setSecondCrossGuardList] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  const [displayExchangeGuardsList, setDisplayExchangeGuardList] = useState(false);
  const [displayGuardsTable, setDisplayGuarTable] = useState(true);
  const [displayApproveMessage, setDisplayApproveMessage] = useState(false);
  const [displayApproveCrossMessage, setDisplayApproveCrossMessage] = useState(false);


  
  function displayExchangeGuardListCallBack(){
    setDisplayExchangeGuardList(true);
  };
  
  function secondCrossGuardListCallBack(){
    setSecondCrossGuardList(true);
  };
  
  function displayApproveMessageCallBack(){
    setDisplayApproveMessage(true);
  };



  return (
    <div style={{ direction: 'rtl'}} >
       {displayApproveCrossMessage && (
        <OkCrossExchangeMessage 
        selectedRow1={selectedRow1} selectedRow2={selectedRow.selectedRow2} />
      )}
       {displayApproveMessage && (
        <OkExchangeMessage selectedRow={selectedRow} />
      )}
      {displayGuardsTable && (
      <div>
        <ListTable 
        displayExchangeGuardListCallBack = {displayExchangeGuardListCallBack}
        secondCrossGuardListCallBack ={secondCrossGuardListCallBack}
        displayApproveMessageCallBack = {displayApproveMessageCallBack}
        apiResponse = {apiResponse}
        selectedRow1 = {selectedRow1}
        typeOf = {typeOf}
        />
      </div>
      )}
     
      {displayExchangeGuardsList && (
        <DisplayExchangeGuardList 
        displayRegularExchangesCallBack={displayRegularExchangesCallBack} 
        selectedRow={selectedRow}/>
        )} 
      {secondCrossGuardList && (
        <div><SecondGuardTableDisplay selectedRow={selectedRow}/>
        </div>
      )}
    </div>
  );
};

export default ListTable;