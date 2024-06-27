import React, { useState } from "react";
import GuardListTable from "./GuardListTable";
import ListBetweenDates from "../displayListComps/ListBetweenDates";
import ListByDate from "../displayListComps/ListByDate";
import ListByDatePosition from "../displayListComps/ListByDatePosition";
import ChooseList from "../displayListComps/ChooseList";
import DisplayFutuLists from "../displayListComps/DisplayFutuLists";


function DisplayGuardingList() {

  const [hideListBetweenDates, setHideListBetweenDates] = useState(false); 
  const [hideListByDate, setHideListByDate] = useState(false); 
  const [hidePosDateList, setHidePosDateList] = useState(false); 
  const [hideChooseList, setHideChooseList] = useState(false); 
  const [hideDisplayFutuLists, setHideDisplayFutuLists] = useState(false);
  
  const apiResponse = ('')
  const displayGlist = false
  const displayChoices = true

  function hideListBetweenDatesCallback() {
    setHideListBetweenDates(true);
  }
  
  function hideListByDateCallback() {
    setHideListByDate(true);
  }
  
  function hidePosDateListCallback() {
    setHidePosDateList(true);
  }
  
  function hideChooseListCallback() {
    setHideChooseList(true);
  }
  
  function hideDisplayFutuListsCallback() {
    setHideDisplayFutuLists(true);
  }

  return (
    
    <div tyle={{ direction: 'rtl', display:"flex", alignItems:"center", justifyContent: 'center'}}>
      {displayGlist ? (
        <div tyle={{ direction: 'rtl', display:"flex", alignItems:"center", justifyContent: 'center'}}>
        <GuardListTable apiResponse={apiResponse}/>
        </div>
      ) : (
      displayChoices && (
        <div className="display_choices">
          <div>
            {!hideListBetweenDates && <ListBetweenDates hideDisplayFutuLists={hideDisplayFutuListsCallback} hideListByDate={hideListByDateCallback} hidePosDateListCallback={hidePosDateListCallback} hideChooseListCallback={hideChooseListCallback}/>}
            {!hidePosDateList && <ListByDatePosition hideListByDate={hideListByDateCallback} hideListBetweenDates={hideListBetweenDatesCallback} hideChooseListCallback={hideChooseListCallback} hideDisplayFutuLists={hideDisplayFutuListsCallback} />}
            {!hideListByDate && <ListByDate hideDisplayFutuLists={hideDisplayFutuListsCallback} hideListBetweenDates={hideListBetweenDatesCallback} hidePosDateListCallback={hidePosDateListCallback} hideChooseListCallback={hideChooseListCallback}/>}
            {!hideChooseList && <ChooseList hideDisplayFutuLists={hideDisplayFutuListsCallback} hideListBetweenDates={hideListBetweenDatesCallback} hideListByDate={hideListByDateCallback} hidePosDateListCallback={hidePosDateListCallback}/>}
            {!hideDisplayFutuLists && <DisplayFutuLists hideListByDate={hideListByDateCallback} hideListBetweenDates={hideListBetweenDatesCallback} hideChooseListCallback={hideChooseListCallback} hidePosDateListCallback={hidePosDateListCallback}/>}
          </div>
        </div>
      ))}
    </div>
  );
}

export default DisplayGuardingList;