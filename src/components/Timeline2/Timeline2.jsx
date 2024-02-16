'use client'
import Image from 'next/image'
import curve2 from '../../../public/images/curve2.svg'
import curve22 from '../../../public/images/curve22.svg'
import curve23 from '../../../public/images/curve23.svg'
import circle from '../../assets/circle.png'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import './Timeline2.css'

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
                translateX: '-25%',
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
        <section className='scroll-section-outer overflow-hidden h-fit hidden sm:block'>
            <div
                ref={triggerRef}
                className='relative overflow-hidden hidden md:block'
            >
                <div
                    ref={sectionRef}
                    className='scroll-section-inner h-[60vh] w-[400vw] flex flex-row relative left-[35rem]'
                >
                    <div className='scroll-section h-full w-[58vw] overflow-hidden flex justify-center items-center '>
                        <Image src={curve2} width={1000} className='image' />
                    </div>
                    <div className='scroll-section h-full w-[58vw] overflow-hidden flex justify-center items-center '>
                        <Image src={curve22} width={1000} />
                    </div>
                    <div className='scroll-section h-full w-[58vw] overflow-hidden flex justify-center items-center '>
                        <Image src={curve23} width={1000} />
                    </div>
                </div>
            </div>
        </section>
    )
}
