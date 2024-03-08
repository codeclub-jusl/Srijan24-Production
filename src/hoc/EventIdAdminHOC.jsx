'use client'

import SuperAdmins from '@/utils/SuperAdmins'
import { getEventIdsByOrganizerEmail } from '@/utils/event'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

const EventIdAdminHOC = Component => {
    return ({ params }) => {
        const { event_id } = params
        const router = useRouter()
        const user = useSelector(state => state.userReducer.user)

        useEffect(() => {
            if (user) {
                const eventIds = getEventIdsByOrganizerEmail(user.email)
                if (
                    (eventIds.length === 0 || !eventIds.includes(event_id)) &&
                    !SuperAdmins.includes(user.email)
                ) {
                    router.back()
                }
            } else {
                router.push('/login')
            }
        }, [])

        return <Component params={params} />
    }
}

export default EventIdAdminHOC
