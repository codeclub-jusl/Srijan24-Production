'use client'
import React from 'react'
import Script from 'next/script';
import Image from 'next/image';
import Link from 'next/link';
import AuthHOC from '@/hoc/AuthHOC'
import styles from './dashboard.module.css'
import { useSelector } from 'react-redux'
const page = () => {
    const user = useSelector(state => state.userReducer.user)
    return (
        <div className={styles.body_container}>
            <div className='bg-[url(/images/about/about.png)] flex items-center justify-center min-h-screen'>
                <div className={styles.marquee}>
                    <div className={styles.typing}>
                        <p id="word"></p><p className={styles.blink}>|</p>
                    </div>
                </div>
                {user ? (
                    <div className={styles.card_container}>

                        <div className={styles.card_holder}>
                            <Link href="/testprop">
                                <div className={styles.card}>
                                    <div className={styles.wrapper}>
                                        <img src="/assets/card-cover2.jpg" alt='img' />
                                    </div>
                                    <h1 className={`${styles.title}`}>MY PROFILE</h1>
                                    <img src="/assets/card3.png" alt='img' className={styles.character} />
                                </div>
                            </Link>
                            <Link href="/registeredevents">
                                <div className={styles.card}>
                                    <div className={styles.wrapper}>
                                        <img src="/assets/card-cover5.jpg" alt='img' />
                                    </div>
                                    <h1 className={`${styles.title}`}>MY REGISTERED EVENTS</h1>
                                    <img src="/assets/card6.png" alt='img' className={styles.character} />
                                </div>
                            </Link>

                        </div>
                        <div className={styles.card_holder}>
                            <Link href="/pending-registrations">
                                <div className={styles.card}>
                                    <div className={styles.wrapper}>
                                        <img src="/assets/card-cover4.jpg" alt='img' />
                                    </div>
                                    <h1 className={`${styles.title}`}>PENDING REGISTRATIONS</h1>
                                    <img src="/assets/card9.png" alt='img' className={styles.character} />
                                </div>
                            </Link>
                            <Link href="/watchlist">
                                <div className={styles.card}>
                                    <div className={styles.wrapper}>
                                        <img src="/assets/card-cover1.jpg" alt='img' />
                                    </div>
                                    <h1 className={`${styles.title}`}>MY WATCHLIST</h1>
                                    <img src="/assets/card4(1).png" alt='img' className={styles.character} />
                                </div>
                            </Link>
                        </div>

                    </div>
                ) : (
                    <p>Loading</p>
                )}
            </div>


            <Script src="/js/profile.js" defer></Script>
        </div>

    );
}

export default page
