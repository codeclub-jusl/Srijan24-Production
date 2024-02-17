'use client'
import './merchendise.css'
import Image from 'next/image'
import { useState, useEffect, useMemo } from 'react'
import Form from './Form'
import Link from 'next/link'
export default function Merchendise() {
    const tshirts = useMemo(function () {
        return [
            '/images/black_front.png',
            '/images/tshirt_front.png',
            '/images/tshirt_back.png',
            '/images/white_front.png',
            '/images/white_back.png',
        ]
    }, [])

    const tshirtsLen = useMemo(
        function () {
            return tshirts.length
        },
        [tshirts],
    )

    const [num, setNum] = useState(0)
    useEffect(() => {
        const intervalId = setInterval(() => {
            const updatedCount = (num + 1) % tshirtsLen
            setNum(updatedCount)
        }, 3000)
        return () => clearInterval(intervalId)
    }, [num])

    return (
        <div id='merchendise-main'>
            <div id='Image-Button-Container'>
                <div id='ImageHolder'>
                    {tshirts.map((src, idx) => (
                        <Image
                            key={src}
                            id={`tshirt${idx + 1}`}
                            src={tshirts[(num + idx) % tshirtsLen]}
                            height={300}
                            width={300}
                            alt='Picture of the author'
                        />
                    ))}
                </div>
                <div id='picPositions'>
                    {tshirts.map((_, idx) => (
                        <button
                            onClick={() => setNum(idx)}
                            key={idx}
                            style={{
                                backgroundColor:
                                    num === idx ? 'white' : 'purple',
                            }}
                            className='tshirtPosition'
                        />
                    ))}
                </div>
            </div>
            <div id='ButtonContainer'>
                <div className=''>Only at &#8377; 399</div>
                <Link className='' href='/merchandise/order'>
                    Click to Order
                </Link>
            </div>
        </div>
    )
}
