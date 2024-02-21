import {useNavigate} from "react-router-dom";
import {useAuth} from "./useAuth.ts";



export  const useLogout = () => {
    const {updateUser} = useAuth()
    const navigate = useNavigate()

    const logout = () => {
        document.cookie = 'Authorization=; expires=Thu,   01 Jan   1970   00:00:00 UTC; path=/;'
        updateUser(null)
        navigate('/')
    }

    return logout;
}