'use client'

import { auth, db } from '@/firebase/config'
import { loginUser, logoutUser } from '@/store/userSlice'
import { doc, getDoc, onSnapshot } from 'firebase/firestore'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import isEqual from 'lodash/isEqual'

const AuthHOC = Component => {
    return () => {
        const router = useRouter()
        const dispatch = useDispatch()
        const [user, setUser] = useState(null)
        const reduxUser = useSelector(state => state.userReducer.user)

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

                        const authTokenID = await authUser.getIdToken()
                        dispatch(
                            loginUser({
                                ...userData,
                                authTokenID: authTokenID,
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

            const reduxUserEmail = reduxUser ? reduxUser.email : ''

            if (reduxUserEmail !== '') {
                const unsub = onSnapshot(
                    doc(db, 'users', reduxUserEmail),
                    snapshot => {
                        if (snapshot.exists()) {
                            const currentUserData = snapshot.data()
                            const currentUser = {
                                ...currentUserData,
                                emailVerified: reduxUser.emailVerified,
                            }

                            dispatch(
                                loginUser({
                                    ...reduxUser,
                                    ...currentUser,
                                }),
                            )

                            setUser({
                                ...reduxUser,
                                ...currentUser,
                            })
                        }
                    },
                    error => {
                        console.log(err)
                    },
                )

                return () => {
                    unsub()
                }
            }

            // console.log(user);

            return () => {
                unsubscribe()
            }
        }, [router])

        if (!user) {
            return null
        }

        return <Component propsUser={user} />
    }
}

export default AuthHOC
