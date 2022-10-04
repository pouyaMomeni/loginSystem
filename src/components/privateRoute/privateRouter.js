import React from 'react'
import cookies from 'js-cookie'

import { Navigate } from 'react-router-dom'
const PrivateRouter = ({ children }) => {
    const jwt = cookies.get('user')
    return jwt ? children : <Navigate to='/' />
}

export default PrivateRouter