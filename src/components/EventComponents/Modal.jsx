'use-client'
import React, { useState } from 'react'
import './Modal.css'

const Modal = ({
    isOpen,
    onClose,
    teamSize,
    eventId,
    minMembers,
    maxMembers,
}) => {
    const [emails, setEmails] = useState(
        Array.from({ length: minMembers }, () => ''),
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
    console.log(teamSize, eventId, minMembers, maxMembers, emails, isValid)
 
    return (
        <div className='fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50'>
            {/* <div className='bg-slate-400 p-8 max-w-lg rounded-lg shadow-md'></div> */}
            <form action='' class='login__form'>
                <strong
                    class='text-l align-right cursor-pointer alert-del w-6 h-6 text-center bg-red-500 rounded-full absolute top-4 right-4 hover:bg-red-600 hover:text-white
                '
                    onClick={onClose}
                >
                    X
                </strong>
                <h1 class='login__title'>Register Now</h1>

                <div class='login__content'>
                    <div class='login__box'>
                        <i class='ri-user-3-line login__icon'></i>

                        <div class='login__box-input'>
                            <input
                                type='text'
                                required
                                class='login__input'
                                id='team-name'
                                placeholder=' '
                            />
                            <label for='login-email' class='login__label'>
                                Team Name
                            </label>
                        </div>
                    </div>
                    {emails.map((email, index) => (
                        <div key={index} className=' items-center'>
                            <div class='login__box'>
                                <i class='ri-user-3-line login__icon'></i>

                                <div class='login__box-input'>
                                    <input
                                        type='email'
                                        required
                                        class='login__input'
                                        id={`email-${index}`}
                                        placeholder=' '
                                        onChange={e =>
                                            handleEmailChange(
                                                index,
                                                e.target.value,
                                            )
                                        }
                                    />
                                    <label
                                        for='login-email'
                                        class='login__label'
                                    >
                                        Email ID {index + 1}
                                    </label>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {emails.length < maxMembers && (
                    <button className='login__button' onClick={handleAddFriend}>
                        Add Friend
                    </button>
                )}
                <button type='submit' class='login__button'>
                    Register
                </button>
            </form>
        </div>
    )
}

export default Modal
