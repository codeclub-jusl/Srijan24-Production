'use client'
import { useEffect, useState } from 'react'
import Modal from 'react-modal' // Importing Modal from a library like 'react-modal'
import './Modal.css'
import UserHOC from '@/hoc/UserHOC'
import { useSelector } from 'react-redux'
import Link from 'next/link'
import OrderGuidelines from '../merchandise/components/OrderGuidelines'

const page = () => {
    const user = useSelector(state => state.userReducer.user)
    const [profileUpdated, setProfileUpdated] = useState(false)
    const [visibleInstructionsModal, setVisibleInstructionsModal] =
        useState(false)
    const [paymentMode, setPaymentMode] = useState('')
    const [transactionId, setTransactionId] = useState('')
    const [campus, setCampus] = useState('')
    const [paidTo, setPaidTo] = useState('')
    const [isModalOpen, setIsModalOpen] = useState(false)

    useEffect(() => {
        if (user && user.name && user.email && user.phone) {
            setProfileUpdated(true)
        } else {
            setProfileUpdated(false)
        }
    }, [user])

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen)
    }
    const handlePaymentMethodChange = e => {
        // if upi then show paymentid else hide it
        if (e.target.value === 'upi') {
            document.getElementsByClassName('payment-id-div')[0].style.display =
                'block'
            document.getElementById('paymentid').required = true
        } else {
            document.getElementsByClassName('payment-id-div')[0].style.display =
                'none'
            document.getElementById('paymentid').required = false
        }
        setPaymentMode(e.target.value)
    }

    return (
        <div className='m-0 min-h-screen bg-gradient-to-br from-black via-sky-950 to-black text-white'>
            <div
                className=' bg-[url(/images/about/about.png)]'
                style={{
                    minHeight: '100vh',
                    padding: '20px',
                    color: 'white',
                    fontFamily: 'Arial, sans-serif',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <div className='flex w-full justify-center p-8'>
                    <h2 className='mb-4 text-3xl font-bold md:text-4xl'>
                        Workshop
                    </h2>
                </div>
                <div className='max-w-screen-xl'>
                    <div className='mb-8 flex flex-col md:flex-row md:justify-evenly'>
                        <div className='rounded-2xl bg-opacity-50 p-6'>
                            <img
                                src='/images/workshop.jpg'
                                alt='Image 1'
                                className='mx-auto mb-6 h-auto max-w-full rounded-2xl'
                            />
                        </div>

                        <div className='rounded-2xl bg-opacity-50 p-6'>
                            <img
                                src='/images/workshop.jpg'
                                alt='Image 2'
                                className='mx-auto mb-6 h-auto max-w-full rounded-2xl'
                            />
                        </div>
                    </div>
                </div>

                <div className='guidlineButton'>
                    <button className='text-xl font-bold'
                        onClick={() => {
                            setVisibleInstructionsModal(
                                visibleInstructionsModal =>
                                    !visibleInstructionsModal,
                            )
                        }}
                    >
                        How to make payment to book workshop?
                    </button>
                </div>

                <OrderGuidelines
                    visibleInstructionsModal={visibleInstructionsModal}
                    setVisibleInstructionsModal={setVisibleInstructionsModal}
                />

                <div className='flex w-full justify-center'>
                    {user && profileUpdated ? (
                        <button
                            className='glow-on-hover rounded-3xl bg-blue-500 px-5 py-3 text-xl font-bold text-white hover:bg-blue-700'
                            onClick={toggleModal}
                        >
                            Book Now
                        </button>
                    ) : user && !profileUpdated ? (
                        <Link
                            className='glow-on-hover rounded-3xl bg-blue-500 px-5 py-3 text-xl font-bold text-white hover:bg-blue-700'
                            href='/profile'
                        >
                            Update profile to book now
                        </Link>
                    ) : (
                        <Link
                            className='glow-on-hover rounded-3xl bg-blue-500 px-5 py-3 text-xl font-bold text-white hover:bg-blue-700'
                            href='/login'
                        >
                            Log in to book now
                        </Link>
                    )}

                    {/* Modal Component */}
                    <Modal
                        isOpen={isModalOpen}
                        onRequestClose={toggleModal}
                        className='modal-content'
                        overlayClassName='modal-overlay'
                    >
                        <div className='fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50'>
                            <div id='modal'>
                                <div className='login__form'>
                                    <strong
                                        className='text-l align-right alert-del absolute right-4 top-4 h-6 w-6 cursor-pointer rounded-full bg-red-500 text-center hover:bg-red-600 hover:text-white'
                                        onClick={toggleModal}
                                    >
                                        X
                                    </strong>
                                    <h1 className='login__title'>Book Workshop</h1>

                                    <div className='login__content sm:text-md'>
                                        <div className='login__box'>
                                            <i className='ri-user-3-line login__icon'></i>
                                            <div className='login__box-input'>
                                                <input
                                                    type='text'
                                                    readOnly
                                                    value={
                                                        user ? user.name : ''
                                                    }
                                                    className='login__input'
                                                    id='user-name'
                                                    // placeholder=' '
                                                />
                                                <label
                                                    htmlFor='login-email'
                                                    className='login__label'
                                                >
                                                    Name
                                                </label>
                                            </div>
                                        </div>
                                        <div className='login__box'>
                                            <i className='ri-user-3-line login__icon'></i>
                                            <div className='login__box-input'>
                                                <input
                                                    type='text'
                                                    readOnly
                                                    value={
                                                        user ? user.email : ''
                                                    }
                                                    className='login__input'
                                                    id='email'
                                                    // placeholder=' '
                                                />
                                                <label
                                                    htmlFor='login-email'
                                                    className='login__label'
                                                >
                                                    Email
                                                </label>
                                            </div>
                                        </div>
                                        <div className='login__box'>
                                            <i className='ri-user-3-line login__icon'></i>
                                            <div className='login__box-input'>
                                                <input
                                                    type='text'
                                                    readOnly
                                                    value={
                                                        user ? user.phone : ''
                                                    }
                                                    className='login__input'
                                                    id='mobile'
                                                    // placeholder=' '
                                                />
                                                <label
                                                    htmlFor='login-email'
                                                    className='login__label'
                                                >
                                                    Phone
                                                </label>
                                            </div>
                                        </div>

                                        <div className='login_box'>
                                            <label
                                                htmlFor='payment'
                                                className=''
                                            >
                                                Payment Method
                                            </label>

                                            <div className='mt-2'>
                                                <span className='mr-6'>
                                                    <input
                                                        type='radio'
                                                        id='upi'
                                                        name='payment'
                                                        value='upi'
                                                        className=''
                                                        onChange={
                                                            handlePaymentMethodChange
                                                        }
                                                    />
                                                    <label htmlFor='upi'>
                                                        UPI
                                                    </label>
                                                </span>
                                                <span>
                                                    <input
                                                        type='radio'
                                                        id='cash'
                                                        name='payment'
                                                        value='cash'
                                                        onChange={
                                                            handlePaymentMethodChange
                                                        }
                                                    />
                                                    <label htmlFor='cash'>
                                                        Cash
                                                    </label>
                                                </span>
                                            </div>
                                        </div>

                                        <div
                                            className='login__box payment-id-div'
                                            style={{ display: 'none' }}
                                        >
                                            {/* <i className='ri-user-3-line login__icon'></i> */}
                                            <div className='login__box-input'>
                                                <input
                                                    type='text'
                                                    value={transactionId}
                                                    className='login__input'
                                                    id='paymentid'
                                                    onChange={e =>
                                                        setTransactionId(
                                                            e.target.value,
                                                        )
                                                    }
                                                    // placeholder=' '
                                                />
                                                <label
                                                    htmlFor='login-email'
                                                    className='login__label'
                                                >
                                                    Transaction ID
                                                </label>
                                            </div>
                                        </div>
                                        
                                        <div className='login_box'>
                                            <label
                                                htmlFor='campus'
                                                className='block mb-1'
                                            >
                                                Campus
                                            </label>
                                            
                                            <select
                                                required
                                                htmlFor='campus'
                                                className='block w-full bg-gray-500 rounded-xl px-3 py-2'
                                                onChange={e =>
                                                    setCampus(e.target.value)
                                                }
                                            >
                                                <option value='jadavpur'>
                                                    Jadavpur
                                                </option>
                                                <option value='saltlake'>
                                                    Salt Lake
                                                </option>
                                            </select>
                                        </div>
                                        
                                        <div className='login__box'>
                                            <i className='ri-user-3-line login__icon'></i>
                                            <div className='login__box-input'>
                                                <input
                                                    type='text'
                                                    readOnly
                                                    className='login__input'
                                                    id='paid-to'
                                                    value={
                                                        campus === 'saltlake'
                                                            ? 'Subhadip De (SaltLake Campus)'
                                                            : 'Adipto Ghosh Dastidar (Jadavpur Campus)'
                                                    }
                                                    // placeholder=' '
                                                />
                                                <label
                                                    htmlFor='login-email'
                                                    className='login__label'
                                                >
                                                    Pay To
                                                </label>
                                            </div>
                                        </div>
                                        
                                        <div className='login_box mt-0'>
                                            <label
                                                htmlFor='workshops'
                                                className='block mb-1'
                                            >
                                                Workshops
                                            </label>
                                            <select
                                                htmlFor='workshops'
                                                className='block w-full bg-gray-500 rounded-xl px-3 py-2'
                                            >
                                                <option value='1'>
                                                    Workshop 1
                                                </option>
                                                <option value='2'>
                                                    Workshop 2
                                                </option>
                                                <option value='3'>both</option>
                                            </select>
                                            <br />
                                        </div>
                                    </div>

                                    <button
                                        type='submit'
                                        className='login__button'
                                    >
                                        {'Book Now'}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </Modal>
                </div>
            </div>
        </div>
    )
}

export default UserHOC(page)
