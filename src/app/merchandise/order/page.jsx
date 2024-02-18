'use client'

import Form from '../Form'
import AuthHOC from '@/hoc/AuthHOC'
function MerchandiseOrder() {
    return <Form />
}

export default AuthHOC(MerchandiseOrder)
