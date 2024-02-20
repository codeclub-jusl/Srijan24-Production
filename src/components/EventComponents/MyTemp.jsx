import { db } from '@/firebase/config'
import { getEventById } from '@/utils/event'
import { doc, getDoc, updateDoc } from 'firebase/firestore'
import React from 'react'
import { useSelector } from 'react-redux'

const MyTemp = eventId => {
    const user = useSelector(state => state.userReducer.user)

    const getEventIndex = userData => {
        return userData.events.registered.findIndex(
            obj => obj.eventId === eventId,
        )
    }

    const updateUser = async (userEmail, updatedTeamDetails, allAccepted) => {
        const eventDetails = getEventById(eventId)

        const userRef = doc(db, 'users', userEmail)
        const userSnap = await getDoc(userRef)

        if (userSnap.exists()) {
            let userData = userSnap.data()
            let index = getEventIndex(userData)
            if (index !== -1) {
                userData.events.registered[index] = updatedTeamDetails
            }

            if (userEmail !== user.email) {
                const notificationString = `${user.email} has accepted the invitation for the event: ${eventDetails.eventName}`
                userData.notifications.push(notificationString)
            } else {
                const notificationString = `You have accepted the invitation for the event: ${eventDetails.eventName}`
                userData.notifications.push(notificationString)
            }

            if (allAccepted) {
                const notificationString = `All members have accepted the invitation fot the event: ${eventDetails.eventName}`
                userData.notifications.push(notificationString)
            }

            await updateDoc(userRef, userData)

            const teamRefFromEvents = doc(db, `events/${eventId}`, teamDetails.teamName)
            
        }
    }

    const handleAccept = async () => {
        const index = user.events.registered.findIndex(
            obj => obj.eventId === eventId,
        )

        if (index !== -1) {
            let teamDetails = user.events.registered[index]
            let members = teamDetails.members
            const noOfMembers = members.length
            let acceptedMembers = 1
            for (let i = 0; i < noOfMembers; i++) {
                if (user.email !== members[i].email && members[i].accepted) {
                    acceptedMembers++
                }
            }

            const userIndex = members.findIndex(obj => obj.email === user.email)
            if (userIndex !== -1) {
                members[userIndex] = { ...members[index], accepted: true }
            }

            teamDetails.members = [...members]
            const allAccepted = noOfMembers === acceptedMembers
            if (allAccepted) {
                teamDetails.status = 'registered'
            }

            for (let i = 0; i < noOfMembers; i++) {
                await updateUser(members[i].email, teamDetails, allAccepted)
            }


        }
    }


    return <div>MyTemp</div>
}

export default MyTemp
