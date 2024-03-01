'use client'

import { auth, db } from '@/firebase/config'
import '../styles/form.css'
import { useState, FormEventHandler, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { refreshUserToken } from '@/store/userSlice'
import { useRouter } from 'next/navigation'
import { notification } from 'antd'
import BeatLoader from 'react-spinners/BeatLoader'
import { v4 as uuidv4 } from 'uuid'
import { getWorkshopById } from '@/utils/workshop'
import {
    collection,
    doc,
    getDoc,
    getDocs,
    query,
    setDoc,
    updateDoc,
    where,
} from 'firebase/firestore'

const campusCollectors = {
    'Jadavpur Campus': 'Arindam Mukherjee (Jadavpur Campus)',
    'Saltlake Campus': 'Dipayan Bhattacharya (Salt Lake Campus)',
}

export default function Form({ workshopId }) {
    const user = useSelector(state => state?.userReducer?.user)
    const workshopData = getWorkshopById(workshopId)
    const dispatch = useDispatch()
    const router = useRouter()

    const [paymentMode, setPaymentMode] = useState('upi')
    const [transactionId, setTransactionId] = useState('')
    const [campus, setCampus] = useState('')
    const [paidTo, setPaidTo] = useState('')
    const [loading, setLoading] = useState(false)

    const placeOrderButton = useRef(null)

    /**
     *
     * @type {FormEventHandler}
     */
    // const orderFormSubmitHandler = event => {
    //     event.stopPropagation()
    //     event.preventDefault()
    //     if (!user || !user.authTokenID) {
    //         console.log('not authenticated, why send unnecessary requests?')
    //         return;
    //     }
    //     if(phone.length!==10){
    //         notification['error']({
    //             message: `Phone Number should contain only 10 digits`,
    //             duration: 3,
    //         })
    //         return;
    //     }
    //     placeOrderButton.current.disabled = true;
    //     placeOrder();
    // }

    const handleCampusChange = event => {
        const selectedCampus = event.target.value
        setCampus(selectedCampus)
        setPaidTo(campusCollectors[`${selectedCampus}`])
    }

    const updateUser = async userOrderObject => {
        const userRef = doc(db, 'users', user.email)
        const userSnap = await getDoc(userRef)

        if (userSnap.exists()) {
            let userData = userSnap.data()
            const timeStamp = Date.now()
            const notificationString =
                'You placed an order the workshop: ' + workshopData.workshopId
            userData.notifications.push({ notificationString, timeStamp })

            if (userData.workshops) {
                userData.workshops.push(userOrderObject)
                await updateDoc(userRef, userData)
            } else {
                await setDoc(
                    userRef,
                    {
                        ...userData,
                        workshops: [userOrderObject],
                    },
                    { merge: true },
                )
            }

            notification['success']({
                message: `You have placed an order the workshop. Stay tuned for your order verification.`,
                duration: 5,
            })
        }
    }

    const handleBook = async e => {
        e.stopPropagation()
        e.preventDefault()

        if (paymentMode === '' || campus === '') {
            notification['error']({
                message: `All the fields are required`,
                duration: 3,
            })
            return
        }

        if (paymentMode === 'upi' && transactionId === '') {
            notification['error']({
                message: `Please enter the transaction id`,
                duration: 3,
            })
            return
        }

        setLoading(true)

        try {
            if (transactionId !== '') {
                const q = query(
                    collection(db, workshopId),
                    where('transactionId', '==', transactionId),
                )
                const querySnapshot = await getDocs(q)

                if (!querySnapshot.empty) {
                    notification['error']({
                        message: `An order has already been placed with the given transactionId`,
                        duration: 3,
                    })
                    setLoading(false)
                    return
                }
            }

            const orderId = uuidv4()

            const orderObject = {
                orderId,
                name: user.name,
                email: user.email,
                phone: user.phone,
                college: user.college,
                dept: user.dept,
                year: user.year,
                paymentMode,
                transactionId,
                campus,
                paidTo,
                status: 'pending',
            }

            await setDoc(doc(db, workshopId, orderId), { ...orderObject })

            const userOrderObject = {
                orderId,
                workshopId,
                paymentMode,
                transactionId,
                campus,
                paidTo,
                status: 'pending',
            }
            await updateUser(userOrderObject)

            setLoading(false)

            router.push(`/workshop/${workshopId}/success?orderID=${orderId}`)
        } catch (err) {
            console.log(err)
            notification['error']({
                message: `Something went wrong! Please try again later.`,
                duration: 3,
            })
        }

        setLoading(false)
    }

    return (
        <form
            className='glassmorphism-container merchandiseFormContainer'
            onSubmit={handleBook}
        >
            <div className='relative h-auto overflow-hidden mt-5'>
                <div className='mx-auto max-w-md merchandiseForm'>
                    <div className='mb-4'>
                        <label htmlFor='name' className='block text-white'>
                            Name
                        </label>
                        <input
                            id='name'
                            type='text'
                            readOnly
                            disabled
                            className='w-full px-3 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:bg-gray-800'
                            value={user && user.name}
                        />
                    </div>

                    <div className='mb-4'>
                        <label htmlFor='email' className='block text-white'>
                            Email
                        </label>
                        <input
                            id='email'
                            type='email'
                            readOnly
                            className='w-full px-3 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:bg-gray-800'
                            value={user && user.email}
                            // onChange={handleEmailChange}
                            disabled
                        />
                    </div>

                    <div className='mb-4'>
                        <label htmlFor='phone' className='block text-white'>
                            Phone
                        </label>
                        <input
                            id='phone'
                            type='tel'
                            readOnly
                            disabled
                            className='w-full px-3 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:bg-gray-800'
                            value={user && user.phone}
                        />
                    </div>

                    <div className='mb-4'>
                        <label className='block text-white'>Payment Mode</label>
                        <div className='flex items-center'>
                            {/* <input
                                type='radio'
                                id='upi'
                                name='payment-mode'
                                value='upi'
                                className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
                                checked={paymentMode === 'upi'}
                                onChange={event =>
                                    setPaymentMode(event.target.value)
                                }
                            />
                            <label
                                htmlFor='upi'
                                className='w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300'
                            >
                                UPI
                            </label>
                            <input
                                type='radio'
                                id='cash'
                                name='payment-mode'
                                value='cash'
                                checked={paymentMode === 'cash'}
                                className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
                                onChange={event =>
                                    setPaymentMode(event.target.value)
                                }
                            />
                            <label
                                htmlFor='cash'
                                className='w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300'
                            >
                                Cash
                            </label> */}

                            <ul className='grid w-full gap-6 md:grid-cols-2'>
                                <li>
                                    <input
                                        type='radio'
                                        className='hidden peer'
                                        required
                                        id='payment-mode-upi'
                                        name='payment-mode'
                                        value='upi'
                                        checked={paymentMode === 'upi'}
                                        onChange={event =>
                                            setPaymentMode(event.target.value)
                                        }
                                    />
                                    <label
                                        htmlFor='payment-mode-upi'
                                        className='form-payment-method-label'
                                    >
                                        <div className='block w-full font-semibold'>
                                            UPI
                                        </div>
                                        <svg
                                            className='w-5 h-5 ms-3 rtl:rotate-180'
                                            aria-hidden='true'
                                            xmlns='http://www.w3.org/2000/svg'
                                            fill='none'
                                            viewBox='0 0 14 10'
                                        >
                                            <path
                                                stroke='currentColor'
                                                strokeLinecap='round'
                                                strokeLinejoin='round'
                                                strokeWidth='2'
                                                d='M1 5h12m0 0L9 1m4 4L9 9'
                                            />
                                        </svg>
                                    </label>
                                </li>

                                <li>
                                    <input
                                        type='radio'
                                        className='hidden peer'
                                        required
                                        id='payment-mode-cash'
                                        name='payment-mode'
                                        value='cash'
                                        checked={paymentMode === 'cash'}
                                        onChange={event =>
                                            setPaymentMode(event.target.value)
                                        }
                                    />
                                    <label
                                        htmlFor='payment-mode-cash'
                                        className='form-payment-method-label'
                                    >
                                        <div className='block w-full font-semibold'>
                                            Cash
                                        </div>
                                        <svg
                                            className='w-5 h-5 ms-3 rtl:rotate-180'
                                            aria-hidden='true'
                                            xmlns='http://www.w3.org/2000/svg'
                                            fill='none'
                                            viewBox='0 0 14 10'
                                        >
                                            <path
                                                stroke='currentColor'
                                                strokeLinecap='round'
                                                strokeLinejoin='round'
                                                strokeWidth='2'
                                                d='M1 5h12m0 0L9 1m4 4L9 9'
                                            />
                                        </svg>
                                    </label>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {paymentMode === 'upi' && (
                        <div className='mb-4'>
                            <label className='block text-white'>
                                Transaction ID
                            </label>
                            <input
                                type='text'
                                placeholder='Enter the UPI Transaction ID'
                                value={transactionId}
                                onChange={e => setTransactionId(e.target.value)}
                                className='w-full px-3 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:bg-gray-800'
                            />
                        </div>
                    )}
                    <div className='mb-4 '>
                        <label htmlFor='campus' className='block text-white'>
                            Campus
                        </label>
                        <select
                            id='campus'
                            required
                            className='w-full px-3 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:bg-gray-800'
                            value={campus}
                            onChange={handleCampusChange}
                        >
                            <option value='' disabled>
                                Select Campus
                            </option>
                            {Object.keys(campusCollectors).map(campusCode => {
                                return (
                                    <option key={campusCode} value={campusCode}>
                                        {campusCode}
                                    </option>
                                )
                            })}
                        </select>

                        {paidTo && (
                            <div className='mt-4'>
                                <label
                                    htmlFor='paidTo'
                                    className='block text-white'
                                >
                                    Pay To:
                                </label>
                                <input
                                    id='paidTo'
                                    type='text'
                                    className='w-full px-3 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:bg-gray-800'
                                    value={paidTo}
                                    readOnly
                                />
                            </div>
                        )}
                    </div>

                    <div className='flex justify-center items-center merchButton'>
                        {loading ? (
                            <div className='btn'>
                                <BeatLoader color='#ffffff' />
                            </div>
                        ) : (
                            <button
                                className='btn'
                                type='submit'
                                ref={placeOrderButton}
                            >
                                Place Order
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </form>
    )
}
