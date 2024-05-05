import React, {useState, useEffect} from "react";
import axios from "../AxiosPath";
import Button1 from "../buttons/button1";
import DisplaySetGuardingList from "./DisplaySetGuardingList";
import ContentBar from "../panels/ContentBar";
import Content from "../panels/Content";
import NumOfLists from "./CreatListFormComps/NumOfLists";
import StartDate from "./CreatListFormComps/StartDate";
import PositionData from "./CreatListFormComps/PositionData";


 function GetGuardingList(){
    const [date, setDate] = useState('');
    const [day, setDay] = useState('');
    const [error, setError] = useState('');
    const [apiResponse, setApiResponse] = useState('');
    const [displayGuardingList, setDispalyGuardingList] = useState(false);
    const [numOfLists, setNumOfLists] = useState("1");
    const [guardsList, setGuardsList] = useState([]);
    const [glistData, setGlistData] = useState('');

    const glistValues = { 
      date:date,
      day:day,
      glistData: glistData
    };


    function getGlistData(glistData){
      setGlistData(glistData);
      console.log("glistData:", glistData);
    };

    useEffect(() => {
      setGlistData(glistData);
      console.log("glistData:", glistData);
    }, [glistData]);


    function getNumOfLists(numOfLists){
      setNumOfLists(numOfLists)
      console.log("numOfLists data:", numOfLists);
    };
    
   


    function getStartDate(date, day){
      setDate(date);
      setDay(day);
      console.log("setDate:", date);
      console.log("setDay:", day);
    }

    
    const HandleSubmit = (e) => {
      e.preventDefault();
      
      axios.post('/create_guard_list', glistValues)
          .then(result => {
              console.log("guard list data:", result.data);
              setApiResponse(result.data);
              setDispalyGuardingList(true)
          })
          .catch(err => {
              console.log('error:', err);
              setError(err);
          });
      }

    
    



    
    if (displayGuardingList) {
      return <DisplaySetGuardingList apiResponse={apiResponse} displayGuardingList={displayGuardingList}  numOfLists={numOfLists} />;
    }
    
    return (
      <div className="get-guarding-list-input">
        <h3>הכנס פרטים ליצירת רשימת שמירה</h3>
        <form onSubmit={HandleSubmit}>
          <NumOfLists getNumOfLists={getNumOfLists}/>
          <StartDate getStartDate={getStartDate}/>
          <PositionData getGlistData={getGlistData}/>
          <div>
            <Button1 type="submit" width="100px" fontSize='10px' height="15px"
             textColor="white" onMouseOverTextColor="blue" onMouseOutTextColor="white"
              color="blue" onMouseOverColor="white" onMouseOutColor="blue"
              borderColor="white" mouseborderColor="blue" outBorderColor="white"
              bottunClickColor="#06e806" value='צור רשימת שמירה' />
          </div>
        </form>
        {displayGuardingList && <DisplaySetGuardingList apiResponse={apiResponse} displayGuardingList={displayGuardingList} numOfLists={numOfLists} />}
      </div>
    );
 } 

 export default GetGuardingList;