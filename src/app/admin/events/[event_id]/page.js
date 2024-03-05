'use client'

import { db } from '@/firebase/config'
import { collection, getDocs } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'

const page = ({ params }) => {
    const { event_id } = params
    const categories = ['ALL', 'PENDING', 'REGISTERED']
    const [selectedCategory, setSelectedCategory] = useState('all')
    const [registeredTeams, setRegisteredTeams] = useState([])
    const [pendingTeams, setPendingTeams] = useState([])
    const [allTeams, setAllTeams] = useState([])

    useEffect(() => {
        let all = [],
            registered = [],
            pending = []

        const fetchData = async () => {
            const querySanp = await getDocs(collection(db, event_id))
            querySanp.forEach(doc => {
                const team = doc.data()
                all.push(team)

                if (team.status === 'pending') {
                    pending.push(team)
                } else {
                    registered.push(team)
                }
            })
        }

        fetchData()

        setRegisteredTeams(registered)
        setPendingTeams(pending)
        setAllTeams(all)
    }, [])

    return (
        <div
            style={{
                background: `linear-gradient(to bottom right, black, ${'#1E5128'}, black)`,
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
                <div
                    id='event_categories'
                    className='text-[1rem] p-8 font-semibold font-chakra flex flex-wrap gap-4 md:gap-12 justify-center text-white'
                >
                    {categories.map((category, index) => (
                        <span
                            key={index}
                            className={`rounded-full cursor-pointer px-4 py-[.3rem] hover:bg-white/20 transition-all duration-500 ease-in-out ${
                                selectedCategory === category.toLowerCase()
                                    ? 'bg-white/20'
                                    : ''
                            }`}
                            onClick={() => {
                                setSelectedCategory(category.toLowerCase())
                            }}
                        >
                            {category} 
                        </span>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default page
