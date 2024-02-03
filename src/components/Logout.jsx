import { auth } from '@/firebase/config'
import { logoutUser } from '@/store/userSlice'
import { signOut } from 'firebase/auth'
import React from 'react'
import { useDispatch } from 'react-redux'

const Logout = () => {
    const dispatch = useDispatch()

    const handleLogout = () => {
        signOut(auth)
        dispatch(logoutUser())
    }

    return (
        <div>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default Logout
