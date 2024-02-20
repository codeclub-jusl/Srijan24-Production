'use client'
import EventPage from '@/components/EventComponents/EventPage'
import UserHOC from '@/hoc/UserHOC'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const Pending = () => {
    const user = useSelector(state => state.userReducer.user)
    const userRegistrations = user.events.registered
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
            <EventPage eventsId={eventsId} pageType='Pending Registrations' />
        </div>
    )
}

export default UserHOC(Pending)
