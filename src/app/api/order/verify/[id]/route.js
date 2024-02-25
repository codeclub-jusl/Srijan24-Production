import {orderService} from '@/services/OrderService'
import {NextResponse, NextRequest} from 'next/server'

/**
 * @param {NextRequest} request Request object containing item details.
 */
export async function PATCH(request, {params}) {
    // TODO: route guard should be implemented as otherwise people can ping this route and change verified status
    const body = await request.json()
    const {status} = body

    /**
     * ID of the order which has to be returned.
     * @type {string} 
     */
    const id = params.id

    const res = await orderService.updateVerificationStatus(id, status)
    return NextResponse.json(res, {status: 200})


}
