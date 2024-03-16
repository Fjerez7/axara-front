import axios from "axios";
import {getCookieValue} from "../utils/authentication.ts";
import {useMutation} from "@tanstack/react-query";
import {UpdatePassword, UserUpdate} from "../types/User.ts";

// Realiza una solicitud al backend para obtener la información del usuario
export const fetchUserData = async () => {
    const token = getCookieValue('Authorization');
    // Realiza la solicitud al backend incluyendo el token en el Header Authorization
    const response = await axios.get('http://localhost:8080/api/v1/users/user', {
        headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
};

export const updateUserForParams = (id:number) => {
    return useMutation({
        mutationFn: (data:UserUpdate) => {
            return  axios.patch(`http://localhost:8080/api/v1/users/user/${id}`, data)
        }
    })
}
export const changePassword = (id:number) => {
    return useMutation({
        mutationFn: (data:UpdatePassword) => {
            return  axios.patch(`http://localhost:8080/api/v1/users/user/${id}/change-password`, data)
        }
    })
}