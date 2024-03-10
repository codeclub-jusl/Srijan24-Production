'use client'

import { auth, db } from '@/firebase/config'
import SuperAdminHOC from '@/hoc/SuperAdminHOC'
import { notification } from 'antd'
import {
    collection,
    getCountFromServer,
    getDocs,
    limit,
    query,
    where,
} from 'firebase/firestore'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import MoonLoader from 'react-spinners/MoonLoader'

const page = () => {
    const [userToSearch, setUserToSearch] = useState('')
    const [noOfUsers, setNoOfUsers] = useState(0)
    const [fetchedUsers, setFetchedUsers] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        // const getUserCount = async () => {
        //     const coll = collection(db, 'users')
        //     const snapshot = await getCountFromServer(coll)
        //     setNoOfUsers(snapshot.data().count)
        // }

        const fetchUser = async () => {
            let users = []
            const q = query(collection(db, 'users'), limit(10))
            const querySnapshot = await getDocs(q)

            querySnapshot.forEach(userDoc => {
                const userData = userDoc.data()
                // console.log(userData);
                users.push({
                    email: userData.email,
                    name: userData.name,
                    phone: userData.phone,
                    college: userData.college,
                    dept: userData.dept,
                    year: userData.year,
                    profilePicUrl: userData.profilePicUrl,
                })
            })
            setFetchedUsers(users)

            const coll = collection(db, 'users')
            const snapshot = await getCountFromServer(coll)
            setNoOfUsers(snapshot.data().count)
        }

        fetchUser()
    }, [])

    const searchUser = async e => {
        e.preventDefault()

        if (userToSearch.trim() === '') {
            notification['error']({
                message: `Enter Something`,
                duration: 3,
            })
            return
        }

        setLoading(true)

        try {
            const lowerCaseName = userToSearch.toLowerCase()
            const q = query(
                collection(db, 'users'),
                where('name', '>=', userToSearch),
                where('name', '<=', userToSearch + '\uf8ff'),
            )
            // const usersSnap = await usersRef
            //     .where('name', '>=', lowerCaseName)
            //     .where('name', '<=', lowerCaseName + '\uf8ff')
            //     .get()

            const usersSnap = await getDocs(q)

            if (usersSnap.empty) {
                notification['error']({
                    message: `No user found`,
                    duration: 3,
                })

                setLoading(false)
                return
            }

            let users = []
            usersSnap.forEach(userDoc => {
                const userData = userDoc.data()
                // console.log(userData);
                users.push({
                    email: userData.email,
                    name: userData.name,
                    phone: userData.phone,
                    college: userData.college,
                    dept: userData.dept,
                    year: userData.year,
                    profilePicUrl: userData.profilePicUrl,
                })
            })
            setFetchedUsers(users)
        } catch (err) {
            console.log(err)
            notification['error']({
                message: `Something went wrong! Try again later.`,
                duration: 3,
            })
        }

        setLoading(false)
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
                <h1 className=' text-[1.5rem] md:text-[2rem] font-bold'>
                    User Database
                </h1>
                <h2 className=' text-[1.2rem] font-bold text-lime-300 mt-5'>
                    User Registrations: {noOfUsers}
                </h2>
                <form
                    className='flex items-center lg:w-1/3 md:w-3/4 sm:w-4/5 my-10 mx-auto opacity-80'
                    onSubmit={searchUser}
                >
                    <label htmlFor='simple-search' className='sr-only'>
                        Search
                    </label>
                    <div className='relative w-full'>
                        <input
                            type='text'
                            id='simple-search'
                            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                            placeholder='search user'
                            value={userToSearch}
                            onChange={e => setUserToSearch(e.target.value)}
                            required
                        />
                    </div>
                    <button
                        type='submit'
                        className='p-2.5 ms-2 text-sm font-medium text-white bg-teal-500 rounded-lg border border-teal-500 hover:bg-teal-700 focus:ring-4 focus:outline-none focus:ring-blue-300'
                    >
                        {loading ? (
                            <MoonLoader size={14} color='#ffffff' />
                        ) : (
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
                        )}
                        {/* <span className='sr-only'>Search</span> */}
                    </button>
                </form>

                <div className='flex flex-wrap gap-2 p-10'>
                    {!fetchedUsers && <h1 className='text-xl'>Loading...</h1>}

                    {fetchedUsers &&
                        fetchedUsers.map((user, index) => (
                            <div
                                key={index}
                                className='p-5 flex flex-col gap-3 rounded-lg bg-slate-900 bg-opacity-70 justify-center'
                            >
                                <div className='flex flex-row items-center gap-5'>
                                    <div>
                                        {user.profilePicUrl !== '' ? (
                                            <img
                                                src={user.profilePicUrl}
                                                className='rounded-full h-16 w-16'
                                            />
                                        ) : (
                                            <img
                                                src={'/images/avatar.jpg'}
                                                className='rounded-full h-16 w-16'
                                            />
                                        )}
                                    </div>

                                    <div>
                                        <h1 className='text-xl font-extrabold text-lime-300'>
                                            {user.name}
                                        </h1>
                                    </div>
                                </div>

                                <div>
                                    <p>
                                        <span className='font-bold text-orange-400 mr-2'>
                                            Email:{' '}
                                        </span>
                                        <span className='text-green-300'>
                                            {user.email}
                                        </span>
                                    </p>

                                    <p>
                                        <span className='font-bold text-orange-400 mr-2'>
                                            Phone:{' '}
                                        </span>
                                        <span className='text-green-300'>
                                            {user.phone}
                                        </span>
                                    </p>

                                    <p>
                                        <span className='font-bold text-orange-400 mr-2'>
                                            College:{' '}
                                        </span>
                                        <span className='text-green-300'>
                                            {user.college}
                                        </span>
                                    </p>

                                    <p>
                                        <span className='font-bold text-orange-400 mr-2'>
                                            Department:{' '}
                                        </span>
                                        <span className='text-green-300'>
                                            {user.dept}
                                        </span>
                                    </p>

                                    <p>
                                        <span className='font-bold text-orange-400 mr-2'>
                                            Year:{' '}
                                        </span>
                                        <span className='text-green-300'>
                                            {user.year}
                                        </span>
                                    </p>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    )
}

export default SuperAdminHOC(page)
