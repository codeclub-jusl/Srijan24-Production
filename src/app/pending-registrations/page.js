'use client'
import EventPage from '@/components/EventComponents/EventPage'
import AuthHOC from '@/hoc/AuthHOC'
import UserHOC from '@/hoc/UserHOC'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
const Pending = () => {
    const user = useSelector(state => state.userReducer.user)
    const userRegistrations = user ? user.events.registered : []
    const [eventsId, setEventsId] = useState([])

    useEffect(() => {
        let arr = []
        for (let i = 0; i < userRegistrations.length; i++) {
            if (userRegistrations[i].status === 'pending') {
                arr.push(userRegistrations[i].eventId)
            }
        }
        setEventsId(arr)
    }, [user])

    return (
        <div>
            <EventPage eventsId={eventsId} pageType='Pending Registrations' bgColor="#4c0519" />
        </div>
    )
}

export default AuthHOC(Pending)
