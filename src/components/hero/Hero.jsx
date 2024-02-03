import React from 'react'
import './style.css'
import Image from 'next/image'
import TextAnimation from './Animation/TextAnimation'
const Hero = () => {
    return (
        <div className='container'>
            <div className='w-[307px] h-[378px] bg-zinc-100 rounded-tl-[175px] rounded-tr-[175px]'>
                <img src='/assets/Subtract.png' alt='' />
                <div className="icon">
                <img src='/assets/Srijan logo.png' alt='' />
                </div>
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
                <div>
                    <TextAnimation/>
                </div>
                <div className='explore2'>events</div>
            </div>
            <div className=''></div>
        </div>
    )
}

export default Hero
