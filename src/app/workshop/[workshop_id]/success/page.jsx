'use client'

import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

export default function OrderSuccess() {
    const searchParams = useSearchParams()
    const orderID = searchParams.get('orderID')
    return (
        <section className=' bg-gray-100 min-h-screen flex flex-col justify-center items-center'>
            <div className='bg-white p-6  md:mx-auto md:px-24'>
                <svg
                    viewBox='0 0 24 24'
                    className='text-green-600 w-16 h-16 mx-auto my-6'
                >
                    <path
                        fill='currentColor'
                        d='M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z'
                    ></path>
                </svg>
                <div className='text-center'>
                    <h3 className='md:text-2xl text-base text-gray-900 font-semibold text-center'>
                        Order Placed Successfully!
                    </h3>
                    <section className='text-gray-600 my-2'>
                        <p>
                            Thank you for completing the order placement
                            process.
                        </p>
                        <p>One of our admins will verify your order soon.</p>
                    </section>
                    <section>
                        <span className=' font-medium flex justify-center'>
                            Your Order ID is:&nbsp;
                            <p className='font-semibold'>{orderID}</p>
                        </span>
                        <p>Please store it for future references</p>
                    </section>
                    <div className='py-10 text-center'>
                        <Link
                            href='/dashboard'
                            className='px-12 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3'
                        >
                            GO TO DASHBOARD
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
