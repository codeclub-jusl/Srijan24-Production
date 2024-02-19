import React from 'react'
import './EventCenterpiece.css'
export default ({PageType}) => {
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
                {PageType}
            </p>
        </div>
       
    )
}
