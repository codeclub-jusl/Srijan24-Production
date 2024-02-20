'use client'

import { auth, db } from '@/firebase/config'
import { loginUser, logoutUser } from '@/store/userSlice'
import { doc, getDoc } from 'firebase/firestore'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const AuthHOC = Component => {
    return () => {
        const router = useRouter()
        const dispatch = useDispatch()
        const [user, setUser] = useState(null)

        useEffect(() => {
            const unsubscribe = auth.onAuthStateChanged(async authUser => {
                if (authUser && authUser.emailVerified) {
                    const userRef = doc(db, 'users', authUser.email)
                    const userSnap = await getDoc(userRef)

                    if (userSnap.exists()) {
                        const userData = userSnap.data()

                        setUser({
                            ...userData,
                            emailVerified: authUser.emailVerified,
                        })

                        dispatch(
                            loginUser({
                                ...userData,
                                emailVerified: authUser.emailVerified,
                            }),
                        )

                        // console.log("auth hoc");
                    } else {
                        dispatch(logoutUser())
                        router.push('/login')
                    }
                } else {
                    dispatch(logoutUser())
                    router.push('/login')
                }
            })

            return () => unsubscribe()
        }, [router])

        if (!user) {
            return null
        }

        // const user = useSelector(state => state.userReducer.user)
        // if (!user || !user.emailVerified) {
        //     router.push('/login')
        // }

        return <Component />
    }
}

export default AuthHOC
