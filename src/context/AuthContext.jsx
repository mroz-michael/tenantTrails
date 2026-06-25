import { createContext, useContext, useState, useEffect } from "react";

const API = import.meta.env.VITE_API_URL;

const AuthContext = createContext();

export function AuthProvider( {children} ) {
    const [user, setUser] = useState(null);
    
    //for async calls to /me endpoint
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch(`${API}/api/auth/me`, { credentials: "include" })
            .then(res => res.ok ? res.json() : null)
            .then(data => {
                setUser(data?.user ?? null);
                setIsLoading(false);
            });
    }, []);

    async function signup(name, email, password) {
        const initials = name.split(' ').map(word => word[0]).join('').toUpperCase();
        const res = await fetch(`${API}/api/auth/signup`, {
            method: "POST",
            credentials: "include",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email, pw: password, initials }),
        });

        if (!res.ok) throw new Error("Signup failed");
        const data = await res.json();
        setUser(data.user);
    }

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
        <AuthContext.Provider value={ {user, logout, login, isLoading, signup }}>
            {children}
        </AuthContext.Provider>
    )

}


export function useAuth() {
    return useContext(AuthContext);
};