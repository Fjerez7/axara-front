import {createContext, FC, ReactNode, useEffect, useState} from "react";
import {AuthContextType, AuthResponse, User} from "../types";


//Create context for the global Context
export const AuthContext = createContext<AuthContextType>({
    user: null,
    updateUser: () => {},
    AuthRes: null,
    updateAuthRes: () => {}
});

export const AuthProvider:FC<{ children: ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const [AuthRes, setAuthRes] = useState<AuthResponse | null>(null)
    const updateUser = (newUser: User | null) => {
        setUser(newUser);
    };
    const updateAuthRes = (response: AuthResponse | null) => {
        setAuthRes(response)
    }
    useEffect(() => {
        const roleInLocalStorage = localStorage.getItem('role');
        if(roleInLocalStorage) setAuthRes({role: roleInLocalStorage})
    },[])
    return (
        <AuthContext.Provider value={{ user, updateUser, AuthRes,updateAuthRes }}>
            {children}
        </AuthContext.Provider>
    );
};

