import './AutoScrollingEvents.css'
const AutoScrollingEvents = () => {
    return (
        <div>
            <div id='event-scroll' className='flex flex-col items-center'>
                <div
                    id='event-scroll-30'
                    className='scrolling-text bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text'
                >
                    30+
                </div>
                <div
                    id='event-scroll-coding'
                    className='scrolling-text bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text'
                >
                    Coding
                </div>
                <div
                    id='event-scroll-management'
                    className='scrolling-text bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text'
                >
                    Management
                </div>
                <div
                    id='event-scroll-finance'
                    className='scrolling-text bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text'
                >
                    Finance
                </div>
                <div
                    id='event-scroll-gaming'
                    className='scrolling-text bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text'
                >
                    Gaming
                </div>
                <div
                    id='event-scroll-robotics'
                    className='scrolling-text bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text'
                >
                    Robotics
                </div>
            </div>
        </div>
    )
}
export default AutoScrollingEvents
