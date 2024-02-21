// Get value Cookie
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

//Check if user is Auth, if there is a token
export const checkAuthentication = () => {
    const token = getCookieValue('Authorization');
    return !!token
}