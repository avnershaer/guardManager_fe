import React, {useState, useEffect} from "react";
import axios from "../../AxiosPath";


function StartingUserId({getStartingUserId}){

    const [startingUserId, setStartingUserId] = useState('');
    const [guardList, setGuardsList] = useState('');
    const [error, setError] = useState('');
    const [lastUserId, setLastUserId] = useState('');
    const [selectedGuardid, setSelctedGuradId] = useState('');


    const HandleOnChange = (event) => {
      const { name, value } = event.target;
    
      if (name === "user_id_option") {
        setStartingUserId(value);
        getStartingUserId(value);
      }
    }
    
    const HandleSelectChange = (event) => {
      const selectedValue = event.target.value;
      setSelctedGuradId(selectedValue);
      getStartingUserId(selectedValue);
      console.log('setSelctedGuradId:', selectedValue )
    }   
    
    
    useEffect(() => {
        axios.get("/families_list")
        .then(result =>{
          console.log('families_data:', result.data);
          setGuardsList(result.data.Details);
          console.log('guards:', result.data.details);
        })
        .catch(err =>{
          console.log('error:', err)
          setError(err)  
        })
      },[])
    
      useEffect(() => {
        axios.get("/get_last_id")
        .then(result => {
          console.log('LAST ID:', result.data.Details)
          setLastUserId(result.data.Details)
        })
        .catch(error =>{
          console.log('error:', error)
          setError(error) 
        })
      },[])

    return(
        <div className="input-cell">
            <label className="input-label">
              מספר מזהה של השומר להתחלת הרשימה<br/>
              <input
                type="radio"
                name="user_id_option"
                onChange={HandleOnChange}
                value={1}
                style={{ marginRight: '5px' }}
              /> רשומה ראשונה&nbsp;&nbsp;&nbsp;
              <br />
              <input
                type="radio"
                name="user_id_option"
                onChange={HandleOnChange}
                value={lastUserId}
                style={{ marginRight: '5px' }}
              /> רשומה אחרונה&nbsp;&nbsp;&nbsp;
              <br />
              <input
                type="radio"
                name="user_id_option"
                onChange={HandleOnChange}
                value={selectedGuardid}
                style={{ marginRight: '5px' }}
              />בחר מספר מזהה ע"פ שם&nbsp;&nbsp;&nbsp;
              <select 
              onChange={HandleSelectChange}
              name="name_id_select"
              value={selectedGuardid}
              >
                <option value="">בחר </option>
                {guardList && guardList.length > 0 && guardList.map((guard) => (
                  <option key={guard.family_id} value={guard.family_id}>
                    {guard.family_name}&nbsp;{guard.name1}&nbsp;{guard.name2}&nbsp;{guard.family_id}
                  </option>
                  
                ))}
              </select>
            </label>
        </div>
        
    );
};

export default StartingUserId;