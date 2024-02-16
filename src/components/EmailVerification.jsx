import { auth } from '@/firebase/config'
import { signOut } from 'firebase/auth'
import { useRouter } from 'next/navigation'
import React from 'react'

const EmailVerification = ({ isVisible }) => {
    if (!isVisible) return null

    const router = useRouter()

    const handleClick = e => {
        e.preventDefault()
        signOut(auth)
        router.push('/login')
    }

    return (
        <div className='fixed inset-0 bg-opacity-25 bg-black backdrop-blur-sm flex justify-center items-center z-20'>
            <div className='w-[80vw] sm:w-[40vw] flex flex-col bg-[#f5c9ff] items-center justify-center text-center p-10 gap-10 rounded-lg'>
                <p>
                    Email verification mail sent. Please verify your email
                    before logging in to your account.
                </p>
                <button
                    onClick={handleClick}
                    className='bg-[#2e0d36]  text-[#f5c9ff]  text-md p-2 rounded-lg'
                >
                    Log in
                </button>
            </div>
        </div>
    )
}

export default EmailVerification
