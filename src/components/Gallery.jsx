import React from 'react'

const Gallery = () => {
    return (
        <section className='gallery relative bg-[#030022] h-fit sm:h-screen w-full flex flex-col items-center justify-center p-12'>
            <div className='relative grid gap-4 sm:grid-cols-4 sm:grid-rows-2 w-full h-fit rounded-xl overflow-hidden'>
                <div className='realtive w-full rounded-xl h-64 bg-white sm:col-span-2'>
                    Hello
                </div>
                <div className='realtive w-full rounded-xl h-64 bg-white'>
                    Hello
                </div>
                <div className='realtive w-full rounded-xl h-64 sm:h-[33rem] bg-white sm:row-start-1 sm:row-end-3'>
                    Hello
                </div>
                <div className='realtive w-full rounded-xl h-64 bg-white'>
                    Hello
                </div>
                <div className='realtive w-full rounded-xl h-64 bg-white sm:col-span-2'>
                    Hello
                </div>
            </div>
        </section>
    )
}

export default Gallery
