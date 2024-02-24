'use client'
import './merchendise.css'
import Image from 'next/image'
import { useState, useEffect, useMemo } from 'react'
import Form from './Form'
import Link from 'next/link'
import './merchandisePage.css'
import Modal from 'react-modal'
import { TfiHandPointRight } from 'react-icons/tfi'
import { useSelector } from 'react-redux'

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

    const [paymentMode, setPaymentMode] = useState('cash')
    const [transactionId, setTransactionId] = useState('')
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [department, setDepartment] = useState('')
    const [college, setCollege] = useState('')
    const [tshirtSize, setTshirtSize] = useState('')
    const [tshirtName, setTshirtName] = useState('')
    const [campus, setCampus] = useState('')
    const [paidTo, setPaidTo] = useState('')

    const handleCampusChange = event => {
        const selectedCampus = event.target.value
        setCampus(selectedCampus)

        // Set paidTo based on the selected campus
        if (selectedCampus === 'jadavpur') {
            setPaidTo('Supratick')
        } else if (selectedCampus === 'saltlake') {
            setPaidTo('Arindam Halder')
        } else {
            setPaidTo('')
        }
    }

    const handleTshirtSizeChange = event => {
        setTshirtSize(event.target.value)
    }

    const handleDepartmentChange = event => {
        setDepartment(event.target.value)
    }

    const handleCollegeChange = event => {
        setCollege(event.target.value)
    }

    const handlePhoneChange = event => {
        setPhone(event.target.value)
    }

    const handlePaymentModeChange = event => {
        setPaymentMode(event.target.value)
    }

    const handleNameChange = event => {
        setName(event.target.value)
    }

    const [visibleInstructionsModal, setVisibleInstructionsModal] =
        useState(false)
    const toggleVisibleInstructionsModal = () => {
        setVisibleInstructionsModal(!visibleInstructionsModal)
    }
    const customEventModalStyles = {
        overlay: {
            background: 'rgba(0,0,0,0.65)',
            zIndex: '100',
        },
    }
    const user = useSelector(state => state.userReducer.user)

    const placeOrder = () => {
        const data = {
            name,
            email: user && user.email,
            phone,
            college,
            department,
            tshirtSize,
            tshirtName,
            paymentMode,
            campus,
            paidTo,
            transactionId,
        }
        console.log(data)
    }

    return (
        <>
            <Modal
                isOpen={visibleInstructionsModal}
                onRequestClose={() => {
                    toggleVisibleInstructionsModal()
                }}
                className={'instructionsModal'}
                ariaHideApp={false}
                style={customEventModalStyles}
                closeTimeoutMS={700}
            >
                <div>
                    <h2>Important Guidelines</h2>
                    <div className={'paymentScannerBox'}>
                        <div>
                            <Image
                                src={'/assets/merchandise/qr_code.webp'}
                                height={300}
                                width={300}
                                alt='qr_image'
                                className={'qrScannerImage'}
                                draggable={false}
                            />
                            <h4>Ayush Mishra</h4>
                            <h5>ayushdtps@oksbi</h5>
                        </div>
                        <div>
                            <Image
                                src={'/assets/merchandise/qr_code.webp'}
                                height={300}
                                width={300}
                                alt='qr_image'
                                className={'qrScannerImage'}
                                draggable={false}
                            />
                            <h4>Bitan Banerjee</h4>
                            <h5>bbanerjeeagp@oksbi</h5>
                        </div>
                    </div>
                    {/* <div className={'instructions'}>
                        <TfiHandPointRight className={'instructionBullets'} />{' '}
                        <span>
                            {' '}
                            You can order your merchandise in both - Offline &
                            Online mode{' '}
                        </span>
                    </div> */}
                    {/* <div className={styles.instructions}>
              <TfiHandPointRight className={styles.instructionBullets}/> <span> To order in offline mode: please contact with <strong>Trishit Pal</strong> [ 1234567890 ] or <strong>Ayush Mishra</strong> [ 9876543210 ] </span>
            </div> */}
                    {/* <div className={'instructions'}>
                        <TfiHandPointRight className={'instructionBullets'} />{' '}
                        <span>
                            At first, enter the details such as name, email,
                            mobile, college, dept in the Merchandise Form
                        </span>
                    </div> */}
                    <div className={'instructions'}>
                        <TfiHandPointRight className={'instructionBullets'} />{' '}
                        <span>
                            Enter the name you want to print upon your SRIJAN
                            Merchandise. If you don't want any name printed upon
                            the Tshirt, write "NA"
                        </span>
                    </div>
                    <div className={'instructions'}>
                        <TfiHandPointRight className={'instructionBullets'} />{' '}
                        <span>
                            If you want to order via Cash, select "CASH" and
                            complete the payment to one of the Payment
                            Collectors within a day
                        </span>
                    </div>
                    <div className={'instructions'}>
                        <TfiHandPointRight className={'instructionBullets'} />{' '}
                        <span>
                            If you want to make the payment via UPI, please
                            select "UPI" and complete the payment to one of the
                            Payment Collector within a day via{' '}
                            <strong>Google Pay</strong>,{' '}
                            <strong>Phone Pe</strong>,{' '}
                            <strong>Amazon Pay</strong>, <strong>Paytm</strong>{' '}
                            or <strong>Whatsapp Pay</strong>
                        </span>
                    </div>

                    <div className={'instructions'}>
                        <TfiHandPointRight className={'instructionBullets'} />{' '}
                        <span>
                            If you select method: "UPI", 1 more field will be
                            visible where you have to give the Transaction ID. [{' '}
                            <strong>PS:</strong> provide the 12 digit unique
                            numeric number (UTR) e.g. <i>123456789012</i> ]
                        </span>
                    </div>
                    <div className={'instructions'}>
                        <TfiHandPointRight className={'instructionBullets'} />{' '}
                        <span>
                            Now select Campus where you want to complete your
                            payment and then place your order
                        </span>
                    </div>
                    <div className={'instructions'}>
                        <TfiHandPointRight className={'instructionBullets'} />{' '}
                        <span>
                            <b>Congrats! Your order has been placed.</b> You can
                            check the order status in your Dashboard
                        </span>
                    </div>
                    <div className={'instructions'}>
                        <TfiHandPointRight className={'instructionBullets'} />{' '}
                        <span>
                            {' '}
                            For any further queries, reach out to Ayush Mishra [
                            8927898690 ] or Bitan Banerjee [ 7439377598 ]
                            anytime
                        </span>
                    </div>
                    {/* please scan any one of the two QR codes shown above. If you choose 1st one, then at the time  */}

                    <div className={'merchandiseUnderstoodButtonBox'}>
                        <button onClick={toggleVisibleInstructionsModal}>
                            Ok, I understand
                        </button>
                    </div>
                </div>
            </Modal>

            <div className=' h-screen w-full bg-gray-900'>
                <div className='flex items-center justify-center bg-gray-900'>
                    {/* Grid background */}
                    <div className='absolute inset-0 p-2 grid grid-cols-12 gap-2 transform -skew-y-12'>
                        {/* row 1 */}
                        <div className='col-span-2 bg-gray-800 rounded overflow-hidden animate-pulse'></div>
                        <div className='col-span-5 bg-gray-800 rounded overflow-hidden '></div>
                        <div className='col-span-1 bg-gray-800 rounded overflow-hidden '></div>
                        <div className='col-span-4 bg-gray-800 rounded overflow-hidden '></div>

                        {/* row 2 */}
                        <div className='col-span-5 bg-gray-800 rounded'></div>
                        <div className='col-span-3 bg-gray-800 rounded animate-pulse'></div>
                        <div className='col-span-2 bg-gray-800 rounded'></div>
                        <div className='col-span-2 bg-gray-800 rounded'></div>

                        {/* row 3 */}
                        <div className='col-span-4 bg-gray-800 rounded'></div>
                        <div className='col-span-7 bg-gray-800 rounded animate-pulse'></div>
                        <div className='col-span-1 bg-gray-800 rounded'></div>

                        {/* row-4 */}
                        <div className='col-span-2 bg-gray-800 rounded animate-pulse'></div>
                        <div className='col-span-4 bg-gray-800 rounded'></div>
                        <div className='col-span-6 bg-gray-800 rounded animate-pulse'></div>

                        {/* row-5 */}
                        <div className='col-span-5 bg-gray-800 rounded animate-pulse '></div>
                        <div className='col-span-3 bg-gray-800 rounded '></div>
                        <div className='col-span-2 bg-gray-800 rounded animate-pulse '></div>
                        <div className='col-span-2 bg-gray-800 rounded '></div>

                        {/* row-6 */}
                        <div className='col-span-4 bg-gray-800 rounded'></div>
                        <div className='col-span-7 bg-gray-800 rounded animate-pulse'></div>
                        <div className='col-span-1 bg-gray-800 rounded'></div>

                        <div className='col-span-4 bg-gray-800 rounded animate-pulse'></div>
                        <div className='col-span-7 bg-gray-800 rounded '></div>
                        <div className='col-span-1 bg-gray-800 rounded animate-pulse'></div>

                        <div className='col-span-4 bg-gray-800 rounded animate-pulse'></div>
                        <div className='col-span-7 bg-gray-800 rounded '></div>
                        <div className='col-span-1 bg-gray-800 rounded animate-pulse'></div>

                        <div className='col-span-2 bg-gray-800 rounded animate-pulse'></div>
                        <div className='col-span-4 bg-gray-800 rounded'></div>
                        <div className='col-span-6 bg-gray-800 rounded animate-pulse'></div>

                        <div className='col-span-2 bg-gray-800 rounded animate-pulse'></div>
                        <div className='col-span-4 bg-gray-800 rounded'></div>
                        <div className='col-span-6 bg-gray-800 rounded animate-pulse'></div>

                        <div className='col-span-2 bg-gray-800 rounded animate-pulse'></div>
                        <div className='col-span-4 bg-gray-800 rounded'></div>
                        <div className='col-span-6 bg-gray-800 rounded animate-pulse'></div>

                        <div className='col-span-2 bg-gray-800 rounded animate-pulse'></div>
                        <div className='col-span-4 bg-gray-800 rounded'></div>
                        <div className='col-span-6 bg-gray-800 rounded animate-pulse'></div>
                    </div>

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
                                    onClick={toggleVisibleInstructionsModal}
                                >
                                    How to Order a SRIJAN Merchandise?
                                </button>
                            </div>
                        </div>

                        {user && (
                            <div className='glassmorphism-container merchandiseFormContainer'>
                                <div className='relative h-auto overflow-hidden mt-5'>
                                    <div className='mx-auto max-w-md merchandiseForm'>
                                        <div className='mb-4'>
                                            <label
                                                htmlFor='name'
                                                className='block text-white'
                                            >
                                                Name
                                            </label>
                                            <input
                                                id='name'
                                                type='text'
                                                required
                                                placeholder='Enter your full name'
                                                className='w-full px-3 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:bg-gray-800'
                                                value={name}
                                                onChange={handleNameChange}
                                            />
                                        </div>
                                        <div className='mb-4'>
                                            <label
                                                htmlFor='email'
                                                className='block text-white'
                                            >
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
                                        </div>
                                        <div className='mb-4'>
                                            <label
                                                htmlFor='phone'
                                                className='block text-white'
                                            >
                                                Phone
                                            </label>
                                            <input
                                                id='phone'
                                                type='tel'
                                                required
                                                placeholder='Enter the phone number'
                                                className='w-full px-3 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:bg-gray-800'
                                                value={phone}
                                                onChange={handlePhoneChange}
                                            />
                                        </div>
                                        <div className='mb-4'>
                                            <label
                                                htmlFor='college'
                                                className='block text-white'
                                            >
                                                College
                                            </label>
                                            <input
                                                id='college'
                                                type='text'
                                                required
                                                placeholder='Enter your college'
                                                className='w-full px-3 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:bg-gray-800'
                                                value={college}
                                                onChange={handleCollegeChange}
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
                                                onChange={
                                                    handleDepartmentChange
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
                                                onChange={
                                                    handleTshirtSizeChange
                                                }
                                            >
                                                <option value='' disabled>
                                                    Select T-shirt size
                                                </option>
                                                <option value='S'>S</option>
                                                <option value='M'>M</option>
                                                <option value='L'>L</option>
                                                <option value='XL'>XL</option>
                                                <option value='XXL'>XXL</option>
                                                <option value='XXXL'>
                                                    XXXL
                                                </option>
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
                                                    setTshirtName(
                                                        e.target.value,
                                                    )
                                                }}
                                            />
                                        </div>
                                        <div className='mb-4'>
                                            <label className='block text-white'>
                                                Payment Mode
                                            </label>
                                            <div className='flex items-center'>
                                                <input
                                                    type='radio'
                                                    id='upi'
                                                    name='payment-mode'
                                                    value='upi'
                                                    className='mr-2'
                                                    checked={
                                                        paymentMode === 'upi'
                                                    }
                                                    onChange={
                                                        handlePaymentModeChange
                                                    }
                                                />
                                                <label
                                                    htmlFor='upi'
                                                    className='text-white mr-8'
                                                >
                                                    UPI
                                                </label>
                                                <input
                                                    type='radio'
                                                    id='cash'
                                                    name='payment-mode'
                                                    value='cash'
                                                    checked={
                                                        paymentMode === 'cash'
                                                    }
                                                    className='ml-10 mr-2'
                                                    onChange={
                                                        handlePaymentModeChange
                                                    }
                                                />
                                                <label
                                                    htmlFor='cash'
                                                    className='text-white'
                                                >
                                                    Cash
                                                </label>
                                            </div>
                                        </div>

                                        {paymentMode === 'upi' && (
                                            <div className='mb-4'>
                                                <label className='block text-white'>
                                                    Transaction ID
                                                </label>
                                                <input
                                                    type='text'
                                                    value={transactionId}
                                                    onChange={e =>
                                                        setTransactionId(
                                                            e.target.value,
                                                        )
                                                    }
                                                    className='w-full px-3 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:bg-gray-800'
                                                />
                                            </div>
                                        )}
                                        <div className='mb-4 '>
                                            <label
                                                htmlFor='campus'
                                                className='block text-white'
                                            >
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
                                                <option value='jadavpur'>
                                                    Jadavpur Campus
                                                </option>
                                                <option value='saltlake'>
                                                    SaltLake Campus
                                                </option>
                                            </select>

                                            {paidTo && (
                                                <div className='mt-4'>
                                                    <label
                                                        htmlFor='paidTo'
                                                        className='block text-white'
                                                    >
                                                        Paid to
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

                                        <div className='flex justify-center items-center'>
                                            <button
                                                className='btn'
                                                onClick={placeOrder}
                                            >
                                                Place Order
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                        {!user && (
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
