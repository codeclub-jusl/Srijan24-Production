import { cookies } from 'next/headers'
import { defaultAuth } from '@/firebase-admin/firebase-admin'
export const runtime = 'nodejs'
export default async function AdminLayout({ children }) {
    'use server'
    const cookieStore = cookies()

    const authCookie = cookieStore.get('x-srijan-firebase-auth-token')
    const emailCookie = cookieStore.get('x-srijan-firebase-user-email')

    if (!authCookie || !emailCookie) {
        return <h1>Unauthorized, Sign Up to Continue...</h1>
    }

    const adminEmailsStr = process.env.ADMIN_EMAIL_ADDRESSES
    const adminEmails =
        !adminEmailsStr || adminEmailsStr === ''
            ? []
            : adminEmailsStr.split(',')

    if (adminEmails.indexOf(emailCookie.value) < 0) {
        return <h1>Email {emailCookie.value} not of valid admin...</h1>
    }

    try {
        const decodedToken = await defaultAuth.verifyIdToken(
            authCookie.value,
            true,
        )

        if (decodedToken.email !== emailCookie.value) {
            throw new Error('user faking email...')
        }

        return children
    } catch (e) {
        if (error.code == 'auth/id-token-revoked') {
            // Token has been revoked. Inform the user to reauthenticate or signOut() the user.
            return (
                <section>
                    Auth Token Has Been Revoked! Please do a fresh login to
                    continue...
                </section>
            )
        } else {
            return (
                <section>
                    <h2>User Not Authenticated.</h2>
                    <p>o_o This Action Will Be Repoted. o_o</p>
                </section>
            )
        }
    }
}
