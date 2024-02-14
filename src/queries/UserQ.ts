import axios from "axios";

export function getCookieValue(cookieName:string) {
    const name = cookieName + "="
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookiesArray = decodedCookie.split(';');
    for(let i =  0; i < cookiesArray.length; i++) {
        let cookie = cookiesArray[i].trim();
        if (cookie.indexOf(name) ===  0) {
            return cookie.substring(name.length, cookie.length);
        }
    }
    return "";
}


export const fetchUserData = async () => {
    const token = getCookieValue('Authorization');
    // Realiza la solicitud al backend incluyendo el token en el Header Authorization
    const response = await axios.get('http://localhost:8080/api/v1/users/user', {
        headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
};
