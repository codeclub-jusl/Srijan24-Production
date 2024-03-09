'use client'
import EventAdminHOC from '@/hoc/EventAdminHOC'
import SuperAdmins from '@/utils/SuperAdmins'
import { getAllEvents, getEventById, getEventIdsByOrganizerEmail } from '@/utils/event'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const page = () => {
    const user = useSelector(state => state.userReducer.user)
    const eventIds = getEventIdsByOrganizerEmail(user && user.email)
    const [events, setEvents] = useState([])

    useEffect(() => {
        let e = []
        for (let i = 0; i < eventIds.length; i++) {
            const event = getEventById(eventIds[i])
            if (event) e.push(event)
        }
        setEvents(e)

        if(SuperAdmins.includes(user && user.email)) {
            setEvents(getAllEvents())
        }
    }, [])
    // console.log(eventIds);

    return (
        <div
            style={{
                background: `linear-gradient(to bottom right, black, ${'#1E5128'}, black)`,
            }}
        >
            <div
                style={{
                    minHeight: '100vh',
                    padding: '20px',
                    color: 'white',
                    fontFamily: 'Arial, sans-serif',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
                className='bg-[url(/images/about/about.png)] '
            >
                <h1 className=' text-[1.5rem] md:text-[2rem] font-bold'>
                    Your Events
                </h1>

                <div
                    style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        maxWidth: '1200px',
                        width: '100%',
                    }}
                >
                    {events.map((event, index) => (
                        <Link
                            href={`/admin/events/${event.eventId}`}
                            key={index}
                            className='p-10 '
                        >
                            <div className='relative max-w-xs overflow-hidden rounded-2xl shadow-lg group cursor-pointer'>
                                <img
                                    src={event.eventPoster}
                                    alt=''
                                    className='w-full h-auto transition-opacity duration-500 group-hover:opacity-75'
                                />
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default EventAdminHOC(page)
