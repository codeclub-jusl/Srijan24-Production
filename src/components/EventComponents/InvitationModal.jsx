'use client'
import React, { useState } from 'react'
import './Modal.css'
import { useDispatch, useSelector } from 'react-redux'
import { doc, getDoc, updateDoc } from 'firebase/firestore'
import { db } from '@/firebase/config'
import { notification } from 'antd'
import BeatLoader from 'react-spinners/BeatLoader'
import { loginUser } from '@/store/userSlice'
import { getEventById } from '@/utils/event'

// <InvitationModal 
// eventId={""}
// isOpen={""}
// onClose={""}

//  />
const InvitationModal = ({ isOpen, onClose, eventId }) => {
    let teamData = {
        teamName: 'teamName',
        teamLeader: 'leader',
        members: [
            {
                email: 'email11',
                accepted: false,
            },
            {
                email: 'email22',
                accepted: true,
            },
        ],
    }
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
                                value={teamData.teamName}
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
                                    value={teamData.teamLeader}
                                    readOnly
                                    onChange={e =>
                                        handleEmailChange(index, e.target.value)
                                    }
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
                    {teamData.members.map((member, index) => (
                        <div
                            key={index}
                            className={`items-center  ${member.accepted ? 'bg-[#16724059]' : 'bg-[#61111159]' } `}
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
                <button type='button' className='login__button'>
                    Accept
                </button>
                <button type='button' className='login__button'>
                    Reject
                </button>
            </form>
        </div>
    )
}

export default InvitationModal
