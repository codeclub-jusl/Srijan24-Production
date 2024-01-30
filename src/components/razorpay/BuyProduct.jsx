'use client'
import React, { Suspense } from 'react'
import Loading from '@/components/Login'
const BuyProduct = () => {
    const [isLoading, setIsLoading] = useState(false)

    return (
        <>
            <Suspense fallback={<Loading />}>
                <h1>Randomly shop anything you like, who cares?</h1>
                <div className='flex flex-col items-center justify-center mt-[100px]'>
                    <h1 className='text-2xl'>Razor</h1>
                    <button
                        onClick={() => {
                            makePayment({
                                type: 'tshirt',
                                size: 'M',
                                baseColor: 'black',
                            })
                        }}
                        disabled={isLoading}
                        className={`bg-blue-500 text-white font-semibold mt-20 py-2 px-4 rounded ${
                            isLoading ? 'opacity-50 cursor-not-allowed' : ''
                        }`}
                    >
                        {isLoading ? 'Processing...' : 'Buy Now'}
                    </button>
                </div>
            </Suspense>
        </>
    )
}

export default BuyProduct
