'use server'

import { headers } from 'next/headers'
import VerifyButton from './VerifyButton'
import './merchandise.css'
async function Merchandise() {
    'use server'
    let orders = []
    try {
        const h = headers()
        const xForwardedHost = h.get('x-forwarded-host')
        const xForwardedProto = h.get('x-forwarded-proto')
        const fetchURL = `${xForwardedProto}://${xForwardedHost}/api/order/all`
        const resp = await fetch(fetchURL, { cache: 'no-store' })
        orders = await resp.json()
    } catch (err) {
        console.log(err)
    }

    return (
        <table className='table min-w-full divide-y divide-gray-200'>
            <thead className='bg-gray-50'>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone Number</th>
                    <th>College</th>
                    <th>Department</th>
                    <th>T-Shirt Name</th>
                    <th>T-Shirt Color</th>
                    <th>T-Shirt Size</th>
                    <th>Campus</th>
                    <th>Payment Collector</th>
                    <th>Payment Mode</th>
                    <th>Transaction ID</th>
                    <th>Status</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody className='bg-white divide-y divide-gray-200'>
                {orders.length > 0 &&
                    orders.map(order => (
                        <tr key={order._id} data-order-id={order._id}>
                            <td style={{ textAlign: 'left' }}>{order._id}</td>
                            <td style={{ textAlign: 'left' }}>{order.name}</td>
                            <td>{order.email}</td>
                            <td>{order.phoneNumber}</td>
                            <td>{order.college}</td>
                            <td>{order.department}</td>
                            <td>{order.tShirtName}</td>
                            <td>{order.tShirtColor}</td>
                            <td>{order.tShirtSize}</td>
                            <td>{order.campus}</td>
                            <td>{order.paymentCollector}</td>
                            <td>{order.paymentMode}</td>
                            <td>
                                {order.transactionID
                                    ? order.transactionID
                                    : 'NIL'}
                            </td>
                            <td>{order.status}</td>
                            <td className='merchandiseVerifyContainer'>
                                <VerifyButton
                                    type='pending'
                                    id={order._id}
                                    isVerified={order.isVerified}
                                />
                                <VerifyButton
                                    type='accept'
                                    id={order._id}
                                    isVerified={order.isVerified}
                                />
                                <VerifyButton
                                    type='reject'
                                    id={order._id}
                                    isVerified={order.isVerified}
                                />
                            </td>
                        </tr>
                    ))}
            </tbody>
        </table>
    )
}

export default Merchandise
