import React from 'react'
import './EventCenterpiece.css'
;() => {
    return (
        <div>
            <div className='light'>
                <div className=' box' style={{ '--i': 0 }}>
                    <div className='bulb'>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <div className='box' style={{ '--i': 1 }}>
                    <div className='bulb'>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <div className='box' style={{ '--i': 2 }}>
                    <div className='bulb'>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <div className='box' style={{ '--i': 3 }}>
                    <div className='bulb'>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <div className='box' style={{ '--i': 4 }}>
                    <div className='bulb'>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <div className='box' style={{ '--i': 5 }}>
                    <div className='bulb'>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <div className='switch'>
                    <div className='btn'></div>
                </div>
                {/* <audio
                    id='audio'
                    src='click.mp3'
                    frameBorder='0'
                    autoPlay={false}
                ></audio> */}
            </div>
        </div>
    )
}
export default () => {
    return (
        // <div className='w-full '>
        <div className='w-full h-[15rem] md:h-[20rem] bg-gray-400 bg-opacity-5 backdrop-filter backdrop-blur-md text-white font-clash tracking-wide font-black flex flex-col items-center justify-center shadow-2xl'>
            <img
                className=' top-0 left-0 right-0 bottom-0 w-[10rem] mb-4 md:w-[15rem] md:mb-6
                '
                src='/assets/Srijan%20logo%20copy.png'
                alt=''
            />
            <p className=' text-[1.5rem] tracking-wider md:text-[2rem] '>
                EVENTS
            </p>
        </div>
        // </div>
    )
}
