'use client'
import React, { Suspense } from 'react'
import Loading from '@/components/Login'

/**
 * Loads script to the document.
 *
 * Loading script takes certain amount of time, thus it returns a promise, which is
 * fulfilled if the script is loaded successfully, else the promise is rejected.
 *
 * @param {string | URL} src The URL of the script to be loaded.
 *
 * @returns {Promise<boolean>} Whether the script could be loaded successfully or not.
 */
function loadScript(src) {
    return new Promise(resolve => {
        const script = document.createElement('script')
        script.src = src

        script.onload = function () {
            resolve(true)
        }

        script.onerror = function () {
            resolve(false)
        }

        document.appendChild(script)
    })
}
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
