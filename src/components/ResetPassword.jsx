'use client'

import { auth, db } from '@/firebase/config'
import { notification } from 'antd'
import { sendPasswordResetEmail } from 'firebase/auth'
import { doc, getDoc } from 'firebase/firestore'
import { useState, useEffect } from 'react'

export default function ResetPassword({ isVisible, onClose }) {
    const [email, setEmail] = useState('')
    const [emailError, setEmailError] = useState(false)

    useEffect(() => {
        if (!isVisible) {
            setEmail('')
            setEmailError(false)
        }
    }, [isVisible])

    if (!isVisible) return null

    const validateEmail = () => {
        const re =
            /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if (!re.test(email)) {
            setEmailError(true)
        } else {
            setEmailError(false)
        }
    }

    const handleClose = e => {
        if (e.target.id === 'wrapper') {
            onClose()
        }
    }

    const handleClick = async () => {
        validateEmail()

        if (emailError) {
            return
        } else {
            await sendPasswordResetEmail(auth, email)
                .then(async () => {
                    // console.log(email);

                    const userRef = doc(db, 'users', email)
                    const userSnap = await getDoc(userRef)

                    if (userSnap.exists()) {
                        notification['success']({
                            message: `Password reset mail sent`,
                            duration: 3,
                        })
                    } else {
                        notification['error']({
                            message: `Email not registered`,
                            duration: 3,
                        })
                    }

                    setEmail('')
                })
                .catch(err => {
                    notification['error']({
                        message: `Something went wrong. Try again later.`,
                        duration: 3,
                    })
                    console.log(err)
                })
        }
    }

    return (
        <div
            className='fixed inset-0 bg-opacity-25 bg-black backdrop-blur-sm flex justify-center items-center z-20'
            id='wrapper'
            onClick={handleClose}
        >
            <div className='w-[30vw] h-[35vh] flex flex-col bg-[#f5c9ff] items-center justify-center relative rounded'>
                <button
                    className='text-black text-sm absolute right-2 top-2'
                    onClick={() => onClose()}
                >
                    x
                </button>
                <h3 className='text-lg mb-2'>Forgot Your Password?</h3>
                <p className='text-xs mb-4'>
                    we will email you a link to reset your password
                </p>
                <div className='relative w-[60%] py-4 flex flex-col justify-center'>
                    <input
                        type='text'
                        value={email}
                        className=' w-full border-b border-[#2e0d36] py-1 focus:outline-none focus:border-b-2 transition-colors peer bg-transparent'
                        autoComplete='off'
                        placeholder=''
                        onChange={e => {
                            setEmail(e.target.value)
                        }}
                    />
                    <label
                        htmlFor='username'
                        className='absolute left-0 top-1 cursor-text text-xs peer-focus:text-xs peer-placeholder-shown:text-base peer-focus:-top-3 transition-all'
                    >
                        Your Email
                    </label>
                    {emailError && (
                        <span className='text-red-500 text-xs'>
                            *Invalid Email Address
                        </span>
                    )}
                </div>
                <button
                    className='w-[60%] bg-[#2e0d36]  text-[#f5c9ff]  text-md p-2 rounded-lg mb-6'
                    onClick={handleClick}
                >
                    Reset Password
                </button>
            </div>
        </div>
    )
}
