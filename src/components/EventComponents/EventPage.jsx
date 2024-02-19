'use client';
import React, { useState, useEffect } from 'react';
import EventBox from '@/components/EventComponents/EventBox';
import Link from 'next/link';
import EventCenterpiece from '@/components/EventComponents/EventCenterpiece';

const EventPage = ({ eventsId, pageType }) => {
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/assets/events/AllEventsData.json');
        const data = await response.json();
        setEvents(data);
        console.log(data);
      } catch (error) {
        console.error('Error fetching events data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
   
    if (eventsId && eventsId.length > 0) {
      const filtered = events.filter((event) => eventsId.includes(event.eventId));
      setFilteredEvents(filtered);
    } else {
      
      setFilteredEvents([]);
    }
  }, [eventsId, events]);

    const filterEventsByType = eventType => {
        const filteredCategoricalEvents = events.filter(
            event => event.eventType === eventType,
        )
        if (eventsId && eventsId.length > 0) {
            const filtered = filteredCategoricalEvents.filter((event) => eventsId.includes(event.eventId));
            setFilteredEvents(filtered);
          } 
          else {
            
            setFilteredEvents([]);
          }
    }

  const renderEvents = () => {
    const eventsToRender =
      filteredEvents.length > 0 ? filteredEvents : pageType==="Events" ? events : filteredEvents;
      
    return eventsToRender.map((eventData, index) => (
      <div key={index} className='p-10 '>
        <Link href={`/events/${eventData.eventName}`}>
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
    ));
  };

  const categories = [
    'CODING',
    'ROBOTICS',
    'GAMES',
    'FUN',
    'WORKSHOP',
    'MISC',
  ];

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
        <EventCenterpiece PageType={pageType} />
        <div
          id='event_categories'
          className='text-[1rem] p-8 font-semibold font-chakra flex flex-wrap gap-4 md:gap-12 justify-center text-white'
        >
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
          {renderEvents()}
        </div>
      </div>
    </div>
  );
};

export default EventPage;
