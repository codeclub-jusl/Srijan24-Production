'use client'
import EventPage from '@/components/EventComponents/EventPage'
import { getAllEvents } from '@/utils/event'
import React, { useEffect, useState } from 'react'

const page = () => {
    const [eventsId, setEventsId] = useState([])

    useEffect(() => {
        let ids = []
        const events = getAllEvents()

        for (let i = 0; i < events.length; i++) {
            ids.push(events[i].eventId)
        }
        setEventsId(ids)
    }, [])

    // console.log(eventsId);

    return (
        <div>
            <EventPage eventsId={eventsId} pageType='Events' bgColor="slate" />
        </div>
    )
}

export default page
