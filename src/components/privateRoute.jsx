import { Outlet, Navigate } from 'react-router-dom'
//import { useAuth } from '../Services/AuthService'

function PrivateRoutes() {
    //const token = useAuth()
    let token = "123"
    return token ? <Outlet /> : <Navigate to='/login' />
}

export default PrivateRoutes