'use client'

import Image from 'next/image'
import Link from 'next/link'

import { useState, useEffect, useMemo } from 'react'
import { useSelector } from 'react-redux'

import './styles/merchendise.css'
import './styles/merchandisePage.css'

import Form from './components/Form'
import GridBackground from './components/GridBackground'
import OrderGuidelines from './components/OrderGuidelines'

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

    const user = useSelector(state => state.userReducer.user)

    const [visibleInstructionsModal, setVisibleInstructionsModal] =
        useState(false)

    return (
        <>
            <OrderGuidelines
                visibleInstructionsModal={visibleInstructionsModal}
                setVisibleInstructionsModal={setVisibleInstructionsModal}
            />

            <div className=' h-screen w-full bg-gray-900'>
                <div className='flex items-center justify-center bg-gray-900'>
                    {/* Grid background */}
                    <GridBackground />

                    {/* Content */}
                    <div className='relative mb-10'>
                        <h2 className='text-4xl text-white font-extrabold mb-10 mt-10 merchandiseHeading'>
                            Srijan'24 Official{' '}
                            <span className='text-purple-600'>Merchandise</span>{' '}
                        </h2>

                        <div id='merchendise-main'>
                            <div id='Image-Button-Container'>
                                <div id='ImageHolder'>
                                    {tshirts.map((src, idx) => (
                                        <Image
                                            key={src}
                                            id={`tshirt${idx + 1}`}
                                            src={
                                                tshirts[
                                                    (num + idx) % tshirtsLen
                                                ]
                                            }
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
                                                    num === idx
                                                        ? 'white'
                                                        : 'purple',
                                            }}
                                            className='tshirtPosition'
                                        />
                                    ))}
                                </div>
                            </div>

                            <div className='merchandisePrice'>
                                <h4>Only for Rs. 380/-</h4>
                            </div>
                            <div className={'offlinePaymentDetails'}>
                                <button
                                    className={'merchandiseInstructionButton'}
                                    onClick={() =>
                                        setVisibleInstructionsModal(
                                            visibleInstructionsModal =>
                                                !visibleInstructionsModal,
                                        )
                                    }
                                >
                                    How to Order a SRIJAN Merchandise?
                                </button>
                            </div>
                        </div>

                        {user ? (
                            <Form />
                        ) : (
                            <div className='flex justify-center items-center'>
                                <Link href={'/login'} className='btn'>
                                    Sign in to Order
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}
