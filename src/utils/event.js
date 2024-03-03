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
    for (const data of EventOrganizers) {
        // console.log(data);
        if (data.organizers.includes(email)) {
            eventIds.push(data.eventId)
        }
    }
    return eventIds
}
