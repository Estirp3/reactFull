import React from "react";
import ReactDom from 'react-dom/client';
//import { HelloWordApp } from './HelloWordApp'
import { FirstApp } from "./FirstApp";
import './style.css'



ReactDom.createRoot( document.getElementById('root') ).render(
    <React.StrictMode>
        <FirstApp title="Hola soy Goku" />
    </React.StrictMode>
)

