"use client"

import React from 'react'
import {useRef, useEffect} from "react"
import './style.css'
import TextAnimation from './Animation/TextAnimation'
import Countdown from './Countdown/Countdown'
import {gsap} from "gsap"
import {ScrollTrigger} from 'gsap/dist/ScrollTrigger'

const Hero = () => {
    const planet1 = useRef(null)
    const planet2 = useRef(null)
    const shootingStar1 = useRef(null)
    const shootingStar2 = useRef(null)
    const ufo = useRef(null)
    const trigger = useRef(null)

    gsap.registerPlugin(ScrollTrigger)

    useEffect(() => {
        gsap.to(planet1.current, {
            rotate: 20,
            scale: 1.1,
            scrollTrigger: {
                trigger: planet2.current,
                start: "top 50%",
                end: "bottom 20%",
                scrub: true,
                markers: false
            }
        })
        gsap.to(planet2.current, {
            rotate: -20,
            scale: 1.1,
            scrollTrigger: {
                trigger: planet2.current,
                start: "top 50%",
                end: "bottom 20%",
                scrub: true,
                markers: false
            }
        })
        gsap.to(ufo.current, {
            right: "75%",
            top: "70%",
            scrollTrigger: {
                trigger: ufo.current,
                start: "top 60%",
                end: "bottom 10%",
                scrub: 1,
                markers: false
            }
        })
        gsap.to(shootingStar1.current, {
            top: "65%",
            translateX: -30,
            scrollTrigger: {
                trigger: shootingStar1.current,
                start: "top 60%",
                end: "bottom 10%",
                scrub: 1,
                markers: false
            }
        })
        gsap.to(shootingStar2.current, {
            top: "60%",
            translateX: -30,
            scrollTrigger: {
                trigger: shootingStar2.current,
                start: "top 60%",
                end: "bottom 10%",
                scrub: 1,
                markers: false
            }
        })

    })

    return (
        <section className='bg-[#030022] relative' ref={trigger}>
            <img src='/assets/star.png' alt='' className='absolute h-full w-full'/>
            <img src='/assets/hero-planet1.png' alt='' className='hidden md:block absolute top-[35%] left-10' ref={planet1} />
            <img src='/assets/hero-planet2.png' alt='' className='hidden md:block absolute top-[20%] right-24' ref={planet2}/>
            <img src='/assets/shootingstar.png' alt='' className='absolute top-[55%] right-10' ref={shootingStar1}/>
            <img src='/assets/shootingstar.png' alt='' className='absolute top-[50%] left-1/3' ref={shootingStar2}/>
            <img src='/assets/ufo.png' alt='' className='absolute top-[60%] right-[15%]' ref={ufo}/>
            <div className='pb-2 sm:pb-3 lg:pb-4'>
                <div className='mx-auto max-w-screen-2xl px-4 md:px-4'>
                    <section className='flex flex-col items-center'>
                        <div className='flex max-w-xl flex-col items-center pb-1 pt-2 lg:pb-2 lg:pt-16'>
                            <div className='relative h-full text-center mb-1 md:mb-1'>
                                <img
                                    src='/assets/Subtract.png'
                                    alt=''
                                    className='base-image'
                                />
                                <img
                                    src='/assets/Srijan logo.png'
                                    alt=''
                                    className='overlay-image'
                                />
                                <div className='circle'>
                                    <img
                                        className='lo'
                                        src='/assets/Vector.png'
                                        alt=''
                                        width={173.93}
                                        height={174.09}
                                    />
                                </div>
                            </div>
                            <TextAnimation />
                            <h2 className='mb-6 text-center text-4xl font-bold inline-block bg-clip-text text-transparent bg-gradient-to-r from-[#FF0099] to-[#FF7A00] md:text-3xl'>
                                21st March-24th March
                            </h2>
                        </div>
                        <Countdown />
                    </section>
                </div>
            </div>
        </section>
    )
}

export default Hero
