import events from './AllEvents'; // Assuming the JavaScript file containing the events array is named eventsData.js and is located in the same directory

export const getEventById = (id) => {
    const event = events.find(item => item.eventId === id);
    // console.log(id);
    return event;
}

export const getAllEvents = () => {
    return events;
}
