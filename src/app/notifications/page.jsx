'use client'
import { useSelector } from 'react-redux'
import './notifications.css'
import { FaArrowRightLong } from 'react-icons/fa6'
import { useEffect, useState } from 'react'
import { getEventById } from '@/utils/event'
import { useRouter } from 'next/navigation'
import AuthHOC from '@/hoc/AuthHOC'

const Notification = () => {
    const router = useRouter()
    const user = useSelector(state => state.userReducer.user)
    const [invitations, setInvitations] = useState([])
    const [notifications, setNotifications] = useState([])

    function getTimeDifference(timeStamp){
        const nowTime = Date.now();
        const timeDifference = Math.floor((nowTime-timeStamp)/1000);
        if(timeDifference<=0){
            return "0sec ago"
        }
    
        if(timeDifference < 60){    // 1-59secs
            return `${timeDifference}secs ago`;
        }
        else{
            const timeDiff_in_minutes = Math.floor(timeDifference/60);
            if(timeDiff_in_minutes<60){     // 1-59mins
                const unit = timeDiff_in_minutes === 1 ?"min":"mins";
                return `${timeDiff_in_minutes}${unit} ago`;
            }
            else{
                const timeDiff_in_hours = Math.floor(timeDiff_in_minutes/60);   // 1-23hrs
                if(timeDiff_in_hours < 24){
                    const unit = timeDiff_in_hours === 1 ?"hour":"hours";
                    return `${timeDiff_in_hours}${unit} ago`;
                }
                else{
                    const timeDiff_in_days = Math.floor(timeDiff_in_hours/24);  // 1-29days
                    if(timeDiff_in_days < 30){
                        const unit = timeDiff_in_days === 1 ?"day":"days";
                        return `${timeDiff_in_days}${unit} ago`;
                    }
                    else{
                        const timeDiff_in_months = Math.floor(timeDiff_in_days/30); // 1-11months
                        if(timeDiff_in_months < 12){
                            const unit = timeDiff_in_months === 1 ?"month":"months";
                            return `${timeDiff_in_months}${unit} ago`;
                        }
                        else{
                            const timeDiff_in_years = Math.floor(timeDiff_in_months/12); // 1-...years
                            const unit = timeDiff_in_years === 1 ?"year":"years";
                            return `${timeDiff_in_years}${unit} ago`;
                        }
                    }
                }
            }
        }
    }

    useEffect(() => {
        let ivt = []
        let ntf = []


        for (let i = 0; i < user.invitations.length; i++) {
            const event = getEventById(user.invitations[i].eventId)
            const teamData = user.events.registered.find(
                obj => obj.eventId === event.eventId,
            )
            const desc = teamData.leader + ' has invited you to join.'
            ivt.push({
                eventId: event.eventId,
                title: event.eventName,
                description: desc,
            })
        }

        for (let i = 0; i < user.notifications.length; i++) {
            const timeAgo = getTimeDifference(
                user.notifications[i].timeStamp,
            )
            // console.log(currentTimestamp, user.notifications[i].timeStamp)
            ntf.push({
                title: user.notifications[i].notificationString,
                timeAgo: timeAgo,
            })
        }

        ivt.reverse()
        setInvitations(ivt)

        ntf.reverse()
        setNotifications(ntf)
    }, [user])

    function handleInvitation(eventId) {
        router.push(`/events/${eventId}`)
    }

    return (
        <>
            <div
                id='notificationBody'
                className='bg-gradient-to-br from-black via-sky-950 to-black text-white min-h-screen font-body'
            >
                <div id='invitation'>
                    <div className='header'>Invitations</div>
                    <div className='notifybody'>
                        {invitations.map((item, index) => {
                            return (
                                <div
                                    key={index}
                                    className='invitationItem'
                                    onClick={() =>
                                        handleInvitation(item.eventId)
                                    }
                                >
                                    <div id='inviteTitle'>
                                        {item.title}
                                        <FaArrowRightLong id='arrowIcon' />
                                    </div>
                                    <div id='inviteDesc'>
                                        {item.description}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>

                <div id='notification'>
                    <div className='header'>Notifications</div>
                    <div className='notifybody' id='nobody'>
                        {notifications.map((item, index) => {
                            return (
                                <div key={index} className='notificationItem'>
                                    <div>{item.title}</div>
                                    <span>{item.timeAgo}</span>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default AuthHOC(Notification)
