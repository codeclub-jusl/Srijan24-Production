'use client'
import React, { useEffect, useState } from 'react'

const Countdown = () => {
    const [days, setDays] = useState(0)
    const [hours, setHours] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [seconds, setSeconds] = useState(0)

    useEffect(() => {
        const target = new Date('03/21/2024 00:00:00')
        const interval = setInterval(() => {
            const now = new Date()
            const difference = target.getTime() - now.getTime()

            const d = Math.floor(difference / (1000 * 60 * 60 * 24))
            const h = Math.floor(
                (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
            )
            const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
            const s = Math.floor((difference % (1000 * 60)) / 1000)
            setDays(d)
            setHours(h)
            setMinutes(m)
            setSeconds(s)
        }, 1000)
        return () => clearInterval(interval)
    }, [])

    return (
        <div className='py-6 sm:py-8 lg:py-12'>
            <div className='mx-auto max-w-screen-xl px-3 md:px-8'>
                <div className='flex flex-row gap-2 lg:gap-8'>
                    <div className='flex flex-col items-center justify-center rounded-lg bg-[#6100FF] p-4 lg:p-8'>
                        <div className='text-xl font-bold text-gray-100 sm:text-2xl md:text-3xl'>
                            {days}
                        </div>
                        <div className='text-sm font-semibold text-gray-100 sm:text-base'>
                            Days
                        </div>
                    </div>

                    <div className='flex flex-col items-center justify-center rounded-lg bg-[#6100FF] p-4 md:p-8'>
                        <div className='text-xl font-bold text-gray-100 sm:text-2xl md:text-3xl'>
                            {hours}
                        </div>
                        <div className='text-sm font-semibold text-gray-100 sm:text-base'>
                            Hours
                        </div>
                    </div>

                    <div className='flex flex-col items-center justify-center rounded-lg bg-[#6100FF] p-4 md:p-8'>
                        <div className='text-xl font-bold text-gray-100 sm:text-2xl md:text-3xl'>
                            {minutes}
                        </div>
                        <div className='text-sm font-semibold text-gray-100 sm:text-base'>
                            Minutes
                        </div>
                    </div>

                    <div className='flex flex-col items-center justify-center rounded-lg bg-[#6100FF] p-4 md:p-8'>
                        <div className='text-xl font-bold text-gray-100 sm:text-2xl md:text-3xl'>
                            {seconds}
                        </div>
                        <div className='text-sm font-semibold text-gray-100 sm:text-base'>
                            Seconds
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Countdown
