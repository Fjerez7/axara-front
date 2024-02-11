import {useMutation} from "@tanstack/react-query";
import axios from "axios";

export const createUser = () => {
const mutation = useMutation({
    mutationFn: (data) => {
        return axios.post("http://localhost:8080/api/users",data)
    }
})
    return mutation;
}