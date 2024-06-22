import React, { useState, useEffect } from "react";
import axios from "../AxiosPath";
import Loading from "../buttons/Loading";
import BlueWiteButton from "../buttons/BlueWiteButton";
import {useNavigate} from "react-router-dom";


function GetFamiliesList(){
    const [families, setFamilies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        setLoading(true);
        console.log("families data useEffect");
        axios.get('/families_list')
            .then(result => {
                console.log("families data:", result.data.Details);
                setFamilies(result.data.Details);
                setLoading(false);
            })
            .catch(err => {
                console.log('error:', err);
                setError(err);
            });
    }, []);

    if (error) {
        return (
            <div className="error">
                Error: {error.message}
            </div>
        );
    };

    if (loading) {
        return <div><Loading/></div>
    };

    return (
        <div className="families-list-container">
            <div style={{ textAlign: 'center',}}>
                <h5 style={{color:"#183670"}}>רשימת משתמשים (משפחות)</h5>
                <div className="families-list">
                    <div className="reports-table">
                    <table>
                            <thead style={{fontSize:"10px"}}>
                                <th>שם משפחה</th>
                                <th>מס. משפ'</th>
                                <th>user id</th>
                                <th>user name</th>
                                <th>פעיל</th>
                                <th>הערה</th>
                                <th></th>
                                <th></th>
                            </thead>
                            {families.map((family, index) => (
                            <tbody>
                                <tr>                    
                                    <td style={{ width:"100px", textAlign: 'center'}}>{family.family_name}</td>
                                    <td style={{ width:"50px", textAlign: 'center'}}>{family.family_id}</td>
                                    <td style={{ textAlign: 'center', color:'blue' }}>{family.user.id}</td>   
                                    <td style={{ textAlign: 'center', color:'blue' }}>{family.user.username}</td>   
                                    <td style={{ 
                                            textAlign: 'center', 
                                            color: family.user.is_active ? 'green' : 'red', 
                                            fontWeight: 'bold' 
                                            }}>
                                            {family.user.is_active ? 'כן' : 'לא'}
                                    </td>    
                                    <td style={{ width:"100px", backgroundColor:"#ddd", textAlign: 'center', color:'darkblue', fontSize:"10px" }}>{family.user.custom_user.remark}</td>   
                                    <td>
                                        <BlueWiteButton
                                            width="90px"
                                            fontSize="12px"
                                            height="20px"
                                            value="שנה סיסמה"
                                            fontWeight="normal"
                                            onClick={() => navigate('/CrossExchangeReport')}
                                        />
                                    </td>
                                </tr>
                            </tbody>
                            ))}
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GetFamiliesList;