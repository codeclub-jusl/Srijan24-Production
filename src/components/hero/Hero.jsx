import React from 'react'
import './style.css'
import Image from 'next/image'
import TextAnimation from './Animation/TextAnimation'
const Hero = () => {
    return (
        <>
        <div className="pb-6 sm:pb-8 lg:pb-12">
  <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
    <section className="flex flex-col items-center">
      <div className="flex max-w-xl flex-col items-center pb-16 pt-8 lg:pb-48 lg:pt-32">
        <div className="image-container text-center mb-4 md:mb-6">
          <img src='/assets/Subtract.png' alt=''className='base-image'/>
          <img src='/assets/Srijan logo.png' alt=''className='overlay-image' />
          <div className='circle'>
                    <img src='/assets/Vector.png' alt=''  width={193.93}  height={194.09} />
                </div>
        </div>

        <h1 className="mb-8 text-4xl font-bold text-black sm:text-5xl md:mb-12 md:text-6xl">Explore Our</h1>
        <TextAnimation/>
        <h2 className="mb-8 text-4xl font-bold text-black sm:text-5xl md:mb-12 md:text-6xl">events</h2>
          <a href="#" className="inline-block text-orange-200:rose:600 md:text-base">21st March-24th March</a>
        </div>
        <Countdown/>
    </section>
  </div>
</div>
        </>
    )
}

export default Hero
