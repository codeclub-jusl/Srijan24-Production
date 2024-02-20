import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import './Ambassador.css'
import smile from '../../assets/smile.png'
import stake from '../../assets/stake.png'
import loud from '../../assets/loud.png'
import hand from '../../assets/hand.png'
import trophy from '../../assets/trophy.png'
import logo from '../../assets/amblogo.png'
import cross from '../../assets/cross.png'

const Ambassador = () => {
    return (
        <section className='campus_ambassador w-full min-h-screen px-10 md:px-16 py-10 md:py-16 bg-[#030022]'>
            <div className='logo_container absolute right-[4%] top-[2rem]'>
                <Image
                    src={logo}
                    width={80}
                    height={80}
                    className='relative hidden sm:block'
                />
                <Image
                    src={logo}
                    width={70}
                    height={70}
                    className='relative -top-4 sm:hidden'
                />
            </div>
            <div className='relative flex flex-row gap-16 w-full mt-10'>
                <div className='relative flex flex-col w-full lg:w-[55%]'>
                    <h1 className='relative font-Montserrat text-[#A067FE] font-semibold text-[3rem] sm:text-[4rem] leading-[4rem] sm:leading-[5rem] mb-8'>
                        JOIN, SHINE, WIN!
                    </h1>
                    <p className='relative font-Montserrat text-white font- text-[24px] sm:text-[28px] leading-[34px] mb-10'>
                        Be a campus ambassador of SRIJAN, 2024, unleash your
                        Tech-vibes and win amazing rewards!
                    </p>
                    <Link
                        href='https://forms.gle/R2LXS6DEnQfdnmZC6'
                        target='_blank'
                        className='apply relative text-white font-Montserrat text-[2rem] leading-[39px] w-[15rem] h-[3.5rem] flex justify-center items-center rounded-[32px] mb-8 transition-all duration-1000'
                    >
                        Apply Now
                    </Link>
                    <h1 className='relative font-Montserrat text-[#A067FE] font-semibold text-[52px] sm:text-[56px] leading-[4rem] sm:leading-[5rem] my-6'>
                        What will you get?
                    </h1>
                </div>
                <div className='relative w-[20rem] h-[20.5rem] bg-[#D9D9D9] top-8 hidden lg:block'>
                    <Image src={cross} fill className='object-cover' />
                </div>
            </div>
            <div className='relative w-full sm:w-[90%] min-h-fit flex flex-wrap items-center justify-between text-center gap-10 xl:gap-0 my-8'>
                <div className='benefits relative text-white flex items-center text-center w-[234px] h-[234px] rounded-full font-Montserrat font-semibold text-[34px] leading-[40px] p-4 mx-auto'>
                    Build a Network
                </div>
                <div className='benefits relative text-white flex items-center text-center w-[234px] h-[234px] rounded-full font-Montserrat font-semibold text-[34px] leading-[40px] p-4 mx-auto'>
                    Certificates & Rewards
                </div>
                <div className='benefits relative text-white flex items-center text-center w-[234px] h-[234px] rounded-full font-Montserrat font-semibold text-[34px] leading-[40px] p-4 mx-auto'>
                    Learn new skills
                </div>
                <div className='benefits relative text-white flex items-center text-center w-[234px] h-[234px] rounded-full font-Montserrat font-semibold text-[34px] leading-[40px] p-4 mx-auto'>
                    Much More
                </div>
            </div>
            <h1 className='relative font-Montserrat text-[#A067FE] font-semibold text-[52px] sm:text-[56px] leading-[4rem] sm:leading-[5rem] mt-6 mb-12'>
                What will you do?
            </h1>
            <div className='duties relative h-fit w-full flex flex-col items-center justify-center gap-8 xl:gap-6 px-4 sm:px-12 py-10 rounded-[50px]'>
                <div className='relative w-full h-fit flex flex-row items-center gap-5'>
                    <Image src={smile} width={52} height={52} />
                    <p className='relative font-Montserrat font-semibold text-[1.5rem] sm:text-[1.75rem] leading-[39px] text-white'>
                        Be the face of F.E.T.S.U presents Srijan, 2024
                    </p>
                </div>
                <div className='relative w-full h-fit flex flex-row items-center gap-5'>
                    <Image src={stake} width={52} height={52} />
                    <p className='relative font-Montserrat font-semibold text-[1.5rem] sm:text-[1.75rem] leading-[39px] text-white'>
                        Encourage your friends to participate in Srijan{' '}
                    </p>
                </div>
                <div className='relative w-full h-fit flex flex-row items-center gap-5'>
                    <Image src={loud} width={52} height={52} />
                    <p className='relative font-Montserrat font-semibold text-[1.5rem] sm:text-[1.75rem] leading-[39px] text-white'>
                        Promote our Social Media handles and Events{' '}
                    </p>
                </div>
                <div className='relative w-full h-fit flex flex-row items-center gap-5'>
                    <Image src={hand} width={52} height={52} />
                    <p className='relative font-Montserrat font-semibold text-[1.5rem] sm:text-[1.75rem] leading-[39px] text-white'>
                        Explore our events and take part in hackathons,
                        workshops etc.{' '}
                    </p>
                </div>
                <div className='relative w-full h-fit flex flex-row items-center gap-5'>
                    <Image src={trophy} width={52} height={52} />
                    <p className='relative font-Montserrat font-semibold text-[1.5rem] sm:text-[1.75rem] leading-[39px] text-white'>
                        Win amazing rewards on completing milestones{' '}
                    </p>
                </div>
            </div>
            <div className='rewards w-full h-fit px-4 py-4 my-16 rounded-3xl'>
                <div className='relative w-full h-fit flex items-center justify-center sm:gap-12'>
                    <Image
                        src={trophy}
                        width={52}
                        height={52}
                        className='max-[550px]:hidden'
                    />
                    <h1 className='relative font-Montserrat text-[#9747FF] font-semibold text-[3rem] sm:text-[3.75rem] leading-[4rem] sm:leading-[4.5rem] mb-4 sm:mb-0'>
                        Rewards!
                    </h1>
                    <Image
                        src={trophy}
                        width={52}
                        height={52}
                        className='max-[550px]:hidden'
                    />
                </div>
                <div className='relative w-full h-fit flex flex-col lg:flex-row justify-between items-center gap-20 xl:gap-1 px-2 xl:px-12 py-8'>
                    <div className='relative flex flex-col justify-center items-center text-center gap-4 w-[90%] xl:w-[30%] px-4'>
                        <p className='relative font-Montserrat text-xl font-semibold text-white'>
                            Get 10+ registrations
                        </p>
                        <p className='slabs text-center text-white font-Montserrat text-xl font-semibold px-6 py-2 rounded-lg'>
                            Certificate of Appreciation!
                        </p>
                    </div>
                    <div className='relative flex flex-col justify-center items-center text-center gap-4 w-[90%] xl:w-[30%] px-4'>
                        <p className='relative font-Montserrat text-xl font-semibold text-white'>
                            Get 35+ registrations
                        </p>
                        <p className='slabs text-center text-white font-Montserrat text-xl font-semibold px-6 py-2 rounded-lg'>
                            Certificate of Appreciation & SRIJAN Merchandise
                        </p>
                    </div>
                    <div className='relative flex flex-col justify-center items-center text-center gap-4 w-[90%] xl:w-[30%] px-4'>
                        <p className='relative font-Montserrat text-xl font-semibold text-white'>
                            Get 50+ registrations{' '}
                        </p>
                        <p className='slabs text-center text-white font-Montserrat text-xl font-semibold px-6 py-2 rounded-lg'>
                            Certificate of Appreciation, Badge and merchandise{' '}
                        </p>
                    </div>
                </div>
            </div>
            <div className='relative w-full h-fit'>
                <h1 className='relative font-Montserrat text-[#9747FF] font-semibold text-[3rem] sm:text-[3.75rem] leading-[4rem] sm:leading-[4.5rem] mb-4'>
                    Eligibility
                </h1>
                <p className='relative font-Montserrat text-xl sm:text-2xl font-normal text-white my-4'>
                    You must be enrolled in a college/university other than
                    <span className='relative font-semibold'>
                        {' '}
                        Jadavpur University
                    </span>
                </p>
            </div>
        </section>
    )
}

export default Ambassador
