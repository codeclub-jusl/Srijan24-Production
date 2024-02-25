export default function GridBackground() {
    return (
        <div className='absolute inset-0 p-2 grid grid-cols-12 gap-2 transform -skew-y-12'>
            {/* row 1 */}
            <div className='col-span-2 bg-gray-800 rounded overflow-hidden animate-pulse'></div>
            <div className='col-span-5 bg-gray-800 rounded overflow-hidden '></div>
            <div className='col-span-1 bg-gray-800 rounded overflow-hidden '></div>
            <div className='col-span-4 bg-gray-800 rounded overflow-hidden '></div>

            {/* row 2 */}
            <div className='col-span-5 bg-gray-800 rounded'></div>
            <div className='col-span-3 bg-gray-800 rounded animate-pulse'></div>
            <div className='col-span-2 bg-gray-800 rounded'></div>
            <div className='col-span-2 bg-gray-800 rounded'></div>

            {/* row 3 */}
            <div className='col-span-4 bg-gray-800 rounded'></div>
            <div className='col-span-7 bg-gray-800 rounded animate-pulse'></div>
            <div className='col-span-1 bg-gray-800 rounded'></div>

            {/* row-4 */}
            <div className='col-span-2 bg-gray-800 rounded animate-pulse'></div>
            <div className='col-span-4 bg-gray-800 rounded'></div>
            <div className='col-span-6 bg-gray-800 rounded animate-pulse'></div>

            {/* row-5 */}
            <div className='col-span-5 bg-gray-800 rounded animate-pulse '></div>
            <div className='col-span-3 bg-gray-800 rounded '></div>
            <div className='col-span-2 bg-gray-800 rounded animate-pulse '></div>
            <div className='col-span-2 bg-gray-800 rounded '></div>

            {/* row-6 */}
            <div className='col-span-4 bg-gray-800 rounded'></div>
            <div className='col-span-7 bg-gray-800 rounded animate-pulse'></div>
            <div className='col-span-1 bg-gray-800 rounded'></div>

            <div className='col-span-4 bg-gray-800 rounded animate-pulse'></div>
            <div className='col-span-7 bg-gray-800 rounded '></div>
            <div className='col-span-1 bg-gray-800 rounded animate-pulse'></div>

            <div className='col-span-4 bg-gray-800 rounded animate-pulse'></div>
            <div className='col-span-7 bg-gray-800 rounded '></div>
            <div className='col-span-1 bg-gray-800 rounded animate-pulse'></div>

            <div className='col-span-2 bg-gray-800 rounded animate-pulse'></div>
            <div className='col-span-4 bg-gray-800 rounded'></div>
            <div className='col-span-6 bg-gray-800 rounded animate-pulse'></div>

            <div className='col-span-2 bg-gray-800 rounded animate-pulse'></div>
            <div className='col-span-4 bg-gray-800 rounded'></div>
            <div className='col-span-6 bg-gray-800 rounded animate-pulse'></div>

            <div className='col-span-2 bg-gray-800 rounded animate-pulse'></div>
            <div className='col-span-4 bg-gray-800 rounded'></div>
            <div className='col-span-6 bg-gray-800 rounded animate-pulse'></div>

            <div className='col-span-2 bg-gray-800 rounded animate-pulse'></div>
            <div className='col-span-4 bg-gray-800 rounded'></div>
            <div className='col-span-6 bg-gray-800 rounded animate-pulse'></div>
        </div>
    )
}
