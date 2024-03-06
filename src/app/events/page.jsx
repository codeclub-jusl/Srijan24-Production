'use client'
import EventPage from '@/components/EventComponents/EventPage'
import { getAllEvents } from '@/utils/event'
import React, { useEffect, useState } from 'react'
import Navbar from '@/components/Navbar/Navbar'
import OverallNav from '@/components/OverallNav/OverallNav'
const page = () => {
    const [eventsId, setEventsId] = useState([])

    useEffect(() => {
        let ids = []
        const events = getAllEvents()

        for (let i = events.length-1; i >=0 ; i--) {
            ids.push(events[i].eventId)
        }
        setEventsId(ids)
    }, [])

    // console.log(eventsId);

    return (
        <div>
            <EventPage eventsId={eventsId} pageType='Events' bgColor="#0f172a" />
        </div>
    )
}

export default page
