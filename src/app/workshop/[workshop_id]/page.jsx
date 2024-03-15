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
import { getWorkshopById } from '@/utils/workshop'
import UserHOC from '@/hoc/UserHOC'

const page = ({ params }) => {
    const { workshop_id } = params
    const user = useSelector(state => state.userReducer.user)
    const [profileUpdated, setProfileUpdated] = useState(false)
    const [alreadyBooked, setAlreadyBooked] = useState(false)
    const workshopData = getWorkshopById(workshop_id)

    if (!workshopData)
        return (
            <div className='min-h-screen bg-gradient-to-r from-[#25015E] to-[#050027] flex items-center justify-center'>
                <p className='text-white'>Workshop Not Found</p>
            </div>
        )

    // console.log(workshopData);

    useEffect(() => {
        if (
            user &&
            user.name !== '' &&
            user.eamil !== '' &&
            user.phone !== '' &&
            user.college !== '' &&
            user.dept !== '' &&
            user.year !== ''
        ) {
            setProfileUpdated(true)
        } else {
            setProfileUpdated(false)
        }

        // console.log(user);
        if (user && user.workshops) {
            setAlreadyBooked(
                user.workshops.find(obj => obj.workshopId === workshop_id),
            )
        } else {
            setAlreadyBooked(false)
        }
    }, [user])

    // const [num, setNum] = useState(0)

    // const [merchOrders, setMerchOrders] = useState([])

    // useEffect(() => {
    //     if (user) {
    //         fetch(
    //             `https://ordertrack-srijan24.onrender.com/orders/${user.email}`,
    //         )
    //             .then(res => {
    //                 return res.json()
    //             })
    //             .then(res => {
    //                 setMerchOrders(res)
    //             })
    //             .catch(err => {
    //                 console.log(err)
    //             })
    //     }
    // }, [user])

    const [visibleInstructionsModal, setVisibleInstructionsModal] =
        useState(false)

    return (
        <main className='min-h-screen bg-gradient-to-r from-[#25015E] to-[#050027]'>
            <OrderGuidelines
                visibleInstructionsModal={visibleInstructionsModal}
                setVisibleInstructionsModal={setVisibleInstructionsModal}
                Cordinator={workshopData.qrs}
            />

            <div className=' h-screen w-full bg-gray-900 '>
                <div className='flex items-center justify-center bg-gray-900 flex-col'>
                    {/* Grid background */}
                    <GridBackground />

                    {/* Content */}
                    <div className='relative mb-10'>
                        <h2 className='text-4xl text-white font-extrabold mb-10 mt-10 merchandiseHeading text-center'>
                            Srijan'24 Presents{' '}
                            <span className='text-purple-600'>
                                {workshopData.workshopId.toUpperCase()}
                            </span>{' '}
                        </h2>

                        <div id='merchendise-main'>
                            {/* <div id='Image-Button-Container'>
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
                                </div> */}
                            {/* <div id='picPositions'>
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
                                </div> */}
                            {/* </div> */}
                            <div
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                }}
                            >
                                <img
                                    src={workshopData.workshopPoster}
                                    alt=''
                                    className='workImage'
                                />
                            </div>
                            <div className='merchandisePrice'>
                                <h4>Only for Rs. {workshopData.fees}/-</h4>
                            </div>
                            <div className='merchandiseNoteContainer'>
                                <div className='merchandiseNote'>
                                    {workshopData.workshopDescription &&
                                        workshopData.workshopDescription.map(
                                            (data, index) => (
                                                <li key={index}>{data}</li>
                                            ),
                                        )}
                                </div>
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
                                    How to Place Order?
                                </button>
                            </div>
                        </div>

                        {workshopData && workshopData.registrationOpen ? (
                            user ? (
                                profileUpdated ? (
                                    alreadyBooked ? (
                                        <div className='flex justify-center items-center'>
                                            <div className='btn'>Booked</div>
                                        </div>
                                    ) : (
                                        <Form workshopId={workshop_id} />
                                    )
                                ) : (
                                    <div className='flex justify-center items-center'>
                                        <Link href={'/profile'} className='btn'>
                                            Update profile to Order
                                        </Link>
                                    </div>
                                )
                            ) : (
                                <div className='flex justify-center items-center'>
                                    <Link href={'/login'} className='btn'>
                                        Log in to Order
                                    </Link>
                                </div>
                            )
                        ) : (
                            <div className='flex justify-center items-center'>
                                <div className='btn'>Registration Closed</div>
                            </div>
                        )}
                    </div>

                    {/* <div className='merchandiseOrderContainer'>
                        <h2>Workshop Orders</h2>
                        <div className='merchBoxes'>
                            {merchOrders &&
                                merchOrders.length > 0 &&
                                merchOrders.map(order => {
                                    return (
                                        <div
                                            className='merchBox'
                                            key={order._id}
                                        >
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
                                                <div className='ans'>
                                                    {order.department}
                                                </div>
                                            </div>
                                            <div className='merchRow'>
                                                <div className='ques'>
                                                    Name on Tshirt:
                                                </div>
                                                <div className='ans'>
                                                    {order.tShirtName}
                                                </div>
                                            </div>
                                            <div className='merchRow'>
                                                <div className='ques'>
                                                    Color of Tshirt:
                                                </div>
                                                <div className='ans'>
                                                    {order.tShirtColor}
                                                </div>
                                            </div>
                                            <div className='merchRow'>
                                                <div className='ques'>
                                                    Tshirt Size:
                                                </div>
                                                <div className='ans'>
                                                    {order.tShirtSize}
                                                </div>
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
                                                <div className='ans'>
                                                    {order.paymentMode}
                                                </div>
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
                            {merchOrders && merchOrders.length === 0 && (
                                <div className='noMerchOrder'>
                                    No order placed yet
                                </div>
                            )}
                        </div>
                    </div> */}
                </div>
            </div>
        </main>
    )
}

export default UserHOC(page)
