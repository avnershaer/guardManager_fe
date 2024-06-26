import axios from "axios";
import React, {useState, useEffect} from "react";
import BlueWiteButton from "../buttons/BlueWiteButton";


function ChooseDatePosition(props){

    const [listDate, setListDate] = useState('');
    const [positionId, setPositionId] = useState('');
    const [positions, setPositions] = useState('');
    const [error, setError] = useState('');
    
    const handleOnClick = () => {
      if (listDate && positionId) {
          props.handleSubmit(listDate, positionId);
      }
    };

    useEffect(() => {
      axios.get("/positions_list")
      .then(result =>{
        console.log('positions_data:', result.data);
        setPositions(result.data.details);
      })
      .catch(err =>{
        console.log('error:', err)
        setError(err)  
      })
    },[])

    const HandleOnChange = (event) => {
      const {name, value} = event.target;
      if (name === 'listDate') {
        setListDate(value);
        props.listDateCallBack(value);
      }
    }
  
    const HandlePosOnChange = (event) => {
        const {name, value} = event.target;
        if (name === 'position') {
          setPositionId(value);
          props.positionIdCallBack(value);
        }
    }

    useEffect(() => {
      if (error) {
          setListDate('');
          setPositionId('');
      }
    }, [error]);

    return (
        <div tyle={{ direction: 'rtl', display:"flex", alignItems:"center", justifyContent: 'center'}}>
            <div className="display_choice_container">
                <label className="display_choices_input-label">
                    <div className="display_choice_inline">
                        הצג רשימה על פי תאריך&nbsp;&nbsp;
                        <input 
                          type="date"
                          name="listDate"
                          value={listDate}
                          onChange={HandleOnChange}
                        /> &nbsp;&nbsp;&nbsp;ועמדה&nbsp;&nbsp;
                        <select
                            name="position"
                            value={positionId}
                            onChange={HandlePosOnChange}
                            >
                            <option value="">בחר עמדה </option>
                            {positions.length > 0 && positions.map((position) => (
                            <option key={position.position_id} value={position.position_id}>
                                {position.position_id}&nbsp;{position.position_name}
                            </option>
                         ))}
                        </select>
                        &nbsp; &nbsp;
                        <div style={{marginTop:"0px"}}>
                        <BlueWiteButton
                        width="50px"
                        fontSize="10px"
                        height="15px"
                        value="הצג"
                        onClick={handleOnClick}
                        fontWeight="normal"
                    />
                    </div>
                    </div>
                    
                </label>
            </div>
        </div>
    );
};

export default ChooseDatePosition;