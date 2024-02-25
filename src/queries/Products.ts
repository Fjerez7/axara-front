import {useMutation} from "@tanstack/react-query";
import axios from "axios";

export const uploadProductImg = () => {
    return useMutation({
        mutationFn: (data: FormData) => {
            return axios.post("http://localhost:8080/api/v1/products/upload-images", data , {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
        },
        onSuccess: (data) => {
            console.log("Imágenes subidas con éxito:", data);
        },
        onError: (error) => {
            console.error("Error al subir imágenes:", error);
        },
    })
}
