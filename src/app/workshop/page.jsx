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
    // const []
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
                    <div class='mb-8 flex flex-col md:flex-row md:justify-evenly'>
                        <div class='rounded-2xl bg-opacity-50 p-6'>
                            <img
                                src='/images/workshop.jpg'
                                alt='Image 1'
                                class='mx-auto mb-6 h-auto max-w-full rounded-2xl'
                            />
                        </div>

                        <div class='rounded-2xl bg-opacity-50 p-6'>
                            <img
                                src='/images/workshop.jpg'
                                alt='Image 2'
                                class='mx-auto mb-6 h-auto max-w-full rounded-2xl'
                            />
                        </div>
                    </div>
                </div>

                <div className='guidlineButton'>
                    <button
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
                            className='glow-on-hover rounded-3xl bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700'
                            onClick={toggleModal}
                        >
                            Book Now
                        </button>
                    ) : user && !profileUpdated ? (
                        <Link
                            className='glow-on-hover rounded-3xl bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700'
                            href='/profile'
                        >
                            Update profile to book now
                        </Link>
                    ) : (
                        <Link
                            className='glow-on-hover rounded-3xl bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700'
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
                                    <h1 className='login__title'>
                                        Register Now
                                    </h1>

                                    <div className='login__content'>
                                        <div className='login__box'>
                                            <i className='ri-user-3-line login__icon'></i>
                                            <div className='login__box-input'>
                                                <input
                                                    type='text'
                                                    required
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
                                                    required
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
                                                    required
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

                                        <label htmlFor='payment'>
                                            Payment Method
                                        </label>

                                        <div>
                                            <span className='mr-2'>
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
                                                <label htmlFor='upi'>UPI</label>
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
                                        <i className='ri-user-3-line login__icon'></i>
                                        <div className='login__box-input'>
                                            <input
                                                type='text'
                                                required
                                                className='login__input'
                                                id='paymentid'
                                                // placeholder=' '
                                            />
                                            <label
                                                htmlFor='login-email'
                                                className='login__label'
                                            >
                                                PaymentID
                                            </label>
                                        </div>
                                    </div>
                                    <br />
                                    <div>
                                        <label
                                            htmlFor='campus'
                                            className='block text-lg font-medium'
                                        >
                                            Campus
                                        </label>
                                        <br />
                                        <select
                                            for='campus'
                                            class='block w-full bg-gray-500'
                                        >
                                            <option value='1'>Jadavpur</option>
                                            <option value='2'>Salt Lake</option>
                                        </select>
                                    </div>
                                    <br />
                                    <br />
                                    <div className='login__box'>
                                        <i className='ri-user-3-line login__icon'></i>
                                        <div className='login__box-input'>
                                            <input
                                                type='text'
                                                required
                                                className='login__input'
                                                id='paid-to'
                                                // placeholder=' '
                                            />
                                            <label
                                                htmlFor='login-email'
                                                className='login__label'
                                            >
                                                PaidTo
                                            </label>
                                        </div>
                                    </div>
                                    <br />
                                    <div class='space-y-4'>
                                        <label
                                            for='workshops'
                                            class='block text-lg font-medium '
                                        >
                                            Workshops
                                        </label>
                                        <select
                                            for='workshops'
                                            class='block w-full bg-gray-500'
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

                                    <button
                                        type='submit'
                                        className='login__button'
                                    >
                                        {'Register'}
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
