'use client'
import Image from 'next/image'
import curve from '../../../public/assets/curve.svg'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

export default function Home() {
    const sectionRef = useRef(null)
    const triggerRef = useRef(null)

    gsap.registerPlugin(ScrollTrigger)

    useEffect(() => {
        const pin = gsap.fromTo(
            sectionRef.current,
            {
                translateX: 0,
            },
            {
                translateX: '-210vw',
                ease: 'none',
                duration: 1,
                scrollTrigger: {
                    trigger: triggerRef.current,
                    start: '-35% top',
                    end: '2000 top',
                    scrub: 0.6,
                    pin: true,
                },
            },
        )
        return () => {
            pin.kill()
        }
    }, [])
    return (
        <section className='scroll-section-outer overflow-hidden h-fit'>
            <div ref={triggerRef}>
                <div
                    ref={sectionRef}
                    className='scroll-section-inner h-[60vh] w-[400vw] flex flex-row relative left-[35rem]'
                >
                    <div className='scroll-section h-full w-[58vw] flex justify-center items-center -mr-[0.48%]'>
                        <Image src={curve} width={1000} />
                    </div>
                    <div className='scroll-section h-full w-[58vw] flex justify-center items-center -mr-[0.48%]'>
                        <Image src={curve} width={1000} />
                    </div>
                    <div className='scroll-section h-full w-[58vw] flex justify-center items-center -mr-[0.48%]'>
                        <Image src={curve} width={1000} />
                    </div>
                    <div className='scroll-section h-full w-[58vw] flex justify-center items-center -mr-[0.48%]'>
                        <Image src={curve} width={1000} />
                    </div>
                    <div className='scroll-section h-full w-[58vw] flex justify-center items-center -mr-[0.48%]'>
                        <Image src={curve} width={1000} />
                    </div>
                </div>
            </div>
        </section>
    )
}
