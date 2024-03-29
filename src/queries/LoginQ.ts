import {useMutation} from "@tanstack/react-query";
import axios from "axios";

// Make an http Post request
export const loginUser = () => {
    return useMutation({
        mutationFn: (dataLogin) => {
            return axios.post("http://localhost:8080/api/auth/login",dataLogin)
        }
    })
}