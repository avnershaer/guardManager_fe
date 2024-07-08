import React, { useState } from "react";
import GuardListTable from "./GuardListTable";
import ListBetweenDates from "../displayListComps/ListBetweenDates";
import ListByDate from "../displayListComps/ListByDate";
import ListByDatePosition from "../displayListComps/ListByDatePosition";
import ChooseList from "../displayListComps/ChooseList";
import DisplayFutuLists from "../displayListComps/DisplayFutuLists";
import BlueWiteButton from "../buttons/BlueWiteButton";


function DisplayGuardingList({doReset}) {

  const [hideListBetweenDates, setHideListBetweenDates] = useState(false); 
  const [hideListByDate, setHideListByDate] = useState(false); 
  const [hidePosDateList, setHidePosDateList] = useState(false); 
  const [hideChooseList, setHideChooseList] = useState(false); 
  const [hideDisplayFutuLists, setHideDisplayFutuLists] = useState(false);
  const [displayBackButton, setDisplayBackButton] = useState(false);
  
  const displayChoices = true;
  const apiResponse = '';
  const displayGlist = false;

  function hideListBetweenDatesCallback() {
    setHideListBetweenDates(true);
  };
  
  function hideListByDateCallback() {
    setHideListByDate(true);
  };
  
  function hidePosDateListCallback() {
    setHidePosDateList(true);
  };
  
  function hideChooseListCallback() {
    setHideChooseList(true);
  };
  
  function hideDisplayFutuListsCallback() {
    setHideDisplayFutuLists(true);
  };
  function DisplayBackButtonCallback() {
    setDisplayBackButton(true);
  };

  function handleBackClick(){
    doReset();
  };


  return (
    <div style={{ direction: 'rtl', display: "flex", alignItems: "center", justifyContent: 'center' }}>
      {displayGlist ? (
        <div style={{ direction: 'rtl', display: "flex", alignItems: "center", justifyContent: 'center' }}>
          <GuardListTable apiResponse={apiResponse} />
        </div>
      ) : (
        displayChoices && (
          <div className="display_choices">
            {displayBackButton && (
              <div style={{marginBottom:"10px", marginTop:"-10px"}}>
                <BlueWiteButton
                          width="110px"
                          fontSize="10px"
                          height="15px"
                          value="חזרה"
                          fontWeight="normal"
                          onClick={handleBackClick}
                        />
                        </div>
                      )}
                <div>
              {!hideListBetweenDates && 
              <ListBetweenDates 
              DisplayBackButtonCallback={DisplayBackButtonCallback}
              hideDisplayFutuLists={hideDisplayFutuListsCallback} 
              hideListByDate={hideListByDateCallback} 
              hidePosDateListCallback={hidePosDateListCallback} 
              hideChooseListCallback={hideChooseListCallback} 
              />
              }
              {!hidePosDateList && 
              <ListByDatePosition 
              DisplayBackButtonCallback={DisplayBackButtonCallback}
              hideListByDate={hideListByDateCallback} 
              hideListBetweenDates={hideListBetweenDatesCallback} 
              hideChooseListCallback={hideChooseListCallback} 
              hideDisplayFutuLists={hideDisplayFutuListsCallback} 
              />
              }
              {!hideListByDate && 
              <ListByDate 
              DisplayBackButtonCallback={DisplayBackButtonCallback}
              hideDisplayFutuLists={hideDisplayFutuListsCallback} 
              hideListBetweenDates={hideListBetweenDatesCallback} 
              hidePosDateListCallback={hidePosDateListCallback} 
              hideChooseListCallback={hideChooseListCallback} 
              />
              }
              {!hideDisplayFutuLists && 
              <DisplayFutuLists
              DisplayBackButtonCallback={DisplayBackButtonCallback}
              hideListByDate={hideListByDateCallback} 
              hideListBetweenDates={hideListBetweenDatesCallback} 
              hideChooseListCallback={hideChooseListCallback} 
              hidePosDateListCallback={hidePosDateListCallback} 
              />
              }
              {!hideChooseList && 
              <ChooseList 
              DisplayBackButtonCallback={DisplayBackButtonCallback}
              hideDisplayFutuLists={hideDisplayFutuListsCallback} 
              hideListBetweenDates={hideListBetweenDatesCallback} 
              hideListByDate={hideListByDateCallback} 
              hidePosDateListCallback={hidePosDateListCallback} 
              />
              }
            </div>
           
          </div>
        )
      )}
    </div>
  );
}

export default DisplayGuardingList;