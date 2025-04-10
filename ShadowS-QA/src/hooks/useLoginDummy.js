import { useState } from "react";

export const useLoginDummy = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState(null);

    const handleLogin = () => {
        // Simular un usuario autenticado
        const dummyUser = {
            name: "Patricio Calderon",
            email: "patricio@example.com",
        };
        setUser(dummyUser);
        setIsLoggedIn(true);
    };

    const handleLogout = () => {
        setUser(null);
        setIsLoggedIn(false);
    };
    return {
        isLoggedIn,
        user,
        handleLogin,
        handleLogout,
    }

}
