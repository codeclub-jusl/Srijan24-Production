'use client'
import EventPage from '@/components/EventComponents/EventPage'
import UserHOC from '@/hoc/UserHOC'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
const Registered = () => {
    const user = useSelector(state => state.userReducer.user)
    const userRegistered = user.events.registered
    const [eventsId, setEventsId] = useState([])

    useEffect(() => {
      let arr = []
      for (let i = 0; i < userRegistered.length; i++) {
          if (userRegistered[i].status === 'registered') {
              arr.push(userRegistered[i].eventId)
          }
      }
      setEventsId(arr)
    }, [user])

    return (
        <div>
            <EventPage eventsId={eventsId} pageType='Registered Events' bgColor="#052e16" />
        </div>
    )
}

export default UserHOC(Registered)