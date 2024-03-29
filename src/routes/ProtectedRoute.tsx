
import {Navigate, useLocation} from "react-router-dom";
import {checkAuthentication} from "../utils/authentication.ts";
import {useAuth} from "../hooks/useAuth.ts";
import {FC} from "react";

interface ProtectedRouteProps {
    children: any
    role: 'ADMIN' | "CLIENT"
}


export const ProtectedRoute:FC<ProtectedRouteProps> = ({children,role}) => {
    const {AuthRes} = useAuth()
    const isAuthenticated = checkAuthentication()

    if(!isAuthenticated){
        return <Navigate to={'/login'} state={{from: useLocation()}} replace/>
    }
    if (AuthRes?.role !== role){
        return <Navigate to={role === 'CLIENT' ? '/admin/dashboard' : '/account'}  replace />;
    }
    return <>{children}</>;
}