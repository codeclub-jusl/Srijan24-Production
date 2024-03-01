import React from 'react'
import Link from 'next/link'

import OverallNav from '@/components/OverallNav/OverallNav'

const page = () => {
    const Workshop=[
        {
            eventId:"Finance Workshop",
            eventeventPoster:"/images/workshops/FinanceMa.png",
            eventDescription:`Everything a newbie needs to know to get started with Trading and someone already in a field needs to know to consolidate his strategies

            Fundamental and technical Analysis and more 
            
            Hands on experience and learning about different tools like Screener and more 
            
            Financial Structuring of a company
            
            Deep Dive into personal and corporate finance`,
            date:["March 9, 2024","11:00AM - 5:00 PM"],
            fees : 450 ,
            eventCoordinators: [
                'Dipayan [ 7044836127 ]',
                'Arindam [ 8697367852 ]', 
            ],
            venue: `Jadavpur University`,
            
        },
        {

        }
        ,
        {

        }
    ];
    const renderWorkshop = () =>{
        return Workshop.map((eventData, index) => (
            <div key={index} className='p-10 '>
                <Link href={`/workshop/${eventData.eventId}`}>
                    <div className='cursor-pointer relative max-w-md overflow-hidden rounded-2xl shadow-lg group'>
                    <img
                        src={eventData.eventeventPoster}
                        alt=''
                        className='w-full h-auto transition-opacity duration-500 group-hover:opacity-75'
                    />
                    </div>
                </Link>
            </div>
        ))
    }
    
  return (
    <div>
        <div style={{background: `linear-gradient(to bottom right, black, #151e3d , black)`}}>
            <OverallNav></OverallNav>
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
                <div className='w-full h-[15rem] md:h-[20rem] bg-gray-400 bg-opacity-5 backdrop-filter backdrop-blur-md text-white font-clash tracking-wide font-black flex flex-col items-center justify-center shadow-2xl'>
                    <img
                        className=' top-0 left-0 right-0 bottom-0 w-[10rem] mb-4 md:w-[15rem] md:mb-6
                        '
                        src='/assets/Srijan%20logo%20copy.png'
                        alt=''
                    />
                    <p className=' text-[1.5rem] tracking-wider md:text-[2rem] '>
                        Workshop
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
                    {renderWorkshop()}
                </div>



            </div>
        </div>
        
       
    </div>
  )
}

export default page