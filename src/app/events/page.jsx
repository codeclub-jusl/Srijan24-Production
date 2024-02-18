'use client'
import React, { useState } from 'react'
import EventBox from '@/components/EventComponents/EventBox'
import Link from 'next/link'
import Navbar from '@/components/Navbar/Navbar'
import EventCenterpiece from '@/components/EventComponents/EventCenterpiece'

const Events = () => {
    const eventData = {
        eventId: '007',
        eventName: "Climbon'23",
        eventDate: {
            prelims: ['April 15, 2023'],
            finals: 'April 16, 2023',
        },
        eventPoster: '/assets/events/CLIMBON.png',
        eventType: 'misc',
        eventHashtags: ['Mountaineering', 'Climbing'],
        eventCoordinators: [
            'Krishna Mittal  [ 8540062753 ]',
            'Urwah Jawaid [ 9103158993 ]',
            'Ashish Kumar Mandal [ 7294925744 ]',
        ],
        minMembers: 1,
        maxMembers: 1,
        eventDescription: [
            'CLIMBON is an artificial rock climbing competition organized by Jadavpur University Mountaineering And Hiking Club every year. ',
        ],
        eventRules: [
            'Climbing routes: The competition may have different climbing routes with varying levels of difficulty, which are marked with colored holds. Climbers must follow the designated route and only use the marked holds. Touching any other part of the wall or using any other holds is not allowed and may result in disqualification.',
            'Timing: Each climber has a set amount of time to complete the route. The time limit may vary depending on the difficulty level of the route. If the climber does not complete the route within the specified time, their score will be based on the furthest point they reached.',
            'Scoring: The score is determined by the number of holds the climber reaches and touches during the climb. Climbers are awarded points for each hold they touch. The climber with the highest score in their category wins.',
            'Categories: Climbers may be grouped into different categories based on their gender. Each category may have different routes and scoring criteria.',
            "Safety: Safety is of utmost importance in artificial rock climbing contests. Climbers must follow all safety guidelines and instructions provided by event organizers. Judges may stop a climber's ascent if they feel that the climber is in danger or not following safety rules.",
            'Sportsmanship: Climbers are expected to display good sportsmanship and respect for fellow competitors. Any unsportsmanlike behavior or actions that endanger others may result in disqualification.',
            'Equipment: We will provide all the necessary equipment for the competition, but climbers are encouraged to wear well-fitting shoes with a thin sole and good grip, such as PT shoes.',
        ],
        eventRuleLink:
            'https://drive.google.com/file/d/1LUraTyqbn8HVO2_sKE_Dh7nvUfi_hJas/view',
    }
    const eventDataArray = Array.from({ length: 30 }, () => eventData)

    const [filteredEvents, setFilteredEvents] = useState([])

    const filterEventsByType = eventType => {
        const filtered = eventDataArray.filter(
            event => event.eventType === eventType,
        )
        setFilteredEvents(filtered)
    }

    const renderEvents = () => {
        const eventsToRender =
            filteredEvents.length > 0 ? filteredEvents : eventDataArray
        return eventsToRender.map((eventData, index) => (
            <div key={index} className='p-10 '>
                <Link href={`/events/${eventData.eventId}`}>
                    <div className='cursor-pointer'>
                        <EventBox imgSrc={eventData.eventPoster}>
                            <h3 className='text-xl font-bold mb-2'>
                                {eventData.eventName}
                            </h3>
                            <p>{eventData.eventDescription}</p>
                        </EventBox>
                    </div>
                </Link>
            </div>
        ))
    }

    // Array of categories
    const categories = [
        'CULTURAL',
        'TECHNICAL',
        'GAMES',
        'CE DEPT',
        'CSE DEPT',
        'EEE DEPT',
        'WORKSHOP',
        'MISC',
    ]

    return (
        <div className='bg-gradient-to-br from-black via-sky-950 to-black'>
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
                <EventCenterpiece />
                <div
                    id='event_categories'
                    className='text-[1rem] p-8 font-semibold font-chakra flex flex-wrap gap-4 md:gap-12 justify-center text-white'
                >
                    {/* Render categories dynamically */}
                    {categories.map((category, index) => (
                        <span
                            key={index}
                            className='rounded-full px-4 py-[.3rem] hover:bg-white/20 transition-all duration-500 ease-in-out'
                            onClick={() =>
                                filterEventsByType(category.toLowerCase())
                            }
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
                    {/* Render events */}
                    {renderEvents()}
                </div>
            </div>
        </div>
    )
}

export default Events
