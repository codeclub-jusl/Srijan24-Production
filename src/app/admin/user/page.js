'use client'

import { auth, db } from '@/firebase/config'
import { collection, getDocs, limit, query } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'

const page = () => {
    const [userToSearch, setUserToSearch] = useState('')
    const [noOfUsers, setNoOfUsers] = useState(0)
    const [fetchedUsers, setFetchedUsers] = useState(null)

    // useEffect(() => {
    //     const fetchUser = async () => {
    //         const userRecords = await 
    //         console.log(auth);
    //         // setNoOfUsers(userRecords.length)

    //         const q = query(collection(db, 'users'), limit(10))
    //         const querySnapshot = await getDocs(q);

    //         // let users = []
    //         // querySnapshot.forEach(userDoc => {
    //         //     users.push
    //         // })
    //     }

    //     fetchUser()
    // }, [])

    const searchUser = async e => {
        e.preventDefault()

        console.log(userToSearch)

        


    }

    return (
        <div
            style={{
                background: `linear-gradient(to bottom right, black, ${'#35374B'}, black)`,
            }}
        >
            <div
                style={{
                    minHeight: '100vh',
                    padding: '20px',
                    color: 'white',
                    fontFamily: 'Arial, sans-serif',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
                className='bg-[url(/images/about/about.png)] '
            >
                <h1 className=' text-[1.5rem] tracking-wider md:text-[2rem] font-bold'>
                    User Database
                </h1>
                <form
                    className='flex items-center lg:w-1/3 md:w-3/4 sm:w-4/5 my-10 mx-auto opacity-80'
                    onSubmit={searchUser}
                >
                    <label htmlFor='simple-search' className='sr-only'>
                        Search
                    </label>
                    <div className='relative w-full'>
                        <input
                            type='email'
                            id='simple-search'
                            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                            placeholder='example@email.com'
                            value={userToSearch}
                            onChange={e => setUserToSearch(e.target.value)}
                            required
                        />
                    </div>
                    <button
                        type='submit'
                        className='p-2.5 ms-2 text-sm font-medium text-white bg-teal-500 rounded-lg border border-teal-500 hover:bg-teal-700 focus:ring-4 focus:outline-none focus:ring-blue-300'
                    >
                        <svg
                            className='w-4 h-4'
                            aria-hidden='true'
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 20 20'
                        >
                            <path
                                stroke='currentColor'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth='2'
                                d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'
                            />
                        </svg>
                        <span className='sr-only'>Search</span>
                    </button>
                </form>
            </div>
        </div>
    )
}

export default page
