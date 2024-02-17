import {orderService} from '@/services/OrderService'
import {NextRequest, NextResponse} from 'next/server'



/**
 * @param {NextRequest} request Request object containing item details.
 */
export async function POST(request) {
    const formdata = await request.formData()
    const id = await orderService.registerOrder(formdata)

    return NextResponse.json({"OrderID": id}, {status: 200})
}
