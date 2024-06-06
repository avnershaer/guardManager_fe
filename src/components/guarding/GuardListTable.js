import React, {useState} from "react";
import DisplayExchangeGuardList from "../Exchanges/DisplayExchangeGuardList";
import OkExchangeMessage from "../Exchanges/OkExchangeMessage";
import SecondGuardTableDisplay from "../Exchanges/SecondGuardTableDisplay";
import OkCrossExchangeMessage from "../Exchanges/OkCrossExchangeMessage";
import ListTable from "./ListTable";

function GuardListTable( {apiResponse, selectedRow1, typeOf, displayRegularExchangesCallBack}) {
  // displaySecChooseGuardMsgCallBack,  displayRegularExchangesCallBack, 
  console.log('GuardListTable api-response:', apiResponse);
  const [secondCrossGuardList, setSecondCrossGuardList] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  const [selectedRow2, setSelectedRow2] = useState(null);
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
  
  function displayApproveCrossMessageCallBack(){
    setDisplayApproveCrossMessage(true);
  };
  
  function selectedRowCallBack(listSelectedRow){
    setSelectedRow(listSelectedRow);
  };
  
  function selectedRow2CallBack(listSelectedRow2){
    setSelectedRow2(listSelectedRow2);
  };

  console.log('selectedRow1:', selectedRow1)
  console.log('selectedRow2:', selectedRow2)
  

  return (
    <div style={{ direction: 'rtl'}} >
       {displayApproveCrossMessage && (
        <OkCrossExchangeMessage 
        selectedRow1={selectedRow1} selectedRow2={selectedRow2} />
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
        selectedRowCallBack = {selectedRowCallBack}
        selectedRow2CallBack = {selectedRow2CallBack}
        displayApproveCrossMessageCallBack = {displayApproveCrossMessageCallBack}
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

export default GuardListTable;