import workshops from './AllWorkshops'; // Assuming the JavaScript file containing the events array is named eventsData.js and is located in the same directory

export const getWorkshopById = (id) => {
    const workshop = workshops.find(item => item.workshopId === id);
    // console.log(id);
    return workshop;
}

export const getAllWorkshops = () => {
    return workshops;
}
