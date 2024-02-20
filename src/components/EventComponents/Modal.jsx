'use client'
import React, { useState } from 'react'
import './Modal.css'
import { useSelector } from 'react-redux'

const Modal = ({
    isOpen,
    onClose,
    teamSize,
    eventId,
    minMembers,
    maxMembers,
}) => {
    const user = useSelector(state => state.userReducer.user)

    const [emails, setEmails] = useState(
        Array.from({ length: minMembers - 1 }, () => ''),
    )
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

    const handleSubmit = () => {
        // Add your submit logic here
        // This function will be called when the Submit button is clicked
    }

    if (!isOpen) return null
    // console.log(teamSize, eventId, minMembers, maxMembers, emails, isValid)

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
                    Register
                </button>
            </form>
        </div>
    )
}

export default Modal
