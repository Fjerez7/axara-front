import {createContext, FC, ReactNode, useContext, useState} from "react";

interface User {
    id: string;
    firstName: string;
    lastName:string
    email: string;
    password:string
}
interface AuthContextType {
    user: User | null;
    updateUser: (user: User | null) => void;
}

//Create context for the global Context
const AuthContext = createContext<AuthContextType>({
    user: null,
    updateUser: () => {},
});

export const AuthProvider:FC<{ children: ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);

    const updateUser = (newUser: User | null) => {
        setUser(newUser);
    };

    return (
        <AuthContext.Provider value={{ user, updateUser }}>
            {children}
        </AuthContext.Provider>
    );
};

// Hook personalizado para usar el contexto de autenticación
export const useAuth = (): AuthContextType => useContext(AuthContext);