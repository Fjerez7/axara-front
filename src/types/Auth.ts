import {User} from "./User.ts";

export interface AuthResponse {
    token: string;
    role: string
}

export interface AuthContextType {
    user: User | null;
    updateUser: (user: User | null) => void;
    AuthRes: AuthResponse | null,
    updateAuthRes: (response:AuthResponse | null) => void;
}