export interface User {
    id: number;
    firstName: string;
    lastName:string
    email: string;
    password:string;
    role: string
}

export interface UserUpdate {
    firstName?: string;
    lastName?:string
}

export interface UpdatePassword {
    currentPassword: string;
    newPassword: string;
    confirmPassword: string;
}