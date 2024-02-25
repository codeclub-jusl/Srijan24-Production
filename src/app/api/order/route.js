import {orderService} from '@/services/OrderService'
import {NextRequest, NextResponse} from 'next/server'
import {defaultAuth} from '@/firebase-admin/firebase-admin'

export const runtime = 'nodejs'

/**
 * @param {NextRequest} request Request object containing item details.
 */
export async function POST(request) {

    const authTokenHeader = request.headers.get('Authorization')
    const authToken = authTokenHeader.split(' ')[1]
    try {
        const decodedToken = await defaultAuth.verifyIdToken(
            authToken,
            true,
        )

        const orderData = await request.json()
        console.log(orderData)

        if(decodedToken.email !== orderData['Email']) {
            throw new Error('user faking email...')
        }

        const id = await orderService.registerOrder(orderData)

        return NextResponse.json({"OrderID": id}, {status: 201})
    } catch(e) {
        return NextResponse.json(e, {status: 400})
    }


}
