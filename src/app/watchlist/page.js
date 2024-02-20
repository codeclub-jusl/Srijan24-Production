'use client'
import EventPage from '@/components/EventComponents/EventPage'
import UserHOC from '@/hoc/UserHOC'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const Watchlisted = () => {
    const user = useSelector(state => state.userReducer.user)
    const userWatchlist = user.events.watchlist
    const [eventsId, setEventsId] = useState(userWatchlist)

    useEffect(() => {
        setEventsId(user.events.watchlist)
    }, [user])

    return (
        <div>
            <EventPage eventsId={eventsId} pageType='Watchlisted Events' />
        </div>
    )
}

export default UserHOC(Watchlisted)
