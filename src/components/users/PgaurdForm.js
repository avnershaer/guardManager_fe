import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import BlueWiteButton from '../buttons/BlueWiteButton';
import baseURL from "../../config";
import Error1 from '../errorComps/Error1';
import UserUpdateMessage from './UserUpdateMessage';
import Loading from '../buttons/Loading';

function PgaurdForm({ guardData }) {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [preview, setPreview] = useState('');
    const [removePic, setRemovePic] = useState(false);
    const [error, setError] = useState("");
    const [apiResponse, setApiResponse] = useState('');
    const [selectedFile, setSelectedFile] = useState(null); // Add this state
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        if (guardData) {
            reset({
                pguard_id: guardData.pguard_id,
                pguard_name: guardData.pguard_name,
                pguard_phone: guardData.pguard_phone,
                pguard_email: guardData.pguard_email,
                armed: guardData.armed,
            });
            setPreview(`${baseURL}${guardData.pguard_pic}`);
            setRemovePic(false);
        }
    }, [guardData, reset]);

    const onSubmit = async (data) => {
        try {
            const formData = new FormData();
            formData.append('pguard_id', data.pguard_id);
            formData.append('pguard_name', data.pguard_name);
            formData.append('pguard_phone', data.pguard_phone);
            formData.append('pguard_email', data.pguard_email);
            formData.append('armed', data.armed);
            if (selectedFile) {
                formData.append('pguard_pic', selectedFile);
            }
            if (removePic) {
                formData.append('remove_pic', true);
            }

            setLoading(true);
            const response = await axios.post('/update_pguard', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            setLoading(false);
            setApiResponse(response.data);
            console.log('response.data:', response.data);
        } catch (error) {
            console.log('There was an error:', error);
            setError(error);
        }
    };

    const handleFileClick = () => {
        document.getElementById('pguard_pic').click();
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview(reader.result);
                setRemovePic(false);
            };
            reader.readAsDataURL(file);
            setSelectedFile(file); // set selected file
        }
    };

    const handleRemovePic = () => {
        setPreview('');
        setRemovePic(true);
        setSelectedFile(null); // clear selected file
    };

    if (error) {return (<div><Error1 error={error.message} /></div>);};

    if (loading) {return <Loading/>};

    return (
        <div>
            {apiResponse ? (
                <UserUpdateMessage />
            ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="fguard-form">
                    <div className="form-group">
                        <label>שם פרטי</label>
                        <input {...register('pguard_name', { required: true })} />
                        {errors.pguard_name && 
                        <span>*שדה חובה - השאר פרטים ישנים אם אין ברצונך לעדכן</span>}
                    </div>
                    <div className="form-group">
                        <label>טלפון נייד</label>
                        <input {...register('pguard_phone', { required: true })} />
                        {errors.pguard_phone && 
                        <span>*שדה חובה - השאר פרטים ישנים אם אין ברצונך לעדכן</span>}
                    </div>
                    <div className="form-group">
                        <label>דואר אלקטרוני</label>
                        <input {...register('pguard_email', { required: true })} />
                        {errors.pguard_email && 
                        <span>*שדה חובה - השאר פרטים ישנים אם אין ברצונך לעדכן</span>}
                    </div>
                    <div className="form-group">
                        <label>חמוש?</label>
                        <input type="checkbox" {...register('armed')} />
                    </div>
                    <div className="form-group">
                        <label>תמונה</label>
                        <div style={{ display: 'flex', alignItems: 'center', gap: "10px" }}>
                            <BlueWiteButton
                                width="100px"
                                fontSize="12px"
                                height="20px"
                                value="העלה קובץ תמונה"
                                fontWeight="normal"
                                type="button"
                                onClick={handleFileClick}
                            />
                            {preview && (
                                <img 
                                    src={preview} 
                                    alt="Guard Pic" 
                                    style={{ width: '80px', height: '80px', borderRadius: "45px" }} 
                                />
                            )}
                            {preview && (
                                <BlueWiteButton
                                    width="100px"
                                    fontSize="12px"
                                    height="20px"
                                    value="הסר תמונה"
                                    fontWeight="normal"
                                    type="button"
                                    onClick={handleRemovePic}
                                />
                            )}
                        </div>
                        <input
                            type="file"
                            id="pguard_pic"
                            {...register('pguard_pic')}
                            style={{ display: 'none' }}
                            onChange={handleFileChange}
                        />
                    </div>
                    <BlueWiteButton
                        width="100px"
                        fontSize="12px"
                        height="20px"
                        value="עדכן פרטים"
                        fontWeight="normal"
                        type="submit"
                    />
                </form>
            )}
        </div>
    );
}

export default PgaurdForm;