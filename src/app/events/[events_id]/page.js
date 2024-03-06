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
import UserHOC from '@/hoc/UserHOC'
import InvitationModal from '@/components/EventComponents/InvitationModal'
import { FaWhatsapp } from 'react-icons/fa';


const page = ({ params }) => {
    const router = useRouter()
    const dispatch = useDispatch()
    const user = useSelector(state => state.userReducer.user)

    const [loading, setLoading] = useState(false)
    const [watchlistButton, setWatchlistButton] = useState('Add to Watchlist')
    const [registerButton, setRegisterButton] = useState('Register Now')
    const [eventStatus, setEventStatus] = useState('not registered')
    const [profileUpdated, setProfileUpdated] = useState(false)

    const { events_id } = params
    const capitalizeEveryWord = str => {
        return str.replace(/\b\w/g, char => {
            return char.toUpperCase()
        })
    }
    // console.log(params);

    const checkEvent = (userEvents, eventId) => {
        userEvents.find(obj => obj.eventId === eventId)
    }

    useEffect(() => {
        if (user && user.events.watchlist.includes(events_id)) {
            setWatchlistButton('Remove from Watchlist')
        } else {
            setWatchlistButton('Add to Watchlist')
        }

        if (user) {
            const object = user.events.registered.find(
                obj => obj.eventId === events_id,
            )
            if (object) setEventStatus(object.status)
            else setEventStatus('not registered')
        }

        if (
            user &&
            user.name &&
            user.college &&
            user.year &&
            user.phone &&
            user.dept
        ) {
            setProfileUpdated(true)
        } else {
            setProfileUpdated(false)
        }

        if (eventStatus !== 'not registered') {
            setRegisterButton(capitalizeEveryWord(eventStatus))
        } else {
            setRegisterButton('Register Now')
        }
    }, [user, eventStatus])

    const eventData = getEventById(events_id)

    let teamSize = 0;
    if(eventData!==undefined){
        teamSize = eventData.maxMembers === 1 ? 'Individual'
            : eventData.maxMembers===eventData.minMembers? `${eventData.minMembers} members` : `${eventData.minMembers}-${eventData.maxMembers} members`

    }
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [isInvitationModalOpen, setIsInvitationModalOpen] = useState(false)

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen)
    }

    const toggleInvitationModal = () => {
        setIsInvitationModalOpen(!isInvitationModalOpen)
    }

    const handleRegister = e => {
        e.preventDefault()
        if (eventStatus === 'pending' || eventStatus === 'registered') {
            toggleInvitationModal()
            return
        }

        // if (eventStatus === 'registered') {
        //     notification['info']({
        //         message: `You have already registered for the event`,
        //         duration: 3,
        //     })
        //     return
        // }

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
        user: <BsPeople />,
    }
    
    //WhatsApp URL
    const websiteUrl = `https://srijanju.in/events/${events_id}`;
    const shareText = `Check out this event: ${eventData.eventName}\n\n ${eventData.eventDescription}\n\nHead over to: ${websiteUrl} for exploring it!`;
    const shareUrl = `https://wa.me/?text=${encodeURIComponent(shareText)}`;


    return (
        <div className='bg-gradient-to-br from-black via-sky-950 to-black text-white min-h-screen flex justify-center items-center font-body'>
            {eventData===undefined && <div className='noEventBox'>
                    <h2>Event Not Found</h2>
                    <p>Sorry, but we can't find the event you are looking for...</p>
                </div>}
            {eventData && <div className='container mx-auto px-4 py-8'>
                <h1 className='text-4xl font-bold mb-6 text-center eventTitle'>
                    <span
                        style={{
                            backgroundClip: 'text',
                            WebkitBackgroundClip: 'text',
                            color: 'transparent',
                            backgroundImage:
                                // 'linear-gradient(to right, #87CEEB, #00BFFF)',
                                'linear-gradient(to right, #DADCDE, #067AD5)',
                        }}
                    >
                        {eventData && eventData.eventName}
                    </span>
                </h1>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <div className='bg-opacity-50 p-6 rounded-lg flex items-center justify-center md:col-span-1'>
                        <img
                            src={eventData && eventData.eventPoster}
                            alt={eventData && eventData.eventName}
                            className='mx-auto mb-6 rounded-lg max-w-full h-auto'
                        />
                    </div>
                    <div className='flex flex-col gap-5 bg-opacity-50 p-6 rounded-lg md:col-span-1 '>
                        <div className='flex flex-col shadow-2xl p-3'>
                            {eventData && eventData.eventDate && eventData.eventDate.prelims && <div className='flex items-center mb-4'>
                                <BsCalendar className='mr-2' />
                                <p>
                                    <strong>Event Date (Prelims):</strong>{' '}
                                    {eventData.eventDate.prelims.join(', ')}
                                </p>
                            </div>}
                            {eventData && eventData.eventDate && eventData.eventDate.finals && <div className='flex items-center mb-4'>
                                <BsCalendar className='mr-2' />
                                <p>
                                    <strong>Event Date (Finals):</strong>{' '}
                                    {eventData.eventDate.finals}
                                </p>
                            </div>}
                            <div className='flex items-center mb-4'>
                                <BsPeople className='mr-2' />
                                <p>
                                    <strong>Team Size:</strong> {teamSize}
                                </p>
                            </div>
                        </div>

                        <div className='bg-opacity-50 rounded-lg shadow-2xl p-3 text-sm md:text-lg'>
                            <p className='mb-2'>
                                <strong className='text-lg md:text-xl '>
                                    Event Coordinators:
                                </strong>
                            </p>
                            <ul className='list-disc '>
                                {eventData && eventData.eventCoordinators.map(
                                    (coordinator, index) => {
                                        const [name, phoneNumber] =
                                            coordinator.split(' [ ')
                                        return (
                                            <li
                                                key={index}
                                                className='flex items-center mb-2'
                                            >
                                                {iconMap['user']}
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
                        {eventData && eventData.prize && (
                                <div className='flex flex-col p-3 shadow-2xl'>
                                <p className='mb-2'>
                                    <strong className='text-lg md:text-xl'>
                                    Prize:
                                    </strong>
                                </p>
                                <p className='text-sm md:text-base'>
                                    {eventData.prize && eventData.prize.length>0 && eventData.prize.map((data, id)=>{
                                        return(
                                            <li className='prizeListItem' key={id}>{data}</li>
                                        )
                                    })}
                                </p>
                                </div>
                            )}

                        <div className='flex flex-col p-3 shadow-2xl '>
                            <p className='mb-2'>
                                <strong className='text-lg md:text-xl'>
                                    Event Description:
                                </strong>
                            </p>
                            <p className='text-sm md:text-base eventDesc'>
                                {eventData && eventData.eventDescription && eventData.eventDescription.length>0 && eventData.eventDescription.map((data, id)=> (<p key={id}>{data}</p>))}
                            </p>
                        </div>
                        {eventData && eventData.documentLink && <div className='flex flex-col p-3 shadow-2xl '>
                            <p className='mb-2'>
                                {/* <strong className='text-lg md:text-xl'>
                                    Event Description:
                                </strong> */}
                            </p>
                            <p className='text-sm md:text-base eventDesc'>
                                Click <Link href={eventData.documentLink} className='documentLink'>here</Link> to know more about this event
                            </p>
                        </div>}

                             

                        {eventData && eventData.websiteLink && <div className='flex flex-col p-3 shadow-2xl '>
                                <p className='text-sm md:text-base eventDesc webLinkContainer'>
                                    <Link href={eventData.websiteLink} className='websiteLink'>Access Website</Link>
                                </p>
                            </div>}
                        </div>
                    </div>

                    
                    <div>
  <div className="flex items-center justify-center space-y-4">
 {eventData && eventData.groupLink && user && profileUpdated && eventStatus !== 'not registered' && (
  <div className='flex flex-col p-3 shadow-2xl border border-solid border-gray-300 rounded-md transition-all duration-500 ease-in-out hover:backdrop-blur-md'>
    <p className='eventDesc text-sm md:text-base'>
      Click{' '}
      <Link
        href={eventData.groupLink}
        className='documentLink'
        target='_blank'
        rel='noopener noreferrer'
      >
        here
      </Link>{' '}
      to join the official WhatsApp group for the event {eventData.eventName}
    </p>
  </div>
)}


  </div>

  <div className="flex justify-center">
  <div>
    <a href={shareUrl} target='_blank' rel='noopener noreferrer' className="flex items-center text-blue-500 p-2">
      <FaWhatsapp style={{ color: "#36d9a8" }} className="w-6 h-6" />
      <span className="text-base ml-2 font-semibold">Share on WhatsApp</span>
    </a>
  </div>
</div>
</div>






         
                {user ? (
                    user && profileUpdated ? (
                        <div className='mt-4 flex justify-center registerNowButton'>
                            {!eventData.unstopRegistrationLink && <button
                                className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded glow-on-hover'
                                onClick={handleRegister} // toggleModal
                            >
                                {registerButton}
                            </button>}
                            {eventData.unstopRegistrationLink && 
                                <Link
                                    className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded glow-on-hover registerUnstopButton'
                                    href={eventData.unstopRegistrationLink}
                                >
                                    Register on Unstop
                                </Link>
                            }

                            {eventStatus === 'not registered' && (
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
                            )}
                        </div>
                    ) : (
                        <div className='mt-4 flex justify-center'>
                            <Link
                                className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded glow-on-hover'
                                href='/profile'
                            >
                                Update profile to register
                            </Link>

                            {eventStatus === 'not registered' && (
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
                            )}
                        </div>
                    )
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
                    minMembers={eventData && eventData.minMembers}
                    maxMembers={eventData && eventData.maxMembers}
                    eventId={eventData && eventData.eventId}
                />
                <InvitationModal
                    isOpen={isInvitationModalOpen}
                    onClose={toggleInvitationModal}
                    eventId={eventData && eventData.eventId}
                />
                
                <div className='bg-opacity-50 p-6 rounded-lg mt-6'>
                    <p className='mb-2'>
                        <strong className='text-lg md:text-xl'>
                            Event Rules:
                        </strong>
                    </p>
                    <ul className='list-disc pl-6 text-sm md:text-lg'>
                        {eventData && Object.entries(eventData.eventRules).map(
                            ([round, rules], roundIndex) => (
                                <div key={roundIndex} className='mb-4'>
                                    <p className='text-lg font-semibold ruleList'>
                                        {round}
                                    </p>
                                    <ul className='list-disc pl-6 text-sm md:text-base'>
                                        {rules.map((rule, index) => (
                                            <li key={index} className='mb-2' dangerouslySetInnerHTML={{ __html: rule }}>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ),
                        )}
                    </ul>
                </div>
            </div>}
        </div>
    )
}

export default UserHOC(page)
