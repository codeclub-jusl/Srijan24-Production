'use client'
import React, { useState, useEffect } from 'react'
import EventBox from '@/components/EventComponents/EventBox'
import Link from 'next/link'
import EventCenterpiece from '@/components/EventComponents/EventCenterpiece'
import { getEventById } from '@/utils/event'
import OverallNav from '../OverallNav/OverallNav'
const EventPage = ({ eventsId, pageType, bgColor }) => {
    const [events, setEvents] = useState([])
    const [filteredEvents, setFilteredEvents] = useState([])
    const [selectedCategory, setSelectedCategory] = useState(null)

    useEffect(() => {
        const fetchData = () => {
            let fetchedEvents = []
            for (let i = 0; i < eventsId.length; i++) {
                fetchedEvents.push(getEventById(eventsId[i]))
            }
            setEvents(fetchedEvents)
        }

        fetchData()
    }, [eventsId])

    useEffect(() => {
        if (events && events.length > 0 && eventsId && eventsId.length > 0) {
            const filtered = events.filter(event =>
                eventsId.includes(event.eventId),
            )
            setFilteredEvents(filtered)
        } else {
            setFilteredEvents([])
        }
    }, [eventsId, events])

    const filterEventsByType = eventType => {
        const filteredCategoricalEvents = events.filter(
            event => event.eventType === eventType,
        )
        if (eventsId && eventsId.length > 0) {
            const filtered = filteredCategoricalEvents.filter(event =>
                eventsId.includes(event.eventId),
            )
            setFilteredEvents(filtered)
        } else {
            setFilteredEvents([])
        }
    }

    const renderEvents = () => {
        const eventsToRender = filteredEvents

        if (eventsToRender.length === 0) {
            return (
                <div className='text-white text-center mt-4'>
                    <p className='text-xl font-semibold'>No events found</p>
                    <p className='text-base mt-2'>
                        Try exploring other categories or check back later.
                    </p>
                </div>
            )
        }

        return eventsToRender.map((eventData, index) => (
            <div key={index} className='p-10 '>
                <Link href={`/events/${eventData.eventId}`}>
                    <div className='cursor-pointer'>
                        <EventBox imgSrc={eventData.eventPoster}>
                            <h3 className='text-xl font-bold mb-2'>
                                {eventData.eventName}
                            </h3>
                            <p>{eventData.eventShortDescription}</p>
                        </EventBox>
                    </div>
                </Link>
            </div>
        ))
    }

    const categories = [
        'CODING',
        'GAMING',
        'CIRCUITS & ROBOTICS',
        'BUSINESS & MANAGEMENT',
        'BRAINSTORMING',
        'MISC',
    ]

    return (
        <div style={{background: `linear-gradient(to bottom right, black, ${bgColor}, black)`}}>
            <OverallNav></OverallNav>
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
                <EventCenterpiece PageType={pageType} />
                <div
                    id='event_categories'
                    className='text-[1rem] p-8 font-semibold font-chakra flex flex-wrap gap-4 md:gap-12 justify-center text-white'
                >
                    {categories.map((category, index) => (
                        <span
                            key={index}
                            className={`rounded-full cursor-pointer px-4 py-[.3rem] hover:bg-white/20 transition-all duration-500 ease-in-out ${
                                selectedCategory === category.toLowerCase()
                                    ? 'bg-white/20'
                                    : ''
                            }`}
                            onClick={() => {
                                filterEventsByType(category.toLowerCase())
                                setSelectedCategory(category.toLowerCase())
                            }}
                        >
                            {category}
                        </span>
                    ))}
                </div>
                <div
                    style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        maxWidth: '1200px',
                        width: '100%',
                    }}
                >
                    {renderEvents()}
                </div>
            </div>
        </div>
    )
}

export default EventPage
