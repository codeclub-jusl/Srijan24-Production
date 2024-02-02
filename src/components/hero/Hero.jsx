import React from 'react'
import './style.css'
const Hero = () => {
    return (
        <div className='container'>
            <div className="w-[307px] h-[378px] bg-orange-400 rounded-tl-[175px] rounded-tr-[175px]">
                <img src='../../../public/assets/Srijan.png'width={110} height={70} alt='' />
            {/* 124vh is the height of the page */}

                <div className='circle'>
                    <img src='../../../public/assets/Vector.png' alt='' />
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
