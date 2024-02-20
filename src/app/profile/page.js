"use client"
import { useEffect, useState } from 'react';
import styles from './profile.module.css';
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
import Image from 'next/image';
const page = () => {
    const [imageUpload, setImageUpload] = useState(null);
    const [isEditable, setIsEditable] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleEditClick = (e) => {
        if (isEditable) {
            handleSubmit(e);
        } else {
            setIsEditable(true);
        }
    };

    const dispatch = useDispatch();
    const router = useRouter();
    const user = useSelector(state => state.userReducer.user);
    // const user = propsUser
    // console.log(user);

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

    const handleChange = (event) => {
        setFormState({
            ...formState,
            [event.target.name]: event.target.value,
        });
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
        if (formState.year < 1 || formState.year > 4) {
            notification['error']({
                message: `Year must be between 1-4`,
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
        <div className={styles.body_container}>
            <div className='bg-[url(/images/about/about.png)] flex items-center justify-center min-h-screen '>
                <div className={styles.card}>
                    <div className={styles.svg_container}>
                        <img src={formState.profilePicUrl !== "" ? formState.profilePicUrl : '/images/avatar.jpg'} className={styles.blob} alt='profile-img' />
                    </div>

                    <div className={styles.info}>
                        <h1>Hey, {formState.name}</h1>
                        <h2>{formState.email}</h2>
                        <button type='button' onClick={handleLogout} className={styles.logout}>
                            Log out
                        </button>
                        <input type='file' id='uploadBtn' onChange={(e) => setImageUpload(e.target.files[0])} disabled={!isEditable} />
                        <label className={styles.profile_pic} htmlFor="uploadBtn"><img src={formState.profilePicUrl !== "" ? formState.profilePicUrl : '/images/avatar.jpg'} alt='profile-img' /> Change Profile Pic</label>

                        <label>
                            <p>Name:</p>
                            <input className={styles.glow} type="text" name="name" value={formState.name} onChange={handleChange} disabled={!isEditable} />
                        </label>
                        <label>
                            <p>Phone:</p>

                            <input className={styles.glow} type="tel" name="phone" value={formState.phone} onChange={handleChange} disabled={!isEditable} />
                        </label>
                        <label>
                            <p>College:</p>

                            <input className={styles.glow} type="text" name="college" value={formState.college} onChange={handleChange} disabled={!isEditable} />
                        </label>
                        <label>
                            <p>Department:</p>

                            <input className={styles.glow} type="text" name="dept" value={formState.dept} onChange={handleChange} disabled={!isEditable} />
                        </label>
                        <label>
                            <p>Year:</p>

                            <input className={styles.glow} type="number" name="year" value={formState.year} onChange={handleChange} disabled={!isEditable} />
                        </label>
                        <button className={styles.button_49} role="button" onClick={handleEditClick}>{loading ? <BeatLoader color='rgb(110, 74, 139)' /> : isEditable ? 'SAVE' : 'EDIT'}</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthHOC(page);