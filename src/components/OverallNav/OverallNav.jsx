"use client"
import styles from './overallNav.module.css';
import Link from 'next/link'
import { Montserrat } from 'next/font/google'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { notification } from 'antd';
import { doc, updateDoc } from 'firebase/firestore';
import { auth, db, storage } from '@/firebase/config';
import { signOut } from 'firebase/auth';
import { loginUser, logoutUser } from '@/store/userSlice';
import { useRouter } from 'next/navigation';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { set } from 'firebase/database';
const montserrat = Montserrat({ subsets: ['latin'] })
export default function OverallNav() {
    /*const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const controlNavbar = (e)=>{
        if(e.currentTarget.scrollTop > lastScrollY){
            setShowNavbar(false);
        }
        else{
            setShowNavbar(true);
        }
        setLastScrollY(e.currentTarget.scrollTop);
    }*/
    const dispatch = useDispatch();
    const router = useRouter();
    const user = useSelector(state => state.userReducer.user);
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
        <div>
            <div className={styles.box}>
                <Link href="/"><img src="/assets/Srijan logo.png" alt="logo"></img></Link>
            </div>
            <div className={user ? styles.box1 : styles.box2}>
                <Link href="/events"><p>Events</p></Link>
                {user ? (
                    <Link href="/dashboard"><p>Dashboard</p></Link>
                ) : ""}
                {user ? (
                    <button onClick={handleLogout}><p>Logout</p></button>
                ) : (
                    <Link href="/login"><p>Login</p></Link>
                )}
            </div>
        </div>
    )
}