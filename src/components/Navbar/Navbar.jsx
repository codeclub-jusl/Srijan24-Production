"use client"
import { LiaPowerOffSolid } from 'react-icons/lia'
import { GoClock } from 'react-icons/go'
import { GoImage } from 'react-icons/go'
import { CiMail } from 'react-icons/ci'
import Link from 'next/link'
import Image from 'next/image'
import { Montserrat } from 'next/font/google'
import srijanLogoWhite from '@assets/srijanLogoRectangleWhite.png'
import { useEffect, useState } from 'react';
import AuthHOC from '@/hoc/AuthHOC';
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

function Navbar() {
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
        <nav id='Navbar' className={`w-full bg-transparent ${montserrat.className}`}>
            <div className='flex flex-row items-center bg-transparent py-2 justify-center w-full'>
                <ul className='flex flex-row justify-center items-center gap-x-16 text-white md:text-[19px] text-[22px]'>
                    <li>
                        <Link href={'/'}>Home</Link>
                    </li>
                    <li>
                        <Link href={'/events'}>Events</Link>
                    </li>
                    <li>
                        <Link href={'/dashboard'}>Dashboard</Link>
                    </li>
                    <li>
                        <button onClick={handleLogout}>Logout</button>
                    </li>
                </ul>
            </div>

            {/* <div className='bg-gradient-to-b from-[#FFFFFF66]  to-[#1B00474D] z-50 sm:h-[200px] h-[45px] fixed sm:w-[45px] w-[90vw] sm:top-[35vh] bottom-[5vh] sm:left-[5vw] left-[5vw] rounded-t-3xl rounded-b-3xl p-[2px] '>
                    <div
                        className='flex sm:flex-col flex-row h-full bg-gradient-to-b from-[#6100FF40] via-[#6100FF40] to-[#6100FF80]
                      rounded-t-3xl rounded-b-3xl justify-around gap-2 sm:py-2 -sm:px-2'
                    >
                        <Link href='#' className='my-auto mx-auto'>
                            <LiaPowerOffSolid size={35} color='#FFFFFF66' />
                        </Link>
                        <Link href='#' className='mx-auto my-auto'>
                            <GoClock size={33} color='#FFFFFF66' />
                        </Link>
                        <Link href='#' className='mx-auto my-auto'>
                            <GoImage size={35} color='#FFFFFF66' />
                        </Link>
                        <Link href='#' className='mx-auto my-auto'>
                            <CiMail
                                size={35}
                                color='#FFFFFF66'
                                style={{ strokeWidth: '0.45px' }}
                            />
                        </Link>
                    </div>
                </div> */}
        </nav>
    )
}
export default Navbar
