import React from 'react'
import Script from 'next/script';
import Image from 'next/image';
import Link from 'next/link';
import './dasboard.css'
import DashBoardNav from '@/components/DashBoardNav/DashBoardNav';
const page = () => {
    return (
        <>
            <div className='absolute inset-0 -z-10'>
                <Image src="/assets/bg3.jpg" className='' alt="" width={0} height={0} sizes="100vw" style={{ width: '100%', height: '100vh' }}></Image>
            </div>

            <div className="marquee">
                <div className="typing">
                    <p className="header-sub-title" id="word"></p><p className="header-sub-title blink">|</p>
                </div>
            </div>

            <div>

                <div className='card-holder'>
                    <Link href="/profile">
                        <div className="card">
                            <div className="wrapper">
                                <img src="/assets/card-cover2.jpg" />
                            </div>
                            <h1 className='title text-white text-center'>MY PROFILE</h1>
                            <img src="/assets/card3.png" className="character" />
                        </div>
                    </Link>
                    <Link href="/registrations">
                        <div className="card">
                            <div className="wrapper">
                                <img src="/assets/card-cover5.jpg" />
                            </div>
                            <h1 className='title text-white text-center'>MY REGISTERED EVENTS</h1>
                            <img src="/assets/card6.png" className="character" />
                        </div>
                    </Link>

                </div>
                <div className='card-holder'>
                    <Link href="/pending-registrations">
                        <div className="card">
                            <div className="wrapper">
                                <img src="/assets/card-cover4.jpg" />
                            </div>
                            <h1 className='title text-white text-center'>PENDING REGISTRATIONS</h1>
                            <img src="/assets/card9.png" className="character" />
                        </div>
                    </Link>
                    <Link href="/watchlist">
                        <div className="card">
                            <div className="wrapper">
                                <img src="/assets/card-cover1.jpg" />
                            </div>
                            <h1 className='title text-white text-center'>MY WATCHLIST</h1>
                            <img src="/assets/card4(1).png" className="character" />
                        </div>
                    </Link>
                </div>


            </div>
            <DashBoardNav />
            <Script src="/js/profile.js" defer></Script>
        </>

    );
}

export default page
