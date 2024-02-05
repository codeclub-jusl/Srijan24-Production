'use client'

import Logout from '@/components/Logout'
import AuthHOC from '@/hoc/AuthHOC'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

const page = () => {
    const router = useRouter()
    const user = useSelector(state => state.userReducer.user)

    return (
        <div>
            <p>Welcome, {user && user.name}</p>
            <Logout />
        </div>
    )
}

export default AuthHOC(page)
