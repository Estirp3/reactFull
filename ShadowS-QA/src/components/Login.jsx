
import { useLoginDummy } from "../hooks/useLoginDummy";
import { useState } from "react";
export const Login = () => {

    const { isLoggedIn, user, handleLogin, handleLogout } = useLoginDummy();


    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            {!isLoggedIn ? (
                <div>
                    <h1>Bienvenido</h1>
                    <button onClick={handleLogin} style={{ padding: "10px 20px" }}>
                        Iniciar sesión
                    </button>
                </div>
            ) : (
                <div>
                    <h1>Hola, {user.name}</h1>
                    <p>Email: {user.email}</p>
                    <button onClick={handleLogout} style={{ padding: "10px 20px" }}>
                        Cerrar sesión
                    </button>
                </div>
            )}
        </div>
    );
}
