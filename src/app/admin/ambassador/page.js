'use client'

import SuperAdminHOC from '@/hoc/SuperAdminHOC'
import React, { useEffect, useState } from 'react'
import { getAllAmbassadors } from '@/utils/ambassadors'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '@/firebase/config'

const page = () => {
    const ambassadors = getAllAmbassadors()
    const [ambassadorData, setAmbassadorData] = useState(null)
    // console.log(ambassadors);

    useEffect(() => {
        const fetchAmbassadorData = async () => {
            let data = []

            for (const ambassadorEmail in ambassadors) {
                // console.log(ambassadorEmail);
                const userRef = doc(db, 'users', ambassadorEmail)
                const userSnap = await getDoc(userRef)

                if (userSnap.exists()) {
                    const userData = userSnap.data()
                    data.push({
                        name: userData.name,
                        email: userData.email,
                        phone: userData.phone,
                        college: userData.college,
                        referrals: userData.referredFriends
                            ? userData.referredFriends.length
                            : 0,
                    })
                }
            }
            
            data.sort((a, b) => {
                return b.referrals - a.referrals
            })
            setAmbassadorData(data)
        }

        fetchAmbassadorData()
    }, [])

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
                className='bg-[url(/images/about/about.png)]'
            >
                <h1 className=' text-[1.5rem] md:text-[2rem] font-bold mb-10'>
                    Campus Ambassador Database
                </h1>

                {ambassadorData ? (
                    <div class='relative w-full overflow-x-auto shadow-md sm:rounded-lg'>
                        <table class='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>
                            <thead class='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
                                <tr>
                                    <th scope='col' class='px-6 py-3'>
                                        Name
                                    </th>
                                    <th scope='col' class='px-6 py-3'>
                                        Email
                                    </th>
                                    <th scope='col' class='px-6 py-3'>
                                        Phone
                                    </th>
                                    <th scope='col' class='px-6 py-3'>
                                        College
                                    </th>
                                    <th scope='col' class='px-6 py-3'>
                                        Referrals
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {ambassadorData.map((user, index) => (
                                    <tr class='odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700'>
                                        <td className='px-6 py-4 font-medium whitespace-nowrap text-white'>
                                            {user.name}
                                        </td>
                                        <td className='px-6 py-4 font-medium whitespace-nowrap text-white'>
                                            {user.email}
                                        </td>
                                        <td className='px-6 py-4 font-medium whitespace-nowrap text-white'>
                                            {user.phone}
                                        </td>
                                        <td className='px-6 py-4 font-medium whitespace-nowrap text-white'>
                                            {user.college}
                                        </td>
                                        <td className='px-6 py-4 font-medium whitespace-nowrap text-white'>
                                            {user.referrals}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <p className='text-lg'>Loading...</p>
                )}
            </div>
        </div>
    )
}

export default SuperAdminHOC(page)
