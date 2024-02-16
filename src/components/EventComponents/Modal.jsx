"use-client"
import React, { useState } from 'react';

const Modal = ({ isOpen, onClose, teamSize, eventId, minMembers, maxMembers }) => {
    const [emails, setEmails] = useState(Array.from({ length: maxMembers }, () => ''));
    const [isValid, setIsValid] = useState(false);

    const handleEmailChange = (index, value) => {
        const newEmails = [...emails];
        newEmails[index] = value;
        setEmails(newEmails);
        setIsValid(newEmails.slice(0, minMembers).every(email => email.trim() !== ''));
    };

    const handleSubmit = () => {
        // Add your submit logic here
        // This function will be called when the Submit button is clicked
    };

    if (!isOpen) return null;
    console.log(teamSize, eventId, minMembers, maxMembers, emails, isValid);
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
            <div className="bg-slate-400 p-8 max-w-lg rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-4">Register Now</h2>
                <div className="mt-4">
                {emails.map((email, index) => (
                    <div key={index} className="flex items-center">
                        <label htmlFor={`email-${index}`} className="mr-2">Email ID {index + 1}</label>
                        <input
                            id={`email-${index}`}
                            type="email"
                            className="text-black block w-full mb-2 px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                            placeholder={`Enter email ID ${index + 1}`}
                            value={email}
                            onChange={(e) => handleEmailChange(index, e.target.value)}
                        />
                    </div>
                ))}
            </div>

                <div className="flex justify-end mt-4">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2" onClick={onClose}>
                        Close
                    </button>
                    <button className={`bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ${isValid ? '' : 'opacity-50 cursor-not-allowed'}`} onClick={handleSubmit} disabled={!isValid}>
                        Submit
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
