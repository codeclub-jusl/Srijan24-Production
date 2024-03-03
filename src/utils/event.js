import events from './AllEvents'
import EventOrganizers from './EventOrganizers'

export const getEventById = id => {
    const event = events.find(item => item.eventId === id)
    // console.log(id);
    return event
}

export const getAllEvents = () => {
    return events
}

export const getEventsByOrganizerEmail = email => {
    const eventIds = []
    for (const eventId in EventOrganizers) {
        if (organizer[eventId].includes(email)) {
            eventIds.push(eventId)
        }
    }
    return eventIds
}
