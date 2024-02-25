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
    console.log(authTokenHeader)
    try {
        const decodedToken = await defaultAuth.verifyIdToken(
            authToken,
            true,
        )

        const orderData = await request.json()
        // console.log(orderData)

        if(decodedToken.email !== orderData['Email']) {
            throw new Error('user faking email...')
        }
        console.log(orderData)
        const id = await orderService.registerOrder(orderData)

        return NextResponse.json({"OrderID": id}, {status: 201})
    } catch(e) {
        console.log(e)
        if(e.code === 11000 && e.keyPattern?.transactionID) {
            return NextResponse.json({
                code: 'duplicate-transaction-id',
                message: 'An order with given transaction ID already exists!'
            }, {status: 400})
        }
        return NextResponse.json(e, {status: 400})
    }


}
