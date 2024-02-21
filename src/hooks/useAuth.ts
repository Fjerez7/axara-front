import {useContext} from "react";
import {AuthContext} from "../context/AuthProvider.tsx";
import {AuthContextType} from "../types";

// Hook personalizado para usar el contexto de autenticación
export const useAuth = (): AuthContextType => useContext(AuthContext);