import React from "react";
import ReactDom from 'react-dom/client';
// import { FirstApp } from "./FirstApp";
import { CounterApp } from "./CounterApp";
import './style.css'



ReactDom.createRoot( document.getElementById('root') ).render(
    <React.StrictMode>
        <CounterApp value={ 100 }  />
        {/* <FirstApp title="Hola soy Vegeta"/> */}
    </React.StrictMode>
)

