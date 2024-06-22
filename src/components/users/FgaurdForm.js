import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import BlueWiteButton from '../buttons/BlueWiteButton';

function FguardForm({ guardData }) {
    const { register, handleSubmit, setValue, reset, formState: { errors } } = useForm();
    const [preview, setPreview] = useState('');

    useEffect(() => {
        if (guardData) {
            reset({
                fguard_name: guardData.fguard_name,
                fguard_phone: guardData.fguard_phone,
                fguard_email: guardData.fguard_email,
                armed: guardData.armed,
            });
            setPreview(guardData.fguard_pic);
        }
    }, [guardData, reset]);

    const onSubmit = async (data) => {
        try {
            const formData = new FormData();
            formData.append('fguard_name', data.fguard_name);
            formData.append('fguard_phone', data.fguard_phone);
            formData.append('fguard_email', data.fguard_email);
            formData.append('armed', data.armed);
            if (data.fguard_pic && data.fguard_pic[0]) {
                formData.append('fguard_pic', data.fguard_pic[0]);
            }

            const response = await axios.post('/api/fguard/', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log(response.data);
        } catch (error) {
            console.error('There was an error!', error);
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
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="fguard-form">
            <div className="form-group">
                <label>שם פרטי</label>
                <input
                    {...register('fguard_name', { required: true })}
                />
                {errors.fguard_name && <span>This field is required</span>}
            </div>
            <div className="form-group">
                <label>טלפון נייד</label>
                <input
                    {...register('fguard_phone', { required: true })}
                />
                {errors.fguard_phone && <span>This field is required</span>}
            </div>
            <div className="form-group">
                <label>דואר אלקטרוני</label>
                <input
                    {...register('fguard_email', { required: true })}
                />
                {errors.fguard_email && <span>This field is required</span>}
            </div>
            <div className="form-group">
                <label>חמוש?</label>
                <input type="checkbox" {...register('armed')} />
            </div>
            <div className="form-group">
                <label>תמונה</label>
                {preview && (
                    <div>
                        <img 
                            src={preview} 
                            alt="Guard Pic" 
                            style={{ width: '150px', height: '150px', marginBottom: '10px' }} 
                        />
                    </div>
                )}
                <input
                    type="file"
                    id="fguard_pic"
                    {...register('fguard_pic')}
                    style={{ display: 'none' }}
                    onChange={handleFileChange}
                />
                <BlueWiteButton
                    width="150px"
                    fontSize="12px"
                    height="20px"
                    value="העלה קובץ תמונה"
                    fontWeight="normal"
                    onClick={handleFileClick}
                />
            </div>
            <BlueWiteButton
                width="150px"
                fontSize="12px"
                height="20px"
                value="עדכן"
                fontWeight="normal"
                type="submit"
            />
        </form>
    );
}

export default FguardForm;