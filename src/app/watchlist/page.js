'use client'
import EventPage from '@/components/EventComponents/EventPage'
import AuthHOC from '@/hoc/AuthHOC'
import UserHOC from '@/hoc/UserHOC'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
const Watchlisted = () => {
    const user = useSelector(state => state.userReducer.user)
    const userWatchlist = user ? user.events.watchlist : []
    const [eventsId, setEventsId] = useState(userWatchlist)

    useEffect(() => {
        setEventsId(user ? user.events.watchlist : [])
    }, [user])

    return (

        <div>
            <EventPage eventsId={eventsId} pageType='Watchlisted Events' bgColor="#082f49" />
        </div>
    )
}

export default AuthHOC(Watchlisted)
