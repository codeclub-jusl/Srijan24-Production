import EventPage from '@/components/EventComponents/EventPage'
import React from 'react'

const Watchlisted = () => {
  return (
    <div>
        <EventPage eventsId={['008']} pageType='Watchlisted Events'/>
    </div>
  )
}

export default Watchlisted