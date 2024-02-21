import axios from "axios";
import {getCookieValue} from "../utils/authentication.ts";



export const fetchUserData = async () => {
    const token = getCookieValue('Authorization');
    // Realiza la solicitud al backend incluyendo el token en el Header Authorization
    const response = await axios.get('http://localhost:8080/api/v1/users/user', {
        headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
};
