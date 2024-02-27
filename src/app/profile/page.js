'use client'
import { useEffect, useState } from 'react'
import styles from './profile.module.css'
import AuthHOC from '@/hoc/AuthHOC'
import { useDispatch, useSelector } from 'react-redux'
import { notification } from 'antd'
import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore'
import { auth, db, storage } from '@/firebase/config'
import BeatLoader from 'react-spinners/BeatLoader'
import { signOut } from 'firebase/auth'
import { loginUser, logoutUser } from '@/store/userSlice'
import { useRouter } from 'next/navigation'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import { set } from 'firebase/database'
import Image from 'next/image'
import Navbar from '@/components/Navbar/Navbar'
import OverallNav from '@/components/OverallNav/OverallNav'
import { findReferralCode, getAmbassadorByCode } from '@/utils/ambassadors'
import { SiWhatsapp } from "react-icons/si";

const page = () => {
    const [imageUpload, setImageUpload] = useState(null)
    const [isEditable, setIsEditable] = useState(false)
    const [loading, setLoading] = useState(false)
    const [referCode, setReferCode] = useState('')
    const [referredFriends, setReferredFriends] = useState([])
    const [referralCode, setReferralCode] = useState(undefined)
    const [campusAmbassador, setCampusAmbassador] = useState(undefined)

    const handleEditClick = e => {
        if (isEditable) {
            handleSubmit(e)
        } else {
            setIsEditable(true)
        }
    }

    const dispatch = useDispatch()
    const router = useRouter()
    const user = useSelector(state => state.userReducer.user)

    // const referralCode = findReferralCode(user.email)
    // const campusAmbassador = getAmbassadorByCode(user.referralCode)
    // const campusAmbassador = "AbCdE"
    // const user = propsUser
    // console.log(user);

    // console.log(propsUser)

    const [formState, setFormState] = useState({
        name: user ? user.name : '',
        email: user ? user.email : '',
        phone: user ? user.phone : '',
        college: user ? user.college : '',
        dept: user ? user.dept : '',
        year: user && user.year ? user.year : '1',
        profilePicUrl: user ? user.profilePicUrl : '',
    })

    useEffect(() => {
        setFormState({
            name: user ? user.name : '',
            email: user ? user.email : '',
            phone: user ? user.phone : '',
            college: user ? user.college : '',
            dept: user ? user.dept : '',
            year: user && user.year ? user.year : '1',
            profilePicUrl: user ? user.profilePicUrl : '',
        })

        if(user && user.referredFriends) {
            setReferredFriends(user.referredFriends)
        } else {
            setReferredFriends([])
        }

        if(user) {
            setReferralCode(findReferralCode(user.email))
            setCampusAmbassador(getAmbassadorByCode(user.referralCode))
        } else {
            setReferralCode(undefined)
            setCampusAmbassador(undefined)
        }
    }, [user])

    const handleChange = event => {
        if (event.target.name === '') {
            setFormState({
                ...formState,
                year: event.target.value,
            })
        } else {
            setFormState({
                ...formState,
                [event.target.name]: event.target.value,
            })
        }
        // console.log("year changed");
    }

    const updateProfile = async (newUserData, message) => {
        const userRef = doc(db, 'users', user.email)

        await updateDoc(userRef, newUserData)
            .then(() => {
                dispatch(
                    loginUser({
                        ...user,
                        ...newUserData,
                    }),
                )

                notification['success']({
                    message: message,
                    duration: 3,
                })
            })
            .catch(err => {
                notification['error']({
                    message: `Something went wrong! Try again later`,
                    duration: 3,
                })
            })
    }

    const handleSubmit = async e => {
        e.preventDefault()
        setLoading(true)

        // console.log(formState);

        if (
            formState.name.trim().length === 0 ||
            formState.college.trim().length === 0 ||
            formState.dept.trim().length === 0 ||
            formState.year.trim().length === 0
        ) {
            notification['error']({
                message: `All fields are required`,
                duration: 3,
            })

            setLoading(false)
            return
        }
        const phoneRegex = /^[6-9]\d{9}$/
        if (!phoneRegex.test(parseInt(formState.phone))) {
            // console.log(formState.phone);
            notification['error']({
                message: `Invalid phone no`,
                duration: 3,
            })

            setLoading(false)
            return
        }
        if (formState.year < 1 || formState.year > 4) {
            notification['error']({
                message: `Year must be between 1-4`,
                duration: 3,
            })
            setLoading(false)
            return
        }
        setIsEditable(false)

        if (imageUpload) {
            const profilePicName = user.email + Date.now()
            const imageRef = ref(storage, `images/${profilePicName}`)

            await uploadBytes(imageRef, imageUpload)
                .then(async snapshot => {
                    await getDownloadURL(snapshot.ref).then(async url => {
                        await updateProfile({
                            ...formState,
                            profilePicUrl: url,
                        })
                    })
                })
                .catch(err => {
                    console.log(err)
                    notification['error']({
                        message: `Error uploading image`,
                        duration: 3,
                    })
                })
        } else {
            await updateProfile({ ...formState }, "Profile updated successfully")
        }

        setLoading(false)
    }

    const handleSubmitReferral = async (e) => {
        e.preventDefault()
        // console.log(referCode);
        const ambassadorUser = getAmbassadorByCode(referCode)

        if(!ambassadorUser) {
            notification['error']({
                message: `Invalid referral code`,
                duration: 3,
            })
            return;
        }

        setLoading(true);

        try {
            const ambassadorUserRef = doc(db, 'users', ambassadorUser)
            const ambassadorUserSnap = await getDoc(ambassadorUserRef)

            if(ambassadorUserSnap.exists()) {
                const ambassadorUserData = ambassadorUserSnap.data()
                if(ambassadorUserData.referredFriends) {
                    const newAmbassadorUserData = {...ambassadorUserData, referredFriends: [...ambassadorUserData.referredFriends, user.email]}
                    await updateDoc(ambassadorUserRef, newAmbassadorUserData)
                } else {
                    await setDoc(ambassadorUserRef, {
                        referredFriends: [user.email],
                      }, { merge: true });
                }
            }

            await updateProfile({...formState, referralCode: referCode}, 'Referral code updated')

        } catch (err) {
            // console.log(err);
            notification['error']({
                message: `Somthing went wrong! Try again later`,
                duration: 3,
            })
        }

        setReferCode('')
        setLoading(false);
    }

    const shareReferralCode = () => {

        const text = `Hello there! You're cordially invited to join us at Srijan'24, where creativity knows no bounds! Use my referral code: *${referralCode}* and let's embark on an unforgettable journey together!`
        const wpUrl = `https://api.whatsapp.com/send?text=${text}`

        window.open(wpUrl, '_blank');

    }


    const handleLogout = e => {
        e.preventDefault()

        signOut(auth)
        dispatch(logoutUser())

        notification['success']({
            message: `Logged out successfully`,
            duration: 3,
        })

        router.push('/login')
    }

    // whatsapp://send?text=${text}

    return (
        <div className={styles.body_container}>
            <div className='bg-[url(/images/about/about.png)] flex items-center justify-center min-h-screen flex-col'>
                <OverallNav></OverallNav>
                <div className={styles.card}>
                    <div className={styles.svg_container}>
                        <img
                            src={
                                formState.profilePicUrl !== ''
                                    ? formState.profilePicUrl
                                    : '/images/avatar.jpg'
                            }
                            className={styles.blob}
                            alt='profile-img'
                        />
                        <div className='profileNameDetails'>
                            <h1>Hey, {formState.name}</h1>
                            <h2>{formState.email}</h2>
                        </div>
                    </div>

                    <div className={styles.info}>
                        {/* <h1>Hey, {formState.name}</h1>
                        <h2>{formState.email}</h2> */}
                        <input
                            type='file'
                            accept='image/*'
                            id='uploadBtn'
                            onChange={e => setImageUpload(e.target.files[0])}
                            disabled={!isEditable}
                        />
                        <label
                            className={styles.profile_pic}
                            htmlFor='uploadBtn'
                        >
                            <img
                                src={
                                    formState.profilePicUrl !== ''
                                        ? formState.profilePicUrl
                                        : '/images/avatar.jpg'
                                }
                                alt='profile-img'
                            />
                            {imageUpload
                                ? imageUpload.name
                                : 'Change Profile Pic'}
                        </label>

                        <label>
                            <p>Name:</p>
                            <input
                                className={styles.glow}
                                type='text'
                                name='name'
                                value={formState.name}
                                onChange={handleChange}
                                disabled={!isEditable}
                            />
                        </label>
                        <label>
                            <p>Phone:</p>

                            <input
                                className={styles.glow}
                                type='tel'
                                name='phone'
                                value={formState.phone}
                                onChange={handleChange}
                                disabled={!isEditable}
                            />
                        </label>
                        <label>
                            <p>College:</p>

                            <input
                                className={styles.glow}
                                type='text'
                                name='college'
                                value={formState.college}
                                onChange={handleChange}
                                disabled={!isEditable}
                            />
                        </label>
                        <label>
                            <p>Department:</p>

                            <input
                                className={styles.glow}
                                type='text'
                                name='dept'
                                value={formState.dept}
                                onChange={handleChange}
                                disabled={!isEditable}
                            />
                        </label>
                        <label>
                            <p>Year:</p>

                            {/* <input className={styles.glow} type="number" name="year" value={formState.year} onChange={handleChange} disabled={!isEditable} /> */}
                            <select
                                value={formState.year}
                                className='w-full border-b py-1 focus:outline-none focus:border-b-2 transition-colors peer bg-transparent text-white profileYearInput'
                                onChange={handleChange}
                                disabled={!isEditable}
                            >
                                <option className='text-black' value='1'>
                                    First
                                </option>
                                <option className='text-black' value='2'>
                                    Second
                                </option>
                                <option className='text-black' value='3'>
                                    Third
                                </option>
                                <option className='text-black' value='4'>
                                    Fourth
                                </option>
                                <option className='text-black' value='5'>
                                    Other
                                </option>
                            </select>
                        </label>
                        <button
                            className={styles.button_49}
                            role='button'
                            onClick={handleEditClick}
                        >
                            {loading ? (
                                <BeatLoader color='rgb(110, 74, 139)' />
                            ) : isEditable ? (
                                'SAVE'
                            ) : (
                                'EDIT'
                            )}
                        </button>
                    </div>
                </div>

                {/* Campus Ambassador Referral section --------------------------- */}
                {referralCode && <div className={styles.ambassadorCard}>
                    <h2>Campus Ambassador</h2>
                    <p>
                        Hey, Congrats! you are selected as a Campus Ambassador
                    </p>

                    <div className={styles.shareDiv}>
                        <div className={styles.referralBox}>
                            <p>Your referral code: {referralCode}</p>
                        </div>
                        <button className={styles.referralBox} onClick={shareReferralCode}>
                            <SiWhatsapp className={styles.whatsappIcons}/>
                        </button>
                    </div>

                    <div className={styles.referralBox}>You have referred {referredFriends.length} {referredFriends.length <= 1 ? 'friend' : 'friends'}</div>
                </div>}


                {/* User: Referral Form Section ------------------------------------- */}
                {!referralCode && <div className={styles.ambassadorCard}>
                    <h2>Referral</h2>
                    {campusAmbassador===undefined &&
                        <>
                            <p>Do you have any referral?</p>
                            <div>
                                <input
                                    type='text'
                                    placeholder='Enter the referral code'
                                    value={referCode}
                                    onChange={e => setReferCode(e.target.value)}
                                />
                                <button onClick={handleSubmitReferral}>
                                    {loading ? <BeatLoader color='#ffffff' /> : 'Enter'}
                                </button>
                            </div>
                        </>
                    }
                    {
                        campusAmbassador && 
                        <>
                            <p>Hey, see who referred you in Srijan'24</p>
                            <p className={styles.ambassadorMessage}>Hey! You are referred by {campusAmbassador}</p>
                        </>
                    }
                </div>}
            </div>
        </div>
    )
}

export default AuthHOC(page)
