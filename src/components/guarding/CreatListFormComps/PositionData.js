import React, {useState, useEffect} from "react";
import axios from "axios";
import GuardListModel from "./GuardListModel";
import NumOfGuards from "./NumOfGuards";
import DailyGuardHours from "./DailyGuardHours";
import StartGuardHour from "./StartGuardHour";
import HoursPerShift from "./HoursPerShift";
import StartingUserId from "./StartingUserId";

function PositionData({getGlistData}){

    const [guardParms, setGuardParms] = useState(false);
    const [selectedPos, setSelectedPos] = useState('');
    const [positions, setPositions] = useState([]);
    const [numOfGuards, setNumOfGuards] = useState('1');
    const [hoursPerShift, setHoursPerShhift] = useState('1');
    const [startingUserId, setStartingUserId] = useState(1)
    const [dailyGuardHours, setDailyGuardHours] = useState('24');
    const [startGuardhour, setStartGuardhour] = useState('');
    const [selectedGuardId, setSelectedGuardId] = useState('');
    const [error, setError] = useState('')
    const [positionStates, setPositionStates] = useState({}); //state to store checked state for each position


    function getNumOfGuards(numOfGuards){
      setNumOfGuards(numOfGuards);
      console.log('num of guards:', numOfGuards);
    }

    function getDailyGuardHours(dailyGuardHours){
      setDailyGuardHours(dailyGuardHours);
      console.log('dailyGuardHours:', dailyGuardHours);
    }

    function getStartGuardHour(startGuardhour){
      setStartGuardhour(startGuardhour);
      console.log('startGuardhour:', startGuardhour)
    }

    function getHoursPerDhift(hoursPerShift){
      setHoursPerShhift(hoursPerShift);
      console.log('hoursPerShift:', hoursPerShift);
    }

    function getStartingUserId(startingUserId){
      setStartingUserId(startingUserId);
      console.log('startingUserId:', startingUserId);
    }
    

    useEffect(() => {
      const glistData = { 
          position_id: selectedPos,
          num_of_gards: numOfGuards,
          hours_per_shift: hoursPerShift,
          model:"Families",
          starting_user_id: startingUserId,
          daily_guard_hours: dailyGuardHours,
          start_gaurd_hour: startGuardhour,
        };
        getGlistData(glistData)
      },[selectedPos, numOfGuards, hoursPerShift, startingUserId, dailyGuardHours, startGuardhour, getGlistData])
      
      const posHandleOnChange = (positionId) => {
        const newPositionStates = { ...positionStates };
      
        // If the clicked checkbox is already checked, uncheck it
        if (newPositionStates[positionId]) {
          newPositionStates[positionId] = false;
        } else {
          // Uncheck all other checkboxes
          Object.keys(newPositionStates).forEach((key) => {
            newPositionStates[key] = false;
          });
          // Check the clicked checkbox
          newPositionStates[positionId] = true;
        }
      
        setSelectedPos(positionId);
        setPositionStates(newPositionStates); 
        console.log('position id:', positionId);
      };

    useEffect(() => {
        axios.get("/positions_list")
        .then(result =>{
          console.log('positions_data:', result.data);
          setPositions(result.data.details);
          console.log('positions:', result.data.details);
        })
        .catch(err =>{
          console.log('error:', err)
          setError(err)  
        })
      },[])

    return(
        <div className="input-cell" >
            <label className="input-label">עמדה:<br />
              {positions.length > 0 && positions.map((position) => (
                <div key={position.position_id} >
                 <div className="pos-details">{position.position_name}</div>
                  <input
                    type="checkbox"
                    onChange={() => {
                      posHandleOnChange(position.position_id);
                      setSelectedPos(position.position_id);
                  }}
                    name={'position_id'} 
                    value={position.position_id}
                    checked={positionStates[position.position_id] || false} // check positionStates for each checkbox
                  />
                  {positionStates[position.position_id] &&  (
                    
                  <>
                  <GuardListModel/>
                  <NumOfGuards getNumOfGuards={getNumOfGuards}/>
                  <DailyGuardHours getDailyGuardHours={getDailyGuardHours}/>
                  <StartGuardHour getStartGuardHour={getStartGuardHour}/>
                  <HoursPerShift getHoursPerDhift={getHoursPerDhift}/>
                  <StartingUserId getStartingUserId={getStartingUserId}/>
                  
                  </>)}
                  <br/>
                  </div>
              ))}
            </label>
          </div>
    )
};

export default PositionData;