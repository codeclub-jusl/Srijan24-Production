import React from 'react'
import './style.css'
import Image from 'next/image'
const Hero = () => {
    return (
        <div className='container'>
            <div className='w-[307px] h-[378px] bg-orange-400 rounded-tl-[175px] rounded-tr-[175px]'>
                <img src='/assets/Srijan logo.png' alt='' />
                {/* 124vh is the height of the page */}

                <div className='circle'>
                    <Image
                        src='/assets/Vector.png'
                        alt=''
                        width={193.93}
                        height={194.09}
                    />
                </div>
            </div>
            <div className='events'>
                <div className='explore'>Explore our</div>
                <div></div>
                <div className='explore2'>events</div>
            </div>
            <div className=''></div>
        </div>
    )
}

export default Hero
