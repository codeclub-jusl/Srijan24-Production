'use client'

import SuperAdmins from '@/utils/SuperAdmins'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

const SuperAdminHOC = Component => {
    return () => {
        const router = useRouter()
        const user = useSelector(state => state.userReducer.user)

        useEffect(() => {
            if (user) {
                if (!SuperAdmins.includes(user.email)) {
                    router.back()
                }
            } else {
                router.push('/login')
            }
        }, [])

        return <Component />
    }
}

export default SuperAdminHOC
