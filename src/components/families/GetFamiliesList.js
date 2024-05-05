import React, { useState, useEffect } from "react";
import axios from "../AxiosPath";
import Button1 from "../buttons/button1";
import baseURL from "../../config";



const GetFamiliesList = () => {
    const [families, setFamilies] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('/families_list')
            .then(result => {
                console.log("families data:", result.data.Details);
                setFamilies(result.data.Details);
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
    }

    if (families === null) {
        return <div>Loading...</div>;
    }

    return (
        <div style={{ alignItems: 'flex-start', textAlign: 'right', display: 'flex', justifyContent: 'right', direction: 'rtl' }}>
            <div style={{ textAlign: 'center' }}>
                <h3>רשימת משפחות</h3>
                <div className="families-list">
                    {families.map((family, index) => (
                        <table key={index} style={{ borderCollapse: 'collapse' }}>
                            <tbody>
                                <tr>                    
                                    <td style={{ textAlign: 'center', padding: '10px' }}>
                                        <Button1 width="100px" fontSize='10px' height="15px" value='הצג פרטי משפחה' />
                                    </td>
                                    <td style={{ textAlign: 'center', padding: '10px' }}>
                                        <Button1 width="35px" fontSize='10px' height="15px" value='ערוך' />
                                    </td>
                                    <td style={{ padding: '10px' }}>משפחת</td>
                                    <td style={{ textAlign: 'center', padding: '10px', color:'blue' }}>{family.family_name}</td>
                                    <td style={{ textAlign: 'center', padding: '10px' }}>
                                        {family.family_pic ? (
                                            <div style={{ width: '25px', height: '25px', borderRadius: '50%', overflow: 'hidden', display: 'inline-block' }}>
                                                <img
                                                    src={`${baseURL}${family.family_pic}`}
                                                    alt="family_picture"
                                                    style={{ maxWidth: "25px", maxHeight: "25px" }}
                                                />
                                            </div>
                                        ) : (
                                            <span style={{ color: "white" }}>No picture Available</span>
                                        )}
                                    </td>
                                    <td style={{ textAlign: 'center', padding: '10px' }}>{family.name1}</td>
                                    <td style={{ textAlign: 'center', padding: '10px' }}>{family.phone1}</td>
                                    <td style={{ textAlign: 'center', padding: '10px' }}>{family.name2}</td>
                                    <td style={{ textAlign: 'center', padding: '10px' }}>{family.phone2}</td>
                                </tr>
                            </tbody>
                        </table>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default GetFamiliesList;