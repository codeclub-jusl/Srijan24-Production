<<<<<<< HEAD
=======
import Razorpay from 'razorpay'
import {NextRequest, NextResponse} from 'next/server'
import {randomUUID} from 'crypto'

const razorpay = new Razorpay({
    key_id: process.env.NEXT_PUBLIC_RAZORPAY_API_KEY,
    key_secret: process.env.RAZORPAY_API_SECRET,
})

/**
 * API endpoint which will be used to register the order.
 * Request Body will contain data corresponding to the item that is going to be ordered.
 * This function will access database to fetch the price of the item ordered.
 * To follow layered arhitecture, the database must be accessed in repository layer,
 * and the processing of order must be done at service layer. Currently this endpoint
 * does not follow layered architecture.
 *
 * @param {NextRequest} request Request object containing item details.
 */
export async function POST(request) {
    const body = await request.json()

    const payment_currency = 'INR'
    const payment_capture = 1

    // get this detail based on the productDetails found inside body
    // this amount is in rupee, but options must take amount in paisa
    const payment_amount = 499

    // create options corresponding to the order which will be used
    // to create the order on razorpay
    const options = {
        amount: payment_amount * 100,
        currency: payment_currency,
        payment_capture: payment_capture,
        receipt: randomUUID(),
    }

    try {
        const order = await razorpay.orders.create(options)

        // response object that will be sent back for further processing of the paymment
        const orderDetails = {
            order_id: order.id,
            amount: order.amount,
            currency: order.currency,
        }

        return NextResponse.json({orderDetails}, {status: 200})
    } catch(error) {
        return NextResponse.json(
            {error: 'Could not create order.'},
            {status: 500},
        )
    }
}
>>>>>>> 20107406eacfb1661659d53e1f738160f716a1e6
