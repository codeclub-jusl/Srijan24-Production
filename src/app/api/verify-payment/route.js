// we will create a web hook which will be called directly from razorpay
// website after a payment has been done. we must setup webhook url to
// https://www.base-url.com/api/verify-payment with the corresponding secret
// for the webhook to work properly.

import { NextRequest, NextResponse } from 'next/server'
import { createHmac } from 'crypto'

/** read the secret for signing razorpay webhooks  */
const secret = process.env.RAZORPAY_WEBHOOK_SECRET

/**
 * @param {NextRequest} request
 *
 * @todo Server can receive same event multiple times for a web hook,
 * so we need to validate whether we have seen the event using `x-razorpay-event-id`
 * header, as this is unique for every event.
 */
export async function POST(request) {
    const shasum = createHmac('sha256', secret)
    shasum.update(JSON.stringify(request.body))
    const digest = shasum.digest('hex')

    const razorpay_signature = request.headers.get('x-razorpay-signature')

    if (digest === razorpay_signature) {
        // confirmation is legit, store the details inside a database
        const body = await request.json()

        const razorpay_event_id = request.headers.get(`x-razorpay-event-id`)
        // TODO: push the razorpay_event_id to some kind of cache service and check before
        // storing data into the database that whether this event_id is already present in
        // the cache or not. The cache can be cleared after a certain amount of time as
        // razorpay will anyways consider the webhook dead if for 24 hours the hook fails.
    } else {
        // forged request,
    }

    // we must return response back to razorpay otherwise our validation endpoint
    // will be considered down by razorpay.
    return NextResponse.json({}, { status: 200 })
}
