import {NextRequest, NextResponse} from 'next/server'
import {orderService} from '@/services/OrderService'

/**
 * @param {NextRequest} request Request object containing item details.
 */
export async function GET(request) {
    const orders = await orderService.getAllOrders()
    return NextResponse.json(orders, {status: 200})

}
