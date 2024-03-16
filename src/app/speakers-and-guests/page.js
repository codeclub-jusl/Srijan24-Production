import OverallNav from '@/components/OverallNav/OverallNav'
import React from 'react'

const page = () => {
    const images = ['/images/speakers/Amitabh_singh.jpeg', '/images/speakers/GOURAV_SEN.png']

    return (
        <div
            style={{
                background: `linear-gradient(to bottom right, black, ${'#1E5128'}, black)`,
            }}
        >
            <OverallNav />
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
                <div className='w-full h-[13rem] md:h-[18rem] bg-gray-400 bg-opacity-5 backdrop-filter backdrop-blur-md text-white font-clash tracking-wide font-black flex flex-col items-center justify-center shadow-2xl'>
                    <img
                        className=' top-0 left-0 right-0 bottom-0 w-[10rem] mb-4 md:w-[15rem] md:mb-6
                '
                        src='/assets/Srijan%20logo%20copy.png'
                        alt=''
                    />
                    <p className=' text-[1.5rem] tracking-wider md:text-[2rem] '>
                        Speakers and Guests
                    </p>
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
                    {images.map((image, index) => (
                        <div key={index} className='p-10 '>
                            <div className='relative max-w-xs overflow-hidden rounded-2xl shadow-lg group'>
                                <img
                                    src={image}
                                    alt=''
                                    className='w-full h-auto transition-opacity duration-500 group-hover:opacity-75'
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default page
