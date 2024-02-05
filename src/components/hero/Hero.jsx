'use client'

import React from 'react'
import { useRef, useEffect } from 'react'
import './style.css'
import TextAnimation from './Animation/TextAnimation'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import valleyWithDrops from '../../assets/valleyWithDrops.png'
import cybercityOutline from '../../assets/cybercityOutline.png'
import mascotfront from '../../assets/mascot-front.png'
import './../Home.css'
import Image from 'next/image'
import Countdown from '../Countdown'

const Hero = () => {
    const planet1 = useRef(null)
    const planet2 = useRef(null)
    const shootingStar1 = useRef(null)
    const shootingStar2 = useRef(null)
    const ufo = useRef(null)
    const trigger = useRef(null)
    const mascot = useRef(null);

    gsap.registerPlugin(ScrollTrigger)

    useEffect(() => {
        gsap.to(planet1.current, {
            rotate: 50,
            scale: 1.8,
            y: 400,
            scrollTrigger: {
                trigger: planet1.current,
                start: 'top 40%',
                end: 'bottom 10%',
                scrub: true,
                markers: false,
            },
        })
        gsap.to(planet2.current, {
            rotate: -80,
            scale: 1.5,
            y: 100,
            // translateY: "200px",
            scrollTrigger: {
                trigger: planet2.current,
                start: 'top 40%',
                end: 'bottom 10%',
                scrub: true,
                markers: false,
            },
        })
        gsap.to(ufo.current, {
            right: '75%',
            top: '80%',
            scrollTrigger: {
                trigger: ufo.current,
                start: 'top 60%',
                end: 'bottom 10%',
                scrub: 1,
                markers: false,
            },
        })
        gsap.to(mascot.current, {
            top: '50%',
            scale: 1,
            scrollTrigger: {
                trigger: ufo.current,
                start: 'top 40%',
                end: 'bottom 10%',
                scrub: true,
                markers: false,
            },
        })
        gsap.to(shootingStar1.current, {
            top: '65%',
            translateX: -30,
            scrollTrigger: {
                trigger: shootingStar1.current,
                start: 'top 60%',
                end: 'bottom 10%',
                scrub: 1,
                markers: false,
            },
        })
        gsap.to(shootingStar2.current, {
            top: '60%',
            translateX: -30,
            scrollTrigger: {
                trigger: shootingStar2.current,
                start: 'top 60%',
                end: 'bottom 10%',
                scrub: 1,
                markers: false,
            },
        })
    })

    return (
        <section className='bg-[#030022] relative' ref={trigger}>
            <img
                src='/assets/star.png'
                alt=''
                className='absolute h-full w-full'
            />

            {/* left planet -------------*/}
            <img
                src='/assets/hero-planet1.png'
                alt=''
                className='md:block absolute top-[35%] left-10 leftPlanet'
                ref={planet1}
            />

            {/* right planet ------------ */}
            <img
                src='/assets/hero-planet2.png'
                alt=''
                className='md:block absolute top-[20%] right-24 rightPlanet'
                ref={planet2}
            />


            {/* right shooting star ----------- */}
            {/* <img
                src='/assets/shootingstar.png'
                alt=''
                className='absolute top-[55%] right-10'
                ref={shootingStar1}
            /> */}

            {/* left shooting star ------------ */}
            {/* <img
                src='/assets/shootingstar.png'
                alt=''
                className='absolute top-[50%] left-1/3'
                ref={shootingStar2}
            /> */}

            {/* parallax moving ufo -----------*/}
            <img
                src='/assets/ufo.png'
                alt=''
                className='absolute top-[50%] right-[15%]'
                ref={ufo}
            />
            <div className='pb-2 sm:pb-3 lg:pb-4'>
                <div className='mx-auto max-w-screen-2xl px-4 md:px-4'>
                    <section className='flex flex-col items-center'>
                        <div className='flex max-w-xl flex-col items-center pb-1 pt-2 lg:pb-2 lg:pt-16'>
                            <div className='ml-2 relative h-full justify-center mb-1 md:mb-1'>
                                {/* srijan red base subtract -------- */}
                                <div className='redParentBase'>
                                    <div className='redBase'>
                                        <img
                                            src='/assets/Subtract.png'
                                            alt=''
                                            className='base-image'
                                        />


                                        {/* srijan text logo in red ------- */}
                                        <img
                                            src='/assets/Srijan logo.png'
                                            alt=''
                                            className='overlay-image'
                                        />
                                        
                                    </div>
                                    <div className='circle'>
                                        {/* srijan circular logo ------- */}
                                        <img
                                            className='lo'
                                            src='/assets/Vector.png'
                                            alt=''
                                            width={100}
                                            height={100}
                                        />
                                    </div>
                                </div>
                                
                                {/* <div className='circle'>
                                    <img
                                        className='lo'
                                        src='/assets/Vector.png'
                                        alt=''
                                        width={93.93}
                                        height={94.09}
                                    />
                                </div> */}
                            </div>

                            <TextAnimation />
                            
                            <h2 className='mb-6 text-center text-4xl font-bold inline-block bg-clip-text text-transparent bg-gradient-to-r from-[#FF0099] to-[#FF7A00] md:text-3xl srijanDate'>
                                21st March - 24th March
                            </h2>
                        </div>
                        <Countdown />
                    </section>
                </div>


                {/* mascott --------------------- */}
                <div
                    id='valley-and-robot'
                    className='flex justify-center items-center mascotContainer'
                >
                    <div
                        id='mascot-intro'
                        className='flex flex-col items-center'
                    >
                        <h1
                            className='flex text-white text-4xl font-bold'
                            id='mascot-intro'
                        >
                            Hey there! I am Kalpana
                        </h1>
                        <p
                            className='text-white text-lg flex mascot-desc'
                            id='mascot-desc'
                        >
                            Your smart assistant for Srijan'24
                        </p>
                    </div>
                    <div id='mascot-front'>
                        <Image alt='mascot-front' src={mascotfront} width={100} height={100} className='mascot absolute top-[40%]' ref={mascot}/>
                    </div>
                    <div id='valley-with-drops'>
                        <Image alt='valley-with-drops' src={valleyWithDrops} className='valleyImage'/>
                    </div>
                    <div id='cybercity-outline'>
                        <Image alt='cybercity-outline' src={cybercityOutline} />
                    </div>
                </div>
            </div>
            <section className='shootingStars'>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </section>
        </section>
    )
}

export default Hero
