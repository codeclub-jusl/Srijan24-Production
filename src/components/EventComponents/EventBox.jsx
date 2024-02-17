import React from 'react';

const EventBox = ({ children, imgSrc, ...props }) => {
    return (
        <div
            {...props}
            className='relative max-w-xs overflow-hidden rounded-2xl shadow-lg group'
        >
            <img
                src={imgSrc}
                alt=''
                className='w-full h-auto transition-opacity duration-500 group-hover:opacity-75'
            />
            <div className='absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent transition-opacity duration-500 opacity-0 group-hover:opacity-100'>
                <div className='p-4 text-white'>{children}</div>
            </div>
        </div>
    );
};

export default EventBox;
