import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider( {children} ) {
    const [user, setUser] = useState(null);

    function logout() {
        setUser(null);
    }

    function login(user) {
        setUser(user);
    }

    return(
        <AuthContext.Provider value={ {user, setUser, logout, login }}>
            {children}
        </AuthContext.Provider>
    )

}


export function useAuth() {
    return useContext(AuthContext);
};