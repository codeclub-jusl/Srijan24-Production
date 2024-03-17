'use client'

import { db } from '@/firebase/config'
import { getEventById } from '@/utils/event'
import { doc, collection, getDoc, getDocs } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import EventIdAdminHOC from '@/hoc/EventIdAdminHOC'
import { exportTeamsToExcel } from '@/utils/exportService'
// import BeatLoader from 'react-spinners/BeatLoader'
import { useSelector } from 'react-redux'
import SuperAdmins from '@/utils/SuperAdmins'

const page = ({ params }) => {
    const { event_id } = params
    const user = useSelector(state => state.userReducer.user)
    const eventData = getEventById(event_id)
    // const categories = ['ALL', 'PENDING', 'REGISTERED']
    const [selectedCategory, setSelectedCategory] = useState('all')
    const [registeredTeams, setRegisteredTeams] = useState([])
    const [pendingTeams, setPendingTeams] = useState([])
    const [allTeams, setAllTeams] = useState([])
    const [showTeams, setShowTeams] = useState(null)
    // const [loading, setLoading] = useState(false)
    // const [downloadLink, setDownloadLink] = useState(null)

    useEffect(() => {
        let all = [],
            registered = [],
            pending = []

        const fetchData = async () => {
            const querySanp = await getDocs(collection(db, event_id))
            // console.log(querySanp)

            querySanp.forEach(teamSnap => {
                const team = teamSnap.data()
                all.push(team)
            })

            for (let i = 0; i < all.length; i++) {
                const leaderRef = doc(db, 'users', all[i].leader)
                const leaderSnap = await getDoc(leaderRef)

                if (leaderSnap.exists()) {
                    const leaderData = leaderSnap.data()
                    all[i] = {
                        ...all[i],
                        leaderPhone: leaderData.phone,
                        leaderName: leaderData.name,
                        leaderCollege: leaderData.college,
                        leaderYear: leaderData.year,
                    }
                }

                if (all[i].status === 'pending') pending.push(all[i])
                else registered.push(all[i])
            }

            setRegisteredTeams(registered)
            setPendingTeams(pending)
            setAllTeams(all)
            setShowTeams(all)

            // console.log(showTeams)
        }

        fetchData()
    }, [])

    const handleCategoryChange = category => {
        setSelectedCategory(category)

        if (category === 'all') setShowTeams(allTeams)
        else if (category === 'pending') setShowTeams(pendingTeams)
        else setShowTeams(registeredTeams)
    }

    const generateJSON = async () => {
        let data = []
        for (let i = 0; i < allTeams.length; i++) {
            let singleTeam = {
                teamName: allTeams[i].teamName,
                leaderName: allTeams[i].leaderName,
                leaderEmail: allTeams[i].leader,
                leaderPhone: allTeams[i].leaderPhone,
                leaderCollege: allTeams[i].leaderCollege,
                leaderYear: allTeams[i].leaderYear,
                members: '',
                status: allTeams[i].status,
            }

            singleTeam.members = allTeams[i].members
                .map(obj => obj.email)
                .join(', ')

            data.push(singleTeam)
        }

        const workSheetColumnName = [
            'Team Name',
            'Leader Name',
            'Leader Email',
            'Leader Phone',
            'Leader College',
            'Leader Year',
            'Members',
            'Status',
        ]

        const filePath = `./${event_id}.xlsx`

        exportTeamsToExcel(data, workSheetColumnName, event_id, filePath)
    }

    if (!eventData)
        return (
            <div className='bg-gradient-to-br from-black via-sky-950 to-black text-white min-h-screen flex justify-center items-center font-body'>
                <div className='noEventBox'>
                    <h2>Event Not Found</h2>
                    <p>
                        Sorry, but we can't find the event you are looking
                        for...
                    </p>
                </div>
            </div>
        )

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
                <h1 className='text-3xl font-extrabold'>
                    {eventData.eventName}
                </h1>

                {allTeams.length > 0 && (
                    <button
                        className='bg-[#000032]
                            hover:bg-blue-700 text-white font-bold py-2 px-4 rounded glow-on-hover mt-10'
                        onClick={generateJSON}
                    >
                        Generate Excel Sheet
                    </button>
                )}

                <div
                    id='event_categories'
                    className='text-[1rem] p-8 font-semibold font-chakra flex flex-wrap gap-4 md:gap-12 justify-center text-white'
                >
                    <span
                        className={`rounded-full cursor-pointer px-4 py-[.3rem] hover:bg-white/20 transition-all duration-500 ease-in-out ${
                            selectedCategory === 'all' ? 'bg-white/20' : ''
                        }`}
                        onClick={() => {
                            handleCategoryChange('all')
                        }}
                    >
                        All ( {allTeams.length} )
                    </span>

                    <span
                        className={`rounded-full cursor-pointer px-4 py-[.3rem] hover:bg-white/20 transition-all duration-500 ease-in-out ${
                            selectedCategory === 'pending' ? 'bg-white/20' : ''
                        }`}
                        onClick={() => {
                            handleCategoryChange('pending')
                        }}
                    >
                        Pending ( {pendingTeams.length} )
                    </span>

                    <span
                        className={`rounded-full cursor-pointer px-4 py-[.3rem] hover:bg-white/20 transition-all duration-500 ease-in-out ${
                            selectedCategory === 'registered'
                                ? 'bg-white/20'
                                : ''
                        }`}
                        onClick={() => {
                            handleCategoryChange('registered')
                        }}
                    >
                        Registered ( {registeredTeams.length} )
                    </span>
                </div>

                <div className='flex justify-center flex-wrap gap-2 p-10'>
                    {!showTeams && <h1 className='text-xl'>Loading...</h1>}

                    {showTeams &&
                        showTeams.map((team, index) => (
                            <div
                                key={index}
                                className='p-5 flex flex-col gap-3 rounded-lg bg-slate-900 bg-opacity-70 items-center justify-center eventAdminBox'
                            >
                                <h1 className='text-xl font-extrabold text-lime-300'>
                                    {team.teamName}
                                </h1>

                                <div>
                                    <p>
                                        <span className='font-bold text-orange-400 mr-2'>
                                            Leader:{' '}
                                        </span>
                                        <span className='text-green-300'>
                                            {team.leader}
                                        </span>
                                    </p>

                                    <p>
                                        <span className='font-bold text-orange-400 mr-2'>
                                            Leader Phone:{' '}
                                        </span>
                                        <span className='text-green-300'>
                                            {team.leaderPhone}
                                        </span>
                                    </p>

                                    {team.members.map(
                                        (member, index) =>
                                            index > 0 && (
                                                <p key={index}>
                                                    <span className='font-bold text-orange-400 mr-2'>
                                                        Member {index}:{' '}
                                                    </span>
                                                    <span
                                                        className={
                                                            member.accepted
                                                                ? 'text-green-500'
                                                                : 'text-red-500'
                                                        }
                                                    >
                                                        {member.email}
                                                    </span>
                                                </p>
                                            ),
                                    )}
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    )
}

export default EventIdAdminHOC(page)
