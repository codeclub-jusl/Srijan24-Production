'use client'

import React, { useState } from 'react'
import './Footer.css'
import Image from 'next/image'
import { ReactTyped } from 'react-typed'
import { notification } from 'antd'
import { doc, setDoc } from 'firebase/firestore'
import { db } from '@/firebase/config'
import { IoMdMail } from "react-icons/io";

const Footer = () => {
    const [email, setEmail] = useState('');
    const [buttonText, setButtonText] = useState("Subscribe");

    const handleClick = async (e) => {
        e.preventDefault();

        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(email)) {
            notification['error']({
                message: `Invalid email`,
                duration: 3
            })
        } else {
            setButtonText("Subscribing...");

            await setDoc(doc(db, "subscribers", email), {
                email,
            })

            notification['success']({
                message: `Successfully subscribed to Srijan'24 Newsletter`,
                duration: 3
            })

            setEmail('');

            setButtonText("Subscribe");
        }
    }

    return (
        <>
            <div className='footerContainer'>
                <div className='footerUpper'>
                    <div className='footerLeft'>
                        <div className='footerLeftLogos'>
                            <Image
                                src='/assets/Vector.png'
                                alt='logo'
                                height={70}
                                width={70}
                                draggable={false}
                                className='clubLogo clubLogo1'
                            />
                            <Image
                                src='/assets/julogo.png'
                                alt='logo'
                                height={70}
                                width={70}
                                draggable={false}
                                className='clubLogo clubLogo2'
                            />
                        </div>
                        <div className='socialLogo'>
                            <a
                                href='https://www.instagram.com/srijan_ju/'
                                target='_blank'
                                className='text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600'
                            >
                                <svg
                                    className='h-5 w-5'
                                    width='24'
                                    height='24'
                                    viewBox='0 0 24 24'
                                    fill='currentColor'
                                    xmlns='http://www.w3.org/2000/svg'
                                >
                                    <path d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' />
                                </svg>
                            </a>
                            <a
                                href='https://www.facebook.com/jusrijan'
                                target='_blank'
                                className='text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600'
                            >
                                <svg
                                    className='h-5 w-5'
                                    width='24'
                                    height='24'
                                    aria-hidden='true'
                                    xmlns='http://www.w3.org/2000/svg'
                                    fill='currentColor'
                                    viewBox='0 0 24 24'
                                >
                                    <path
                                        fillRule='evenodd'
                                        d='M13.1 6H15V3h-1.9A4.1 4.1 0 0 0 9 7.1V9H7v3h2v10h3V12h2l.6-3H12V6.6a.6.6 0 0 1 .6-.6h.5Z'
                                        clipRule='evenodd'
                                    />
                                </svg>
                            </a>
                            <a
                                href='https://www.linkedin.com/company/srijan-ju/'
                                target='_blank'
                                className='text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600'
                            >
                                <svg
                                    className='h-5 w-5'
                                    width='24'
                                    height='24'
                                    viewBox='0 0 24 24'
                                    fill='currentColor'
                                    xmlns='http://www.w3.org/2000/svg'
                                >
                                    <path d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' />
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div className='footerRight'>
                        <div className='footerColumn'>
                            <div className='footerHeading'>EXPLORE</div>
                            <a href='/'>Home</a>
                            <a className='disabledLink'>Events</a>
                            <a className='disabledLink'>Merchandise</a>
                            <a className='disabledLink'>Ambassadors</a>
                        </div>
                        <div className='footerColumn'>
                            <div className='footerHeading'>LEGAL</div>
                            <a href='/pdf/Srijan_Privacy_Policy.pdf' target='_blank'>Privacy</a>
                            <a href='/pdf/Srijan_Terms_and_Conditions.pdf' target='_blank'>Terms</a>
                            <a href='/pdf/Srijan_Event_Brochure.pdf' target='_blank'>Event</a>
                            <a href='/pdf/Srijan_Sponsorship_Brochure.pdf' target='_blank'>Sponsor</a>
                        </div>
                    </div>

                    <div className='footerBottom'>
                        <div className='newsLetter'>
                            <h2>Join our Newsletter</h2>
                            <div className='newsLetterForm'>
                                <ReactTyped
                                    strings={[
                                        'Enter your email',
                                        'Get latest updates',
                                    ]}
                                    typeSpeed={40}
                                    backSpeed={50}
                                    attr='placeholder'
                                    loop
                                >
                                    <input type='text' value={email} onChange={(e) => {setEmail(e.target.value); }} />
                                </ReactTyped>
                                <button onClick={handleClick}>{buttonText}</button>
                            </div>
                            <p>
                                * will send you updates when new features will be
                                unlocked
                            </p>
                        </div>
                    </div>
                </div>
                <div className='footerBottom2'>
                    <div className='newsLetter'>
                        <h2>Join our Newsletter</h2>
                        <div className='newsLetterForm'>
                            <ReactTyped
                                strings={[
                                    'Enter your email',
                                    'Get latest updates',
                                ]}
                                typeSpeed={40}
                                backSpeed={50}
                                attr='placeholder'
                                loop
                            >
                                <input type='text' value={email} onChange={(e) => {setEmail(e.target.value); }} />
                            </ReactTyped>
                            <button onClick={handleClick}>{buttonText}</button>
                        </div>
                        <p>
                            * will send you updates when new things will be
                            unlocked
                        </p>
                    </div>
                </div>
                <div className="border-t border-gray-800 py-8 text-center text-sm text-gray-400">© 2024 - F.E.T.S.U. Presents Srijan, Jadavpur University, Kolkata. All rights reserved.</div>
            </div>
        </>
    )
}

export default Footer
