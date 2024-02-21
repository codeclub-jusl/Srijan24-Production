'use client'
import React, { useEffect, useState } from 'react'
import './Modal.css'
import { useDispatch, useSelector } from 'react-redux'
import { deleteDoc, doc, getDoc, updateDoc } from 'firebase/firestore'
import { db } from '@/firebase/config'
import { notification } from 'antd'
import BeatLoader from 'react-spinners/BeatLoader'
import { loginUser } from '@/store/userSlice'
import { getEventById } from '@/utils/event'

const InvitationModal = ({ isOpen, onClose, eventId }) => {
    const user = useSelector(state => state.userReducer.user)
    const teamName = user.invitations.find(obj => obj.eventId === eventId)
    const [teamData, setTeamData] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const data1 = user.events.registered.find(
            obj => obj.eventId === eventId,
        )

        if (data1) {
            const { eventId: _, ...data2 } = data1
            data2.members = data2.members.filter(
                obj => obj.email !== data1.leader,
            )
            setTeamData(data2)
        }
    }, [user])

    const getEventIndex = userData => {
        return userData.events.registered.findIndex(
            obj => obj.eventId === eventId,
        )
    }

    const updateUser = async (userEmail, updatedTeamDetails, allAccepted) => {
        const eventDetails = getEventById(eventId)

        // console.log(updatedTeamDetails)

        const userRef = doc(db, 'users', userEmail)
        const userSnap = await getDoc(userRef)

        if (userSnap.exists()) {
            let userData = userSnap.data()
            let index = getEventIndex(userData)
            if (index !== -1) {
                userData.events.registered[index] = updatedTeamDetails
            }

            const timeStamp = Date.now()

            if (userEmail !== user.email) {
                const notificationString =
                    user.email +
                    ' has accepted the invitation for the event: ' +
                    eventDetails.eventName
                userData.notifications.push({ notificationString, timeStamp })
            } else {
                const notificationString =
                    'You have accepted the invitation for the event: ' +
                    eventDetails.eventName
                userData.notifications.push({ notificationString, timeStamp })

                userData.invitations = userData.invitations.filter(
                    obj => obj.eventId !== eventId,
                )
            }

            if (userData.events.watchlist.includes(eventId)) {
                const index = userData.events.watchlist.indexOf(eventId)
                userData.events.watchlist.splice(index, 1)
            }

            if (allAccepted) {
                const notificationString =
                    'Registration Successful: You have successfully registered in the event: ' +
                    eventDetails.eventName
                userData.notifications.push({ notificationString, timeStamp })
            }

            await updateDoc(userRef, userData)
        }
    }

    const handleAccept = async () => {
        setLoading(true)

        try {
            const index = user.events.registered.findIndex(
                obj => obj.eventId === eventId,
            )

            if (index !== -1) {
                let teamDetails = { ...user.events.registered[index] }
                let members = [...teamDetails.members]

                const noOfMembers = members.length
                let acceptedMembers = 1
                for (let i = 0; i < noOfMembers; i++) {
                    if (
                        user.email !== members[i].email &&
                        members[i].accepted
                    ) {
                        acceptedMembers++
                    }
                }

                const userIndex = members.findIndex(
                    obj => obj.email === user.email,
                )

                if (userIndex !== -1) {
                    members[userIndex] = {
                        ...members[userIndex],
                        accepted: true,
                    }
                }

                teamDetails.members = [...members]
                const allAccepted = noOfMembers === acceptedMembers
                if (allAccepted) {
                    teamDetails.status = 'registered'
                }

                for (let i = 0; i < noOfMembers; i++) {
                    await updateUser(members[i].email, teamDetails, allAccepted)
                }

                const modifiedTeamName = teamDetails.teamName
                    .toLowerCase()
                    .trim()
                    .replace(/\s/g, '')

                const teamRef = doc(db, eventId, modifiedTeamName)
                const teamSanp = await getDoc(teamRef)

                const updatedTeamData = {
                    ...teamData,
                    members: members,
                    status: teamDetails.status,
                }

                if (teamSanp.exists()) {
                    await updateDoc(teamRef, updatedTeamData)
                }

                notification['success']({
                    message: `Invitation Accepted`,
                    duration: 3,
                })
            }
        } catch (err) {
            console.log(err)
            notification['error']({
                message: `Somthing went wrong! Try again later`,
                duration: 3,
            })
        }

        setLoading(false)
        onClose()
    }

    const updateUser2 = async userEmail => {
        const eventDetails = getEventById(eventId)

        const userRef = doc(db, 'users', userEmail)
        const userSnap = await getDoc(userRef)

        if (userSnap.exists()) {
            let userData = userSnap.data()
            userData.events.registered = userData.events.registered.filter(
                obj => obj.eventId !== eventId,
            )

            const timeStamp = Date.now()

            if (userEmail !== user.email) {
                const notificationString =
                    user.email +
                    ' has rejected the invitation for the event: ' +
                    eventDetails.eventName
                userData.notifications.push({ notificationString, timeStamp })
            } else {
                const notificationString =
                    'You have rejected the invitation for the event: ' +
                    eventDetails.eventName
                userData.notifications.push({ notificationString, timeStamp })
            }

            userData.invitations = userData.invitations.filter(
                obj => obj.eventId !== eventId,
            )

            await updateDoc(userRef, userData)
        }
    }

    const handleReject = async () => {
        setLoading(true)

        try {
            const index = user.events.registered.findIndex(
                obj => obj.eventId === eventId,
            )

            if (index !== -1) {
                let teamDetails = user.events.registered[index]
                let members = teamDetails.members
                const noOfMembers = members.length

                for (let i = 0; i < noOfMembers; i++) {
                    await updateUser2(members[i].email)
                }

                const modifiedTeamName = teamData.teamName
                    .toLowerCase()
                    .trim()
                    .replace(/\s/g, '')

                await deleteDoc(doc(db, eventId, modifiedTeamName))

                notification['success']({
                    message: `Invitation Rejected`,
                    duration: 3,
                })
            }
        } catch (err) {
            notification['error']({
                message: `Somthing went wrong! Try again later`,
                duration: 3,
            })
        }

        setLoading(false)
        onClose()
    }

    if (!isOpen) return null

    return (
        <div className='fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50'>
            {/* <div className='bg-slate-400 p-8 max-w-lg rounded-lg shadow-md'></div> */}
            <form action='' className='login__form'>
                <strong
                    className='text-l align-right cursor-pointer alert-del w-6 h-6 text-center bg-red-500 rounded-full absolute top-4 right-4 hover:bg-red-600 hover:text-white
                '
                    onClick={onClose}
                >
                    X
                </strong>
                {/* <h1 className='login__title'>Register Now</h1> */}

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
                                value={teamData && teamData.teamName}
                                readOnly
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
                                    value={teamData && teamData.leader}
                                    readOnly
                                />
                                <label
                                    htmlFor='login-email'
                                    className='login__label'
                                >
                                    Team Leader
                                </label>
                            </div>
                        </div>
                    </div>
                    {/* if accepted then green shadow else red shadow */}
                    {teamData &&
                        teamData.members.map((member, index) => (
                            <div
                                key={index}
                                className={`items-center  ${
                                    member.accepted
                                        ? 'bg-[#16724059]'
                                        : 'bg-[#61111159]'
                                } `}
                            >
                                <div className='login__box'>
                                    <i className='ri-user-3-line login__icon'></i>

                                    <div className='login__box-input'>
                                        <input
                                            type='email'
                                            required
                                            className='login__input'
                                            id={`email-${index + 1}`}
                                            value={member.email}
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

                {/* {emails.length < maxMembers - 1 && (
                    <button className='login__button' onClick={handleAddFriend}>
                        Add Friend
                    </button>
                )}
                */}
                {user && teamData && user.email !== teamData.leader && (
                    <>
                        <button
                            type='button'
                            className='login__button'
                            onClick={handleAccept}
                        >
                            {loading ? (
                                <BeatLoader color='#ffffff' />
                            ) : (
                                'Accept'
                            )}
                        </button>
                        <button
                            type='button'
                            className='login__button'
                            onClick={handleReject}
                        >
                            {loading ? (
                                <BeatLoader color='#ffffff' />
                            ) : (
                                'Reject'
                            )}
                        </button>
                    </>
                )}
            </form>
        </div>
    )
}

export default InvitationModal
