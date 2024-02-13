import { auth, db } from '@/firebase/config'
import { loginUser } from '@/store/userSlice'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { doc, getDoc, setDoc } from 'firebase/firestore'
import React from 'react'
import { useDispatch } from 'react-redux'

const GoogleSignIn = ({ robotActive }) => {
    const dispatch = useDispatch()

    const handleClick = () => {
        const googleProvider = new GoogleAuthProvider()

        signInWithPopup(auth, googleProvider).then(async userCredentials => {
            const userRef = doc(db, 'users', userCredentials.user.email)
            const userSnap = await getDoc(userRef)

            if (!userSnap.exists()) {
                // console.log(userCredentials)

                await setDoc(doc(db, 'users', userCredentials.user.email), {
                    name: userCredentials.user.displayName,
                    email: userCredentials.user.email,
                    phone: '',
                    college: '',
                    dept: '',
                    year: '',
                    profilePicUrl: '',
                })

                dispatch(
                    loginUser({
                        name: userCredentials.user.displayName,
                        email: userCredentials.user.email,
                        phone: '',
                        college: '',
                        dept: '',
                        year: '',
                        emailVerified: userCredentials.user.emailVerified,
                    }),
                )
            }
        })
    }

    return (
        <button
            className='w-full bg-[#2e0d36]  text-[#f5c9ff]  text-md p-2 rounded-lg mb-6'
            disabled={!robotActive}
            onClick={handleClick}
        >
            <img
                src='/images/google.png'
                alt='img'
                className='w-6 h-6 inline mr-2'
            />
            Sign in with Google
        </button>
    )
}

export default GoogleSignIn
