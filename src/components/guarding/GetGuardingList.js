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
    const [loading, setLoading] = useState(false);
    const glistValues = { 
      numOfLists:numOfLists,
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
      setLoading(true);
      e.preventDefault();
      axios.post('/create_guard_list', glistValues)
          .then(result => {
              console.log("guard list data:", result.data);
              setApiResponse(result.data);
              setLoading(false);
              setDispalyGuardingList(true)

          })
          .catch(err => {
              console.log('error:', err);
              setError(err);
          });
      };
    

    if (error) {
      // Render error details
      return <div className="error">Error: {error.message}</div>;
    };
    
    if (displayGuardingList) {
      return <DisplaySetGuardingList apiResponse={apiResponse} displayGuardingList={displayGuardingList}  numOfLists={numOfLists} />;
    };
    
    if (loading) {
      return  (
          <div className="loading-container">
          <div className="loading">
              אנא המתן
              <div className="marquee">
                  <span>&lt;&lt;</span>
              </div>
          </div>
      </div>
      )
    };  
     
    return (
      <div className="get-guarding-list-input">
        <h3>הכנס פרטים ליצירת רשימת שמירה</h3>
        <form onSubmit={HandleSubmit}>
          <NumOfLists getNumOfLists={getNumOfLists}/>
          <StartDate getStartDate={getStartDate}/>
          <PositionData getGlistData={getGlistData}/>
          <div>
            <br/>
            <Button1 type="submit" width="180px" fontSize='15px' height="20px"
             textColor="#183670" onMouseOverTextColor="white" onMouseOutTextColor="#183670"
              color="#d4dceb" onMouseOverColor="#183670" onMouseOutColor="#d4dceb"
              borderColor="#183670" mouseborderColor="#d4dceb" outBorderColor="#183670"
              bottunClickColor="#06e806" value='צור רשימת שמירה' />
          </div>  
        </form>
        {displayGuardingList && <DisplaySetGuardingList apiResponse={apiResponse} displayGuardingList={displayGuardingList} numOfLists={numOfLists} />}
      </div>
    );
 } 

 export default GetGuardingList;