import { LiaPowerOffSolid } from 'react-icons/lia'
import { GoClock } from 'react-icons/go'
import { GoImage } from 'react-icons/go'
import { CiMail } from 'react-icons/ci'
import Link from 'next/link'
import Image from 'next/image'
import { Montserrat } from 'next/font/google'

import srijanLogoWhite from '@assets/srijanLogoRectangleWhite.png'

const montserrat = Montserrat({ subsets: ['latin'] })

function Navbar() {
    return (
        <nav id='Navbar' className={`w-full px-8 ${montserrat.className}`}>
            <div className='flex flex-row bg-transparent py-2 justify-between w-full'>
                <Link href={'/'} className=''>
                    <Image alt='srijanlogo' height={50} src={srijanLogoWhite} />
                </Link>
                <ul className='flex flex-row justify-center items-center gap-x-5 text-white font-medium'>
                    <li>
                        <Link href={'/'}>Home</Link>
                    </li>
                    <li>
                        <Link href={'/events'}>Events</Link>
                    </li>
                    <li>
                        <Link href={'/profile'}>Profile</Link>
                    </li>
                    <li>
                        <Link href={'/login'}>Login</Link>
                    </li>
                    <li>
                        <Link href={'/signup'}>Signup</Link>
                    </li>
                </ul>
            </div>
            {/* <div className='bg-gradient-to-b from-[#FFFFFF66]  to-[#1B00474D] z-50 sm:h-[200px] h-[45px] fixed sm:w-[45px] w-[90vw] sm:top-[35vh] bottom-[5vh] sm:left-[5vw] left-[5vw] rounded-t-3xl rounded-b-3xl p-[2px] '>
                    <div
                        className='flex sm:flex-col flex-row h-full bg-gradient-to-b from-[#6100FF40] via-[#6100FF40] to-[#6100FF80]
                      rounded-t-3xl rounded-b-3xl justify-around gap-2 sm:py-2 -sm:px-2'
                    >
                        <Link href='#' className='my-auto mx-auto'>
                            <LiaPowerOffSolid size={35} color='#FFFFFF66' />
                        </Link>
                        <Link href='#' className='mx-auto my-auto'>
                            <GoClock size={33} color='#FFFFFF66' />
                        </Link>
                        <Link href='#' className='mx-auto my-auto'>
                            <GoImage size={35} color='#FFFFFF66' />
                        </Link>
                        <Link href='#' className='mx-auto my-auto'>
                            <CiMail
                                size={35}
                                color='#FFFFFF66'
                                style={{ strokeWidth: '0.45px' }}
                            />
                        </Link>
                    </div>
                </div> */}
        </nav>
    )
}
export default Navbar
