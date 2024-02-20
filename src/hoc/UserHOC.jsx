'use client'

import { db } from '@/firebase/config'
import { loginUser } from '@/store/userSlice'
import { doc, onSnapshot } from 'firebase/firestore'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const UserHOC = Component => {
    return ({ params }) => {
        const dispatch = useDispatch()
        const router = useRouter()
        const user = useSelector(state => state.userReducer.user)

        useEffect(() => {
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
        }, [])

        return <Component params={params} />
    }
}

export default UserHOC
