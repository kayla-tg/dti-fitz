"use client"

import { User } from "@/types/user";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";

interface AuthContextType {
    user: Omit<User,"password"> | null,
    setUser: (u: Omit<User,"password"> | null) => void;
}
const AuthContext = createContext<AuthContextType | null>(null); 

export function AuthProvider({children}: {children: ReactNode}) {

    const [user, setUser] = useState<Omit<User,"password"> | null>(null);
    useEffect( () => {
        const u = localStorage.getItem("user")
        if(u !== null)
        {
            setUser(JSON.parse(u));
        }
    }, []);
    return (
        <AuthContext.Provider value = {
            {
                user: user,
                setUser: (u: Omit<User,"password"> | null) => {
                    if(u !== null)
                    {
                        localStorage.setItem('user',JSON.stringify(u));
                    }
                    setUser(u);
                }
            }
        }>
            {children}
        </AuthContext.Provider>
    )
}


export const useAuth = () =>
{
    const ctx = useContext(AuthContext);

    if(ctx === null)
    {
        throw new Error("useAuth must be used within AuthProvider");
    }
    return ctx;
}