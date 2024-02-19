'use client'

import { useSelector } from 'react-redux'

const UserHOC = Component => {
    return () => {
        const user = useSelector(state => state.userReducer.user)
        console.log(user);

        return <Component user={user} />
    }
}

export default UserHOC
