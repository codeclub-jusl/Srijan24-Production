'use client'
import { getEventsByOrganizerEmail } from '@/utils/event'
import { useSelector } from 'react-redux'

const Events = () => {
    const user = useSelector(state => state.userReducer.user)
    const eventIds = getEventsByOrganizerEmail(user && user.email)
    // console.log(eventIds);

    return <div>Events Page</div>
}

export default Events
