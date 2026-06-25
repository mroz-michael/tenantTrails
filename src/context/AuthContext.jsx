import { createContext, useContext, useState } from "react";

const API = import.meta.env.VITE_API_URL;

const AuthContext = createContext();

export function AuthProvider( {children} ) {
    const [user, setUser] = useState(null);

    async function logout() {
        await fetch(`${API}/api/auth/logout`, {
            method: "POST",
            credentials: "include",
        });
        setUser(null);
    }

    async function login(email, password) {
        const res = await fetch(`${API}/api/auth/login`, {
            method: "POST", 
            credentials: "include",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password }),
        });
        
        if (!res.ok) {
            throw new Error("Invalid Credentials");
        }

        setUser((await res.json()).user);
    }

    return(
        <AuthContext.Provider value={ {user, logout, login }}>
            {children}
        </AuthContext.Provider>
    )

}


export function useAuth() {
    return useContext(AuthContext);
};