'use client'

import { auth, db } from '@/firebase/config'
import { loginUser, logoutUser } from '@/store/userSlice'
import { doc, getDoc, onSnapshot } from 'firebase/firestore'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const UserHOC = Component => {
    return ({ params }) => {
        const dispatch = useDispatch()
        const router = useRouter()
        const user = useSelector(state => state.userReducer.user)

        useEffect(() => {
            const unsubscribe = auth.onAuthStateChanged(async authUser => {
                if (authUser && authUser.emailVerified) {
                    const userRef = doc(db, 'users', authUser.email)
                    const userSnap = await getDoc(userRef)

                    if (userSnap.exists()) {
                        const userData = userSnap.data()

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
                    }
                } else {
                    dispatch(logoutUser())
                }
            })

            if (user) {
                const unsub = onSnapshot(
                    doc(db, 'users', user.email),
                    snapshot => {
                        if (snapshot.exists()) {
                            const currentUserData = snapshot.data()
                            const currentUser = {
                                ...currentUserData,
                                emailVerified: user.emailVerified,
                            }

                            dispatch(
                                loginUser({
                                    ...user,
                                    ...currentUser,
                                }),
                            )
                        }
                    },
                )

                return () => {
                    unsub()
                }
            }

            return () => {
                unsubscribe()
            }
        }, [])

        return <Component params={params} />
    }
}

export default UserHOC
