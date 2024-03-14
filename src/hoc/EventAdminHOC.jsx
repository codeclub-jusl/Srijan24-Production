'use client'

import SuperAdmins from '@/utils/SuperAdmins'
import { getEventIdsByOrganizerEmail } from '@/utils/event'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

const EventAdminHOC = Component => {
    return () => {
        const router = useRouter()
        const user = useSelector(state => state.userReducer.user)

        useEffect(() => {
            if (user) {
                const eventIds = getEventIdsByOrganizerEmail(user.email)
                if (
                    eventIds.length === 0 &&
                    !SuperAdmins.includes(user.email)
                ) {
                    router.push('/')
                }
            } else {
                router.push('/login')
            }
        }, [])

        return <Component />
    }
}

export default EventAdminHOC
