import {FC} from "react";
import {getCookieValue} from "../queries/UserQ.ts";
import {Navigate, useLocation} from "react-router-dom";

interface ProtectedRouteProps {
    children: any
}

//Check if user is Auth, if there is a token
export const checkAuthentication = () => {
    const token = getCookieValue('Authorization');
    return !!token
}

export const ProtectedRoute:FC<ProtectedRouteProps> = ({children}) => {
    const isAuthenticated = checkAuthentication()
    if(!isAuthenticated){
        return <Navigate to={'/login'} state={{from: useLocation()}} replace/>
    }
    return children;
}