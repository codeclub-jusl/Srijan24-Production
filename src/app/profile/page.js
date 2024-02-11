"use client"
import { useState } from 'react';
import './profile.css';
import AuthHOC from '@/hoc/AuthHOC';
import { useSelector } from 'react-redux';

const page = () => {
    const user = useSelector(state => state.userReducer.user);

    const [formState, setFormState] = useState({
        name: user.name,
        email: user.email,
        phone: user.phone,
        college: user.college,
        dept: user.dept,
        year: user.year,
    });

    const [isEditable, setIsEditable] = useState(false);

    const handleChange = (event) => {
        setFormState({
            ...formState,
            [event.target.name]: event.target.value,
        });
    };

    const handleEditClick = () => {
        setIsEditable(!isEditable);
    };

    return (
        <form>
            <button type="button" className='bg-green-400 p-4' onClick={handleEditClick}>{isEditable ? 'Disable edit' : 'Allow Edit'}</button>
            <label>
                <p>Email:</p>
                <input type="email" name="email" value={formState.email} readOnly />
            </label>
            <label>
                <p>Name:</p>

                <input type="text" name="name" value={formState.name} onChange={handleChange} disabled={!isEditable} />
            </label>
            <label>
                <p>Phone:</p>

                <input type="tel" name="phone" value={formState.phone} onChange={handleChange} disabled={!isEditable} />
            </label>
            <label>
                <p>College:</p>

                <input type="text" name="college" value={formState.college} onChange={handleChange} disabled={!isEditable} />
            </label>
            <label>
                <p>Department:</p>

                <input type="text" name="dept" value={formState.dept} onChange={handleChange} disabled={!isEditable} />
            </label>
            <label>
                <p>Year:</p>

                <input type="number" name="year" value={formState.year} onChange={handleChange} disabled={!isEditable} />
            </label>
        </form>
    );
};

export default AuthHOC(page);
