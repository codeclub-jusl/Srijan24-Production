import Razorpay from 'razorpay'
import { NextRequest, NextResponse } from 'next/server'
import { randomUUID, UUID } from 'crypto'
const razorpay = new Razorpay({
    key_id: process.env.NEXT_PUBLIC_RAZORPAY_API_KEY,
    key_secret: process.env.RAZORPAY_API_SECRET,
})

/**
 *
 * @param {NextRequest} request
 */
export async function POST(request) {
    const body = await request.json()

    const payment_currency = 'INR'
    const payment_capture = 1

    // get this detail based on the productDetails found inside body
    // this amount is in rupee, but options must take amount in paisa
    const payment_amount = 499

    const options = {
        amount: payment_amount * 100,
        currency: payment_currency,
        payment_capture: payment_capture,
        receipt: randomUUID(),
    }

    try {
        const order = await razorpay.orders.create(options)

        const orderDetails = {
            order_id: order.id,
            amount: order.amount,
            currency: order.currency,
        }
        console.log(orderDetails)
        return NextResponse.json({ orderDetails }, { status: 200 })
    } catch (error) {
        return NextResponse.json(
            { error: 'Could not create order.' },
            { status: 500 },
        )
    }
}
