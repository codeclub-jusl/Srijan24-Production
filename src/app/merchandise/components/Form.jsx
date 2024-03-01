'use client'

import { auth } from '@/firebase/config'
import '../styles/form.css'
import Image from 'next/image'
import { useState, FormEventHandler, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { refreshUserToken } from '@/store/userSlice'
import { useRouter } from 'next/navigation'
import { notification } from 'antd'

const campusCollectors = {
    'Jadavpur Campus': 'Adipto Ghosh Dastidar (Jadavpur Campus)',
    'Saltlake Campus': 'Subhadip De (SaltLake Campus)',
}

export default function Form() {
    const user = useSelector(state => state?.userReducer?.user)
    const dispatch = useDispatch()
    const router = useRouter()

    const [paymentMode, setPaymentMode] = useState('UPI')
    const [transactionId, setTransactionId] = useState('')
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [department, setDepartment] = useState('')
    const [college, setCollege] = useState('')
    const [tshirtSize, setTshirtSize] = useState('')
    const [tshirtColor, setTshirtColor] = useState('')
    const [tshirtName, setTshirtName] = useState('')
    const [campus, setCampus] = useState('')
    const [paidTo, setPaidTo] = useState('')

    const placeOrderButton = useRef(null);

    /**
     *
     * @type {FormEventHandler}
     */
    const orderFormSubmitHandler = event => {
        event.stopPropagation()
        event.preventDefault()
        if (!user || !user.authTokenID) {
            console.log('not authenticated, why send unnecessary requests?')
            return;
        }
        if(phone.length!==10){
            notification['error']({
                message: `Phone Number should contain only 10 digits`,
                duration: 3,
            })
            return;
        }
        placeOrderButton.current.disabled = true;
        placeOrder();
    }

    async function placeOrder() {
        const orderData = {
            Name: name,
            Email: user.email,
            PhoneNumber: phone,
            College: college,
            Department: department,
            TShirtSize: tshirtSize,
            TShirtColor: tshirtColor,
            TShirtName: tshirtName,
            PaymentMode: paymentMode,
            Campus: campus,
            PaymentCollector: paidTo,
            Price: "389",
        }
        if(paymentMode==="UPI"){
            orderData["TransactionID"] = transactionId;
        }
        try {
            const resp = await fetch(`https://ordertrack-srijan24.onrender.com/orders`, {
                method: 'POST',
                cache: 'no-cache',
                headers: {
                    'Content-Type': 'application/json',
                    // Authorization: `Bearer ${user.authTokenID}`,
                },
                body: JSON.stringify(orderData),
            })
            const data = await resp.json()
            if (!resp.ok) {
                throw data
            }
            const orderID = data['OrderID']
            router.push(`/merchandise/success?orderID=${orderID}`)
        } catch (e) {
            if (
                e.code === 'auth/id-token-revoked' ||
                e.code === 'auth/id-token-expired'
            ) {
                const newAuthToken = await auth.currentUser.getIdToken(true)
                dispatch(refreshUserToken(newAuthToken))
                // if (expiredCount < 3) {
                //     expiredCount++
                //     placeOrder()
                // } else {
                notification['error']({
                    message: `Auth Expired Due To Inactivity`,
                    description: `Please relogin to our website and try once again.`,
                    duration: 3,
                })
                // }
            } else if (e.code === 'duplicate-transaction-id') {
                notification['error']({
                    message: `${e.message}`,
                    duration: 8,
                    description:
                        'Please pay and use a fresh transaction ID or if already paid, please contact the admin immediately.',
                })
            } else {
                console.log('Oops, e.code not known!')
                console.log(e)
                notification['error']({
                    message: `Could not place order, please try again!`,
                    duration: 3,
                })
            }
        }
    }

    const handleCampusChange = event => {
        const selectedCampus = event.target.value
        setCampus(selectedCampus)
        setPaidTo(campusCollectors[`${selectedCampus}`])
    }

    return (
        <form
            className='glassmorphism-container merchandiseFormContainer'
            onSubmit={orderFormSubmitHandler}
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
                            required
                            placeholder='Enter your full name'
                            className='w-full px-3 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:bg-gray-800'
                            value={name}
                            onChange={event => setName(event.target.value)}
                        />
                    </div>
                    {/* <div className='mb-4'>
                        <label htmlFor='email' className='block text-white'>
                            Email
                        </label>
                        <input
                            id='email'
                            type='email'
                            required
                            placeholder='Enter the email'
                            className='w-full px-3 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:bg-gray-800'
                            value={user && user.email}
                            // onChange={handleEmailChange}
                            disabled
                        />
                    </div> */}
                    <div className='mb-4'>
                        <label htmlFor='phone' className='block text-white'>
                            Phone
                        </label>
                        <input
                            id='phone'
                            type='tel'
                            required
                            placeholder='Enter the phone number'
                            className='w-full px-3 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:bg-gray-800'
                            value={phone}
                            onChange={event => setPhone(event.target.value)}
                        />
                    </div>
                    <div className='mb-4'>
                        <label htmlFor='college' className='block text-white'>
                            College
                        </label>
                        <input
                            id='college'
                            type='text'
                            required
                            placeholder='Enter your college'
                            className='w-full px-3 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:bg-gray-800'
                            value={college}
                            onChange={event => setCollege(event.target.value)}
                        />
                    </div>
                    <div className='mb-4'>
                        <label
                            htmlFor='department'
                            className='block text-white'
                        >
                            Department
                        </label>
                        <input
                            id='department'
                            type='text'
                            required
                            placeholder='Enter your department'
                            className='w-full px-3 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:bg-gray-800'
                            value={department}
                            onChange={event =>
                                setDepartment(event.target.value)
                            }
                        />
                    </div>
                    <div className='mb-4'>
                        <label
                            htmlFor='tshirt-size'
                            className='block text-white'
                        >
                            T-Shirt Size
                        </label>
                        <select
                            id='tshirt-size'
                            required
                            className='w-full px-3 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:bg-gray-800'
                            value={tshirtSize}
                            onChange={event =>
                                setTshirtSize(event.target.value)
                            }
                        >
                            <option value='' disabled hidden>
                                Select T-shirt Size
                            </option>
                            <option value='S'>S (36)</option>
                            <option value='M'>M (38)</option>
                            <option value='L'>L (40)</option>
                            <option value='XL'>XL (42)</option>
                            <option value='XXL'>XXL (44)</option>
                            <option value='XXXL'>XXXL (46)</option>
                        </select>
                    </div>
                    <div className='mb-4'>
                        <label
                            htmlFor='tshirt-size'
                            className='block text-white'
                        >
                            T-Shirt Color
                        </label>
                        <select
                            id='tshirt-size'
                            required
                            className='w-full px-3 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:bg-gray-800'
                            value={tshirtColor}
                            onChange={event =>
                                setTshirtColor(event.target.value)
                            }
                        >
                            <option value='' disabled hidden>Select T-shirt Color</option>
                            <option value='black'>Black</option>
                            <option value='white'>White</option>
                        </select>
                    </div>
                    <div className='mb-4'>
                        <label
                            htmlFor='tshirt-name'
                            className='block text-white'
                        >
                            Name on T-Shirt
                        </label>
                        <input
                            id='tshirt-name'
                            type='text'
                            required
                            placeholder='Write name to be printed on the tshirt'
                            className='w-full px-3 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:bg-gray-800'
                            value={tshirtName}
                            onChange={e => {
                                setTshirtName(e.target.value)
                            }}
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
                                        value='UPI'
                                        checked={paymentMode === 'UPI'}
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
                                        value='CASH'
                                        checked={paymentMode === 'CASH'}
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

                    {paymentMode === 'UPI' && (
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
                            <option value='' disabled hidden>
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
                        {paidTo && paymentMode === 'upi' && (
                            <div className='mt-4 grid place-items-center'>
                                <Image
                                    src={`/assets/merchandise/${campus === "Jadavpur Campus" ? 'adipto' : 'subhadip'}_qr.jpg`}
                                    height={400}
                                    width={400}
                                    alt='qr_image'
                                    className={'qrScannerImage'}
                                    draggable={false}
                                    priority={true}
                                    style={{width : "220px" , height : "220px"}}
                                />
                            </div>
                        )}
                    </div>

                    <div className='flex justify-center items-center merchButton'>
                        <button className='btn' type='submit' ref={placeOrderButton} >
                            Place Order
                        </button>
                    </div>
                </div>
            </div>
        </form>
    )
}
