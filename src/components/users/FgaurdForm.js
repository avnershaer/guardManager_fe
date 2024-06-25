import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import BlueWiteButton from '../buttons/BlueWiteButton';
import baseURL from "../../config";
import Error1 from '../errorComps/Error1';
import UserUpdateMessage from './UserUpdateMessage';
import Loading from '../buttons/Loading';

function FguardForm({ guardData }) {
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
                fguard_id: guardData.fguard_id,
                fguard_name: guardData.fguard_name,
                fguard_phone: guardData.fguard_phone,
                fguard_email: guardData.fguard_email,
                armed: guardData.armed,
            });
            setPreview(`${baseURL}${guardData.fguard_pic}`);
            setRemovePic(false);
        }
    }, [guardData, reset]);

    const onSubmit = async (data) => {
        try {
            const formData = new FormData();
            formData.append('fguard_id', data.fguard_id);
            formData.append('fguard_name', data.fguard_name);
            formData.append('fguard_phone', data.fguard_phone);
            formData.append('fguard_email', data.fguard_email);
            formData.append('armed', data.armed);
            if (selectedFile) {
                formData.append('fguard_pic', selectedFile);
            }
            if (removePic) {
                formData.append('remove_pic', true);
            }

            setLoading(true);
            const response = await axios.post('/update_fguard', formData, {
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
        document.getElementById('fguard_pic').click();
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
                        <input {...register('fguard_name', { required: true })} />
                        {errors.fguard_name && 
                        <span>*שדה חובה - השאר פרטים ישנים אם אין ברצונך לעדכן</span>}
                    </div>
                    <div className="form-group">
                        <label>טלפון נייד</label>
                        <input {...register('fguard_phone', { required: true })} />
                        {errors.fguard_phone && 
                        <span>*שדה חובה - השאר פרטים ישנים אם אין ברצונך לעדכן</span>}
                    </div>
                    <div className="form-group">
                        <label>דואר אלקטרוני</label>
                        <input {...register('fguard_email', { required: true })} />
                        {errors.fguard_email && 
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
                            id="fguard_pic"
                            {...register('fguard_pic')}
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

export default FguardForm;