'use client'
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

    async function changeVerificationStatus() {
        const isUpdated = await toggleVerification(id, isVerified)
        if (isUpdated) {
            router.refresh()
        } else {
            alert('could not update the verification status, try again')
        }
    }

    return (
        <button
            onClick={() => changeVerificationStatus()}
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full text-center'
        >
            {isVerified ? 'Unverify' : 'Verify'}
        </button>
    )
}
