'use server'

import { headers } from 'next/headers'
import VerifyButton from './VerifyButton'
import './merchandise.css'
async function Merchandise() {
    'use server'
    const h = headers()
    const xForwardedHost = h.get('x-forwarded-host')
    const xForwardedProto = h.get('x-forwarded-proto')
    const fetchURL = `${xForwardedProto}://${xForwardedHost}/api/order/all`
    const resp = await fetch(fetchURL, { cache: 'no-store' })
    const orders = await resp.json()

    return (
        <table className='table min-w-full divide-y divide-gray-200'>
            <thead className='bg-gray-50'>
                <tr>
                    <th>Name</th>
                    <th>Phone Number</th>
                    <th>College</th>
                    <th>Department</th>
                    <th>Year</th>
                    <th>On Shirt</th>
                    <th>Size</th>
                    <th>Mode</th>
                    <th>Transaction ID</th>
                    <th>Verified</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody className='bg-white divide-y divide-gray-200'>
                {orders.map(order => (
                    <tr key={order._id}>
                        <td style={{ textAlign: 'left' }}>{order.name}</td>
                        <td>{order.phoneNumber}</td>
                        <td>{order.college}</td>
                        <td>{order.department}</td>
                        <td>{order.year}</td>
                        <td>{order.nameOnShirt}</td>
                        <td>{order.size}</td>
                        <td>{order.paymentMode}</td>
                        <td>
                            {order.transactionID ? order.transactionID : 'NIL'}
                        </td>
                        <td>{order.isVerified ? 'Yes' : 'No'}</td>
                        <td>
                            <VerifyButton
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
