"use client"
import { useEffect, useState } from 'react';
import './profile.css';
import AuthHOC from '@/hoc/AuthHOC';
import { useDispatch, useSelector } from 'react-redux';
import { notification } from 'antd';
import { doc, updateDoc } from 'firebase/firestore';
import { auth, db, storage } from '@/firebase/config';
import BeatLoader from "react-spinners/BeatLoader";
import { signOut } from 'firebase/auth';
import { loginUser, logoutUser } from '@/store/userSlice';
import { useRouter } from 'next/navigation';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { set } from 'firebase/database';

const page = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const user = useSelector(state => state.userReducer.user);
    // const user = propsUser
    console.log(user);

    // console.log(propsUser)

    const [formState, setFormState] = useState({
        name: user ? user.name : "",
        email: user ? user.email : "",
        phone: user ? user.phone : "",
        college: user ? user.college : "",
        dept: user ? user.dept : "",
        year: user ? user.year : "",
        profilePicUrl: user ? user.profilePicUrl : "",
    });

    useEffect(() => {
        setFormState({
            name: user ? user.name : "",
            email: user ? user.email : "",
            phone: user ? user.phone : "",
            college: user ? user.college : "",
            dept: user ? user.dept : "",
            year: user ? user.year : "",
            profilePicUrl: user ? user.profilePicUrl : "",
        })
    }, [user])

    const [imageUpload, setImageUpload] = useState(null);
    const [isEditable, setIsEditable] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleChange = (event) => {
        setFormState({
            ...formState,
            [event.target.name]: event.target.value,
        });
    };

    const handleEditClick = () => {
        setIsEditable(!isEditable);
    };

    const updateProfile = async (newUserData) => {
        const userRef = doc(db, "users", user.email);
        
        await updateDoc(userRef, newUserData)
                .then(() => {
                    dispatch(loginUser({
                        ...user,
                        ...newUserData
                    }))
                    
                    notification['success']({
                        message: `Profile updated successfully`,
                        duration: 3
                    })
                })
                .catch((err) => {
                    notification['error']({
                        message: `Something went wrong! Try again later`,
                        duration: 3
                    })
                })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        if(formState.name.trim().length === 0 || formState.college.trim().length === 0 || formState.dept.trim().length === 0 || formState.year.trim().length === 0) {
            notification['error']({
                message: `All fields are required`,
                duration: 3
            })

            setLoading(false);
            return;
        }

        const phoneRegex = /^[6-9]\d{9}$/;
        if (!phoneRegex.test(parseInt(formState.phone))) {
            console.log(formState.phone);
            notification['error']({
                message: `Invalid phone no`,
                duration: 3
            })

            setLoading(false);
            return;
        }

        setIsEditable(false);

        if(imageUpload) {
            const profilePicName = user.email + Date.now();
            const imageRef = ref(storage, `images/${profilePicName}`);

            await uploadBytes(imageRef, imageUpload)
                .then(async (snapshot) => {
                    await getDownloadURL(snapshot.ref)
                        .then(async (url) => {
                            await updateProfile({...formState, profilePicUrl: url});
                        })
                })
                .catch((err) => {
                    console.log(err);
                    notification['error']({
                        message: `Error uploading image`,
                        duration: 3
                    })
                });

        } else {
            await updateProfile({...formState});
        }

        setLoading(false);
    }

    const handleLogout = (e) => {
        e.preventDefault();

        signOut(auth);
        dispatch(logoutUser());

        notification['success']({
            message: `Logged out successfully`,
            duration: 3
        })

        router.push("/login");
    }

    return (
        <form onSubmit={handleSubmit}>
            <button type="button" className='bg-green-400 p-4' onClick={handleEditClick}>{isEditable ? 'Disable edit' : 'Allow Edit'}</button>
            <label>
                <p>Choose a pic:</p>
                <input type='file' onChange={(e) => setImageUpload(e.target.files[0])} disabled={!isEditable}/>
            </label>
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

            <button type='submit' className='bg-green-400 p-4' disabled={!isEditable}>
                {loading ? <BeatLoader color='#ffffff' /> : "Update Profile"}
            </button>

            <button type='button' onClick={handleLogout} className='bg-green-400 p-4'>
                Log out
            </button>
        </form>
    );
};

export default AuthHOC(page);
