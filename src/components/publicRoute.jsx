import { Outlet, Navigate } from 'react-router-dom'
//import { useAuth } from '../Services/AuthService'

function PublicRoutes() {
    //const token = useAuth()
    let token = null
    return token ? <Navigate to='/login' /> : <Outlet />
}

export default PublicRoutes