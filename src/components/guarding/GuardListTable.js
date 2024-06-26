import React, {useState} from "react";
import DisplayExchangeGuardList from "../Exchanges/DisplayExchangeGuardList";
import OkExchangeMessage from "../Exchanges/OkExchangeMessage";
import SecondGuardTableDisplay from "../Exchanges/SecondGuardTableDisplay";
import OkCrossExchangeMessage from "../Exchanges/OkCrossExchangeMessage";
import ListTable from "./ListTable";
import DisplayPaidExchangeGuards from "../Exchanges/DisplayPaidExchangeGuards";

function GuardListTable( {apiResponse, selectedRow1, typeOf, displayRegularExchangesCallBack}) {
  console.log('GuardListTable api-response:', apiResponse);
  const [secondCrossGuardList, setSecondCrossGuardList] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  const [selectedRow2, setSelectedRow2] = useState(null);
  const [displayExchangeGuardsList, setDisplayExchangeGuardList] = useState(false);
  const [displayGuardsTable, setDisplayGuarTable] = useState(true);
  const [displayApproveMessage, setDisplayApproveMessage] = useState(false);
  const [displayApproveCrossMessage, setDisplayApproveCrossMessage] = useState(false);
  const [displayPaidExchangeGuards, setDisplayPaidExchangeGuards] = useState(false);



  
  function displayExchangeGuardListCallBack(value){
    setDisplayExchangeGuardList(value);
  };
  
  function displayPaidExchangeGuardListCallBack(value){
    setDisplayPaidExchangeGuards(value);
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

  

  return (
    <div style={{ direction: 'rtl', maxWidth: '90vw', maxHeight: '70vh', overflowY: 'auto', textAlign: 'center' }} >
      <div>
       {displayApproveCrossMessage && (
        <OkCrossExchangeMessage 
        selectedRow1={selectedRow1} selectedRow2={selectedRow2} />
      )}
       {displayApproveMessage && (
        <OkExchangeMessage selectedRow={selectedRow} />
      )}
      {displayGuardsTable && (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <ListTable 
        displayPaidExchangeGuardListCallBack = {displayPaidExchangeGuardListCallBack}
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
      {displayPaidExchangeGuards && (
        <DisplayPaidExchangeGuards
        selectedRow={selectedRow}/>
        )} 
      {secondCrossGuardList && (
        <div>
          <SecondGuardTableDisplay 
          selectedRow={selectedRow}
          />
        </div>
      )}
    </div>
    </div>
  );
};

export default GuardListTable;