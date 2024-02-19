'use client'
import React, { useEffect, useState } from 'react'
import Modal from '@/components/EventComponents/Modal'
import { BsCalendar, BsPeople } from 'react-icons/bs'
import { MdCall } from 'react-icons/md'
import { useRouter } from 'next/navigation'
import { useDispatch, useSelector } from 'react-redux'
import Link from 'next/link'
import { doc, getDoc, updateDoc } from 'firebase/firestore'
import { db } from '@/firebase/config'
import { loginUser } from '@/store/userSlice'
import { notification } from 'antd'
import { getEventById } from '@/utils/event'
import BeatLoader from 'react-spinners/BeatLoader'

const page = ({ params }) => {
    const router = useRouter()
    const dispatch = useDispatch()
    const user = useSelector(state => state.userReducer.user)

    const [loading, setLoading] = useState(false)
    const [watchlistButton, setWatchlistButton] = useState('Add to Watchlist')

    const { events_id } = params
    // console.log(params);

    useEffect(() => {
        if (user && user.events.watchlist.includes(events_id)) {
            setWatchlistButton('Remove from Watchlist')
        } else {
            setWatchlistButton('Add to Watchlist')
        }
    }, [user])

    // const eventData = {
    //     eventId: '007',
    //     eventName: "Climbon'23",
    //     eventDate: {
    //         prelims: ['April 15, 2023'],
    //         finals: 'April 16, 2023',
    //     },
    //     eventPoster: '/assets/events/poster/CLIMBON.png',
    //     eventType: 'misc',
    //     eventHashtags: ['Mountaineering', 'Climbing'],
    //     eventCoordinators: [
    //         'Krishna Mittal [ 8540062753 ]',
    //         'Urwah Jawaid [ 9103158993 ]',
    //         'Ashish Kumar Mandal [ 7294925744 ]',
    //     ],
    //     minMembers: 3,
    //     maxMembers: 5,
    //     eventDescription: [
    //         'CLIMBON is an artificial rock climbing competition organized by Jadavpur University Mountaineering And Hiking Club every year. It is open to all and there is no age or gender bar. No prior experience is required. Any passionate person from any college can participate. The competition would take place under the supervision of esteemed instructors and all the safety gears would also be provided. It is the best place for any adventurer to begin.',
    //     ],
    //     eventRules: [
    //         'Climbing routes: The competition may have different climbing routes with varying levels of difficulty, which are marked with colored holds. Climbers must follow the designated route and only use the marked holds. Touching any other part of the wall or using any other holds is not allowed and may result in disqualification.',
    //         'Timing: Each climber has a set amount of time to complete the route. The time limit may vary depending on the difficulty level of the route. If the climber does not complete the route within the specified time, their score will be based on the furthest point they reached.',
    //         'Scoring: The score is determined by the number of holds the climber reaches and touches during the climb. Climbers are awarded points for each hold they touch. The climber with the highest score in their category wins.',
    //         'Categories: Climbers may be grouped into different categories based on their gender. Each category may have different routes and scoring criteria.',
    //         "Safety: Safety is of utmost importance in artificial rock climbing contests. Climbers must follow all safety guidelines and instructions provided by event organizers. Judges may stop a climber's ascent if they feel that the climber is in danger or not following safety rules.",
    //         'Sportsmanship: Climbers are expected to display good sportsmanship and respect for fellow competitors. Any unsportsmanlike behavior or actions that endanger others may result in disqualification.',
    //         'Equipment: We will provide all the necessary equipment for the competition, but climbers are encouraged to wear well-fitting shoes with a thin sole and good grip, such as PT shoes.',
    //     ],
    //     eventRuleLink:
    //         'https://drive.google.com/file/d/1LUraTyqbn8HVO2_sKE_Dh7nvUfi_hJas/view',
    // }

    const eventData = getEventById(events_id)
    // console.log(eventData);

    const teamSize =
        eventData.maxMembers === 1
            ? 'Individual'
            : `${eventData.minMembers}-${eventData.maxMembers} members`

    const [isModalOpen, setIsModalOpen] = useState(false)

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen)
    }

    const handleRegister = e => {
        e.preventDefault()
        toggleModal()
    }

    const handleWatchList = async e => {
        e.preventDefault()
        setLoading(true)

        const userRef = doc(db, 'users', user.email)
        const userSnap = await getDoc(userRef)

        if (userSnap.exists()) {
            const userData = userSnap.data()

            if (watchlistButton === 'Add to Watchlist') {
                userData.events.watchlist.push(eventData.eventId)
            } else {
                const index = userData.events.watchlist.indexOf(events_id)

                if (index !== -1) {
                    userData.events.watchlist.splice(index, 1)
                }
            }

            await updateDoc(userRef, userData)
                .then(() => {
                    dispatch(
                        loginUser({
                            ...user,
                            ...userData,
                        }),
                    )

                    if (watchlistButton === 'Add to Watchlist') {
                        notification['success']({
                            message: `Event added to watchlist`,
                            duration: 3,
                        })
                    } else {
                        notification['success']({
                            message: `Event removed from watchlist`,
                            duration: 3,
                        })
                    }
                    setLoading(false)
                })
                .catch(err => {
                    notification['error']({
                        message: `Something went wrong!`,
                        duration: 3,
                    })
                })
        }
        setLoading(false)
    }

    // Define mapping from names to icons
    const iconMap = {
        'Krishna Mittal': <BsPeople />,
        'Urwah Jawaid': <BsPeople />,
        'Ashish Kumar Mandal': <BsPeople />,
    }

    return (
        <div className='bg-gradient-to-br from-black via-sky-950 to-black text-white min-h-screen flex justify-center items-center font-body'>
            <div className='container mx-auto px-4 py-8'>
                <h1 className='text-4xl font-bold mb-6 text-center'>
                    <span
                        style={{
                            backgroundClip: 'text',
                            WebkitBackgroundClip: 'text',
                            color: 'transparent',
                            backgroundImage:
                                'linear-gradient(to right, #87CEEB, #00BFFF)',
                        }}
                    >
                        {eventData.eventName}
                    </span>
                </h1>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <div className='bg-opacity-50 p-6 rounded-lg flex items-center justify-center md:col-span-1'>
                        <img
                            src={eventData.eventPoster}
                            alt={eventData.eventName}
                            className='mx-auto mb-6 rounded-lg max-w-full h-auto'
                        />
                    </div>
                    <div className='flex flex-col gap-10 bg-opacity-50 p-6 rounded-lg md:col-span-1 '>
                        <div className='flex flex-col shadow-2xl p-5'>
                            <div className='flex items-center mb-4'>
                                <BsCalendar className='mr-2' />
                                <p>
                                    <strong>Event Date (Prelims):</strong>{' '}
                                    {eventData.eventDate.prelims.join(', ')}
                                </p>
                            </div>
                            <div className='flex items-center mb-4'>
                                <BsCalendar className='mr-2' />
                                <p>
                                    <strong>Event Date (Finals):</strong>{' '}
                                    {eventData.eventDate.finals}
                                </p>
                            </div>
                            <div className='flex items-center mb-4'>
                                <BsPeople className='mr-2' />
                                <p>
                                    <strong>Team Size:</strong> {teamSize}
                                </p>
                            </div>
                        </div>

                        <div className='bg-opacity-50 rounded-lg shadow-2xl p-5 text-sm md:text-lg'>
                            <p className='mb-2'>
                                <strong className='text-xl md:text-2xl '>
                                    Event Coordinators:
                                </strong>
                            </p>
                            <ul className='list-disc '>
                                {eventData.eventCoordinators.map(
                                    (coordinator, index) => {
                                        const [name, phoneNumber] =
                                            coordinator.split(' [ ')
                                        return (
                                            <li
                                                key={index}
                                                className='flex items-center mb-2'
                                            >
                                                {iconMap[name]}
                                                <span className='ml-2'>
                                                    {name}
                                                </span>
                                                <a
                                                    href={`tel:${phoneNumber
                                                        .replace(']', '')
                                                        .trim()}`}
                                                    className='ml-2 flex items-center text-green-500'
                                                >
                                                    <MdCall className='mr-1' />
                                                    {phoneNumber
                                                        .replace(']', '')
                                                        .trim()}
                                                </a>
                                            </li>
                                        )
                                    },
                                )}
                            </ul>
                        </div>

                        <div className='flex flex-col p-5 shadow-2xl '>
                            <p className='mb-2'>
                                <strong className='text-xl md:text-2xl'>
                                    Event Description:
                                </strong>
                            </p>
                            <p className='text-sm md:text-lg'>
                                {eventData.eventDescription}
                            </p>
                        </div>
                    </div>
                </div>
                {user ? (
                    <div className='mt-4 flex justify-center'>
                        <button
                            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded glow-on-hover'
                            onClick={handleRegister} // toggleModal
                        >
                            Register Now
                        </button>
                        <button
                            className='bg-[#000032]
                         hover:bg-blue-700 text-white font-bold py-2 px-4 rounded glow-on-hover ml-4'
                            onClick={handleWatchList}
                        >
                            {loading ? (
                                <BeatLoader color='#ffffff' />
                            ) : (
                                watchlistButton
                            )}
                        </button>
                    </div>
                ) : (
                    <div className='mt-4 flex justify-center'>
                        <Link
                            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded glow-on-hover'
                            href='/login'
                        >
                            Log in to register
                        </Link>
                    </div>
                )}
                <Modal
                    isOpen={isModalOpen}
                    onClose={toggleModal}
                    minMembers={eventData.minMembers}
                    maxMembers={eventData.maxMembers}
                    eventId={eventData.eventId}
                />
                <div className='bg-opacity-50 p-6 rounded-lg mt-6'>
                    <p className='mb-2'>
                        <strong className='text-xl md:text-2xl'>
                            Event Rules:
                        </strong>
                    </p>
                    <ul className='list-disc pl-6 text-sm md:text-lg'>
                        {eventData.eventRules.map((rule, index) => (
                            <li key={index} className='mb-4'>
                                {rule}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default page
