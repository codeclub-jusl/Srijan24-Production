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

import { FaHandPointDown } from 'react-icons/fa'

export default function Merchendise() {
    const tshirts = useMemo(function () {
        return [
            // '/assets/merchandise/black_front.png',
            // '/assets/merchandise/black_back.png',
            // '/assets/merchandise/white_front.png',
            // '/assets/merchandise/white_back.png',
            '/assets/merchandise/tshirt1.png',
            '/assets/merchandise/tshirt2.png',
            '/assets/merchandise/tshirt3.png',
            '/assets/merchandise/tshirt4.png',
            // '/images/white_back.png',
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
    const [merchOrders, setMerchOrders] = useState([])

    useEffect(() => {
        if (user) {
            fetch(`https://ordertrack-srijan24.onrender.com/orders/${user.email}`).then((res)=>{
                    return res.json()
                })
                .then(res => {
                    setMerchOrders(res)
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }, [user])

    const [visibleInstructionsModal, setVisibleInstructionsModal] =
        useState(false)

    return (
        <main className='min-h-screen bg-gradient-to-r from-[#25015E] to-[#050027]'>
            <OrderGuidelines
                visibleInstructionsModal={visibleInstructionsModal}
                setVisibleInstructionsModal={setVisibleInstructionsModal}
            />

            <div className=' h-screen w-full bg-gray-900 '>
                <div className='flex items-center justify-center bg-gray-900 flex-col'>
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
                                <h4>Only for Rs. 359/-</h4>
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

                        <div className='merchandiseNoteContainer'>
                            <div className='merchandiseNote'>
                                <h2>Please Note:</h2>
                                <li>
                                    Book your merchandise by <b>7th March</b> to
                                    receive it before Srijan'24.{' '}
                                </li>
                                <li>
                                    Orders placed from <b>8th March</b> to{' '}
                                    <b>14th March</b> will be delivered during
                                    the Srijan'24 days that is from 22nd - 24th
                                    March.
                                </li>
                                <li>
                                    Orders placed after <b>14th March</b> should
                                    be collected from the campus on a later
                                    date.
                                </li>
                                <li>
                                    Grab your tshirt under the early bird offer
                                    at <b>Rs. 359</b> that is only valid for the
                                    first <b>150</b> tshirt orders . Afterward,
                                    the price will be <b>Rs. 389</b>. Hurry up!
                                </li>
                                <li>
                                    Register below , the contact details will be
                                    given there in <FaHandPointDown />
                                </li>
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
                    <div className='merchandiseOrderContainer'>
                        <h2>Merchandise Orders</h2>
                        <div className='merchBoxes'>
                            {merchOrders &&
                                merchOrders.length > 0 &&
                                merchOrders.map(order => {
                                    return (
                                        <div className='merchBox' key={order._id}>
                                            <div className='merchRow'>
                                                <div className='ques'>
                                                    Order ID:
                                                </div>
                                                <div className='ans'>
                                                    {order._id}
                                                </div>
                                            </div>
                                            <div className='merchRow'>
                                                <div className='ques'>
                                                    Name:
                                                </div>
                                                <div className='ans'>
                                                    {order.name}
                                                </div>
                                            </div>
                                            <div className='merchRow'>
                                                <div className='ques'>
                                                    Phone:
                                                </div>
                                                <div className='ans'>
                                                    {order.phoneNumber}
                                                </div>
                                            </div>
                                            <div className='merchRow'>
                                                <div className='ques'>
                                                    College:
                                                </div>
                                                <div className='ans'>
                                                    {order.college}
                                                </div>
                                            </div>
                                            <div className='merchRow'>
                                                <div className='ques'>
                                                    Dept:
                                                </div>
                                                <div className='ans'>{order.department}</div>
                                            </div>
                                            <div className='merchRow'>
                                                <div className='ques'>
                                                    Name on Tshirt:
                                                </div>
                                                <div className='ans'>{order.tShirtName}</div>
                                            </div>
                                            <div className='merchRow'>
                                                <div className='ques'>
                                                    Color of Tshirt:
                                                </div>
                                                <div className='ans'>{order.tShirtColor}</div>
                                            </div>
                                            <div className='merchRow'>
                                                <div className='ques'>
                                                    Tshirt Size:
                                                </div>
                                                <div className='ans'>{order.tShirtSize}</div>
                                            </div>
                                            <div className='merchRow'>
                                                <div className='ques'>
                                                    Payment Collector:
                                                </div>
                                                <div className='ans'>
                                                    {order.paymentCollector}
                                                </div>
                                            </div>
                                            <div className='merchRow'>
                                                <div className='ques'>
                                                    Mode of Payment:
                                                </div>
                                                <div className='ans'>{order.paymentMode}</div>
                                            </div>
                                            <div className='merchRow'>
                                                <div className='ques'>
                                                    Transaction ID:
                                                </div>
                                                <div className='ans'>
                                                    {order.transactionID}
                                                </div>
                                            </div>
                                            <div
                                                className={`merchStatusRow ${order.status}`}
                                            >
                                                {order.status}
                                            </div>
                                        </div>
                                    )
                                })}
                                {merchOrders && merchOrders.length===0 && <div className='noMerchOrder'>No order placed yet</div>}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
