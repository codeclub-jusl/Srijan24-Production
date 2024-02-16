"use client"
import { useState } from 'react';
import './testprop.css'
import AuthHOC from '@/hoc/AuthHOC';
import { useDispatch, useSelector } from 'react-redux';
import { notification } from 'antd';
import { doc, updateDoc } from 'firebase/firestore';
import { auth, db, storage } from '@/firebase/config';
import BeatLoader from "react-spinners/BeatLoader";
import { signOut } from 'firebase/auth';
import { logoutUser } from '@/store/userSlice';
import { useRouter } from 'next/navigation';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { set } from 'firebase/database';
import Profile_svg from '@/components/Profile_svg';
import Image from 'next/image';
import DashBoardNav from '@/components/DashBoardNav/DashBoardNav';
import OverallNav from '@/components/OverallNav/OverallNav';
const page = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const user = useSelector(state => state.userReducer.user);

    const [formState, setFormState] = useState({
        name: user ? user.name : "",
        email: user ? user.email : "",
        phone: user ? user.phone : "",
        college: user ? user.college : "",
        dept: user ? user.dept : "",
        year: user ? user.year : "",
        profilePicUrl: user ? user.profilePicUrl : "",
    });

    const [imageUpload, setImageUpload] = useState(null);
    const [isEditable, setIsEditable] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleChange = (event) => {
        setFormState({
            ...formState,
            [event.target.name]: event.target.value,
        });
    };

    const handleEditClick = (e) => {
        if (isEditable) {
            handleSubmit(e);
        } else {
            setIsEditable(true);
        }
    };

    const updateProfile = async (newUserData) => {
        const userRef = doc(db, "users", user.email);

        await updateDoc(userRef, newUserData)
            .then(() => {
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
        console.log('i am running')
        setLoading(true);
        if (formState.name.trim().length === 0 || formState.college.trim().length === 0 || formState.dept.trim().length === 0 || formState.year.trim().length === 0) {
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

        if (imageUpload) {
            const profilePicName = user.email + Date.now();
            const imageRef = ref(storage, `images/${profilePicName}`);

            await uploadBytes(imageRef, imageUpload)
                .then(async (snapshot) => {
                    await getDownloadURL(snapshot.ref)
                        .then(async (url) => {
                            await updateProfile({ ...formState, profilePicUrl: url });
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
            await updateProfile({ ...formState });
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
        <div className='container'>
            <div className='absolute inset-0 -z-80'>
                <Image src="/images/about/about.png" className='' alt="" width={0} height={0} sizes="100vw" style={{ width: '100%', height: '100vh' }}></Image>
            </div>
            <div className='card'>
                <div className='svg-container'>
                    <div className="svg-frame">
                        <Profile_svg />
                    </div>
                </div>

                <div className="info">
                    <h1>Hey, John Deere</h1>
                    <h2>sample@gmail.com</h2>

                    <input type='file' id='uploadBtn' onChange={(e) => setImageUpload(e.target.files[0])} disabled={!isEditable} />
                    <label className='p-4 text-white cursor-pointer text-xs flex flex-row items-center justify-center' htmlFor="uploadBtn"><Image src="/assets/profile.png" height={40} width={40} /> Change Profile Pic</label>

                    <label>
                        <p>Name:</p>
                        <input className='glow w-[80%] focus:outline-none transition-colors peer bg-transparent text-white' type="text" name="name" value={formState.name} onChange={handleChange} disabled={!isEditable} />
                    </label>
                    <label>
                        <p>Phone:</p>

                        <input className='glow w-[80%] focus:outline-none transition-colors peer bg-transparent text-white' type="tel" name="phone" value={formState.phone} onChange={handleChange} disabled={!isEditable} />
                    </label>
                    <label>
                        <p>College:</p>

                        <input className='glow w-[80%] focus:outline-none transition-colors peer bg-transparent text-white' type="text" name="college" value={formState.college} onChange={handleChange} disabled={!isEditable} />
                    </label>
                    <label>
                        <p>Department:</p>

                        <input className='glow w-[80%] focus:outline-none transition-colors peer bg-transparent text-white' type="text" name="dept" value={formState.dept} onChange={handleChange} disabled={!isEditable} />
                    </label>
                    <label>
                        <p>Year:</p>

                        <input className='glow w-[80%] focus:outline-none transition-colors peer bg-transparent text-white mb-4' type="number" name="year" value={formState.year} onChange={handleChange} disabled={!isEditable} />
                    </label>
                    <button className="button-49" role="button" onClick={handleEditClick}>{isEditable ? 'SAVE' : 'EDIT'}</button>
                </div>
            </div>
            <OverallNav />
        </div>
    );
};

export default page;