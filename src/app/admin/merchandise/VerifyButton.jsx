'use client'

import { useRef, MutableRefObject } from 'react'
import { auth } from '@/firebase/config'
import { useRouter } from 'next/navigation'

async function toggleVerification(id, isVerified) {
    const response = await fetch(`/api/order/verify/${id}`, {
        method: 'PATCH',
        body: JSON.stringify({
            isVerified,
        }),
        headers: {
            'Content-Type': 'application/json',
        },
    })
    return response.ok ? true : false
}
export default function VerifyButton({ id, isVerified }) {
    const router = useRouter()
    /**
     * @type {MutableRefObject<HTMLButtonElement>}
     */
    const verifyButtonRef = useRef(null)

    async function changeVerificationStatus() {
        try {
            verifyButtonRef.current.disabled = true
            const isUpdated = await toggleVerification(id, isVerified)
            if (isUpdated) {
                router.refresh()
            } else {
                alert('could not update the verification status, try again')
            }
        } catch (e) {
            if (e.code === 'auth/id-token-revoked') {
                const newAuthToken = await auth.currentUser.getIdToken(true)
                dispatch(refreshUserToken(newAuthToken))
                changeVerificationStatus()
            } else {
                console.log(e)
            }
        } finally {
            verifyButtonRef.current.disabled = false
        }
    }

    return (
        <button
            ref={verifyButtonRef}
            onClick={() => changeVerificationStatus()}
            className='bg-blue-500 hover:bg-blue-700 disabled:bg-gray-800 text-white font-bold py-2 px-4 rounded w-full text-center'
        >
            {isVerified ? 'Unverify' : 'Verify'}
        </button>
    )
}
