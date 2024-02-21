'use client'
import React, { useState } from 'react'
import './Modal.css'
import { useDispatch, useSelector } from 'react-redux'
import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore'
import { db } from '@/firebase/config'
import { notification } from 'antd'
import BeatLoader from 'react-spinners/BeatLoader'
import { loginUser } from '@/store/userSlice'
import { getEventById } from '@/utils/event'

const Modal = ({
    isOpen,
    onClose,
    teamSize,
    eventId,
    minMembers,
    maxMembers,
}) => {
    const dispatch = useDispatch()
    const user = useSelector(state => state.userReducer.user)

    const [loading, setLoading] = useState(false)
    const [emails, setEmails] = useState(
        Array.from({ length: minMembers - 1 }, () => ''),
    )
    const [teamName, setTeamName] = useState('')
    // const [team, setTeam] = useState(null)

    const [isValid, setIsValid] = useState(false)

    const handleEmailChange = (index, value) => {
        const newEmails = [...emails]
        newEmails[index] = value
        setEmails(newEmails)
        setIsValid(
            newEmails.slice(0, minMembers).every(email => email.trim() !== ''),
        )
    }
    const handleAddFriend = () => {
        if (emails.length < maxMembers) {
            setEmails(prevEmails => [...prevEmails, ''])
        }
    }

    const checkTeamName = (eventData, tname) => {
        return eventData.some(obj => obj.teamName === tname)
    }

    const checkEvent = (userEvents, eventId) => {
        return userEvents.some(obj => obj.eventId === eventId)
    }

    const checkUser = async userEmail => {
        const userRef = doc(db, 'users', userEmail)
        const userSnap = await getDoc(userRef)

        if (userSnap.exists()) {
            const userData = userSnap.data()

            if (checkEvent(userData.events.registered, eventId)) {
                notification['error']({
                    message: `${userEmail} has already registered for the event`,
                    duration: 3,
                })

                return false
            }

            return true
        } else {
            notification['error']({
                message: `${userEmail} does not have an account`,
                duration: 3,
            })

            return false
        }
    }

    const updateUser = async (userEmail, eventDesc, team) => {
        const userRef = doc(db, 'users', userEmail)
        const userSnap = await getDoc(userRef)

        if (userSnap.exists()) {
            const userData = userSnap.data()
            if (maxMembers === 1) {
                userData.events.registered.push({
                    eventId,
                    ...team,
                    status: 'registered',
                })
            } else {
                userData.events.registered.push({
                    eventId,
                    ...team,
                    status: 'pending',
                })
            }

            // const timeStamp = new Date().toLocaleString('en-US', { timeZone: 'UTC' });
            const timeStamp = Date.now()
            // console.log(timeStamp);

            if (userEmail === user.email) {
                let notificationString = ""
                if(maxMembers === 1) {
                    notificationString =
                        'You have successfully registered for the event: ' + eventDesc.eventName
                    
                } else {
                    notificationString =
                        'You have initiated registration for the event: ' + eventDesc.eventName
                }
                userData.notifications.push({ notificationString, timeStamp })

                if (userData.events.watchlist.includes(eventId)) {
                    const index = userData.events.watchlist.indexOf(eventId)
                    userData.events.watchlist.splice(index, 1)
                }
                // console.log(userData);
            } else {
                userData.invitations.push({
                    eventId,
                    teamName: team.teamName,
                    timeStamp,
                })
            }

            await updateDoc(userRef, userData)

            // console.log(userData)

            return userData
        }

        return null
    }

    const areEmailsUnique = (emails) => {
        const uniqueEmails = new Set(emails);
        return uniqueEmails.size === emails.length;
    }

    const handleSubmit = async e => {
        e.preventDefault()

        if (teamName.trim().length === 0) {
            notification['error']({
                message: `Enter your team name`,
                duration: 3,
            })
            return
        }

        let allEmails = [...emails, user.email]
        if(!areEmailsUnique(allEmails)) {
            notification['error']({
                message: `All the members should have unique email id`,
                duration: 3,
            })
            return
        }

        setLoading(true)

        // console.log(teamName.toLowerCase().trim());
        const modifiedTeamName = teamName
            .toLowerCase()
            .trim()
            .replace(/\s/g, '')

        const teamRef = doc(db, eventId, modifiedTeamName)
        // console.log(teamRef);
        const teamSnap = await getDoc(teamRef)

        if (teamSnap.exists()) {
            notification['error']({
                message: `Teamname already in use`,
                duration: 3,
            })

            setLoading(false)
            return
        }

        for (let i = 0; i < emails.length; i++) {
            const res = await checkUser(emails[i])
            if (!res) {
                setLoading(false)
                return
            }
        }

        let members = [{ email: user.email, accepted: true }]
        for (let i = 0; i < emails.length; i++) {
            members.push({ email: emails[i], accepted: false })
        }

        let team = {
            teamName,
            leader: user.email,
            members: members,
            status: 'pending',
        }

        if (maxMembers === 1) {
            team = { ...team, status: 'registered' }
        }

        const eventDesc = getEventById(eventId)
        const updatedCurrentUser = await updateUser(user.email, eventDesc, team)
        dispatch(loginUser({ ...user, ...updatedCurrentUser }))

        if (maxMembers === 1) {
            await setDoc(doc(db, eventId, modifiedTeamName), {
                ...team,
                status: 'registered',
            })
                .then(() => {
                    notification['success']({
                        message: `Registered successfully`,
                        duration: 3,
                    })
                })
                .catch(err => {
                    notification['error']({
                        message: `Something went wrong! Try again later`,
                        duration: 3,
                    })
                })
        } else {
            await setDoc(doc(db, eventId, modifiedTeamName), {
                ...team,
            })
                .then(async () => {
                    for (let i = 0; i < emails.length; i++) {
                        const res = await updateUser(emails[i], eventDesc, team)
                    }

                    notification['success']({
                        message: `Invitations sent to the members`,
                        duration: 3,
                    })
                })
                .catch(err => {
                    notification['error']({
                        message: `Something went wrong! Try again later`,
                        duration: 3,
                    })
                })
        }

        setLoading(false)
        onClose()
    }

    if (!isOpen) return null
    // console.log(teamSize, eventId, minMembers, maxMembers, emails, isValid)

    return (
        <div className='fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50'>
            {/* <div className='bg-slate-400 p-8 max-w-lg rounded-lg shadow-md'></div> */}
            <form action='' className='login__form' onSubmit={handleSubmit}>
                <strong
                    className='text-l align-right cursor-pointer alert-del w-6 h-6 text-center bg-red-500 rounded-full absolute top-4 right-4 hover:bg-red-600 hover:text-white
                '
                    onClick={onClose}
                >
                    X
                </strong>
                <h1 className='login__title'>Register Now</h1>

                <div className='login__content'>
                    <div className='login__box'>
                        <i className='ri-user-3-line login__icon'></i>

                        <div className='login__box-input'>
                            <input
                                type='text'
                                required
                                className='login__input'
                                id='team-name'
                                placeholder=' '
                                value={teamName}
                                onChange={e => setTeamName(e.target.value)}
                            />
                            <label
                                htmlFor='login-email'
                                className='login__label'
                            >
                                Team Name
                            </label>
                        </div>
                    </div>
                    <div className=' items-center'>
                        <div className='login__box'>
                            <i className='ri-user-3-line login__icon'></i>

                            <div className='login__box-input'>
                                <input
                                    type='email'
                                    required
                                    className='login__input'
                                    id={`email-0`}
                                    value={user.email}
                                    readOnly
                                    onChange={e =>
                                        handleEmailChange(index, e.target.value)
                                    }
                                />
                                <label
                                    htmlFor='login-email'
                                    className='login__label'
                                >
                                    Email ID 1
                                </label>
                            </div>
                        </div>
                    </div>
                    {emails.map((email, index) => (
                        <div key={index} className=' items-center'>
                            <div className='login__box'>
                                <i className='ri-user-3-line login__icon'></i>

                                <div className='login__box-input'>
                                    <input
                                        type='email'
                                        required
                                        className='login__input'
                                        id={`email-${index + 1}`}
                                        placeholder=' '
                                        onChange={e =>
                                            handleEmailChange(
                                                index,
                                                e.target.value,
                                            )
                                        }
                                    />
                                    <label
                                        htmlFor='login-email'
                                        className='login__label'
                                    >
                                        Email ID {index + 2}
                                    </label>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {emails.length < maxMembers - 1 && (
                    <button className='login__button' onClick={handleAddFriend}>
                        Add Friend
                    </button>
                )}
                <button type='submit' className='login__button'>
                    {loading ? <BeatLoader color='#ffffff' /> : 'Register'}
                </button>
            </form>
        </div>
    )
}

export default Modal
