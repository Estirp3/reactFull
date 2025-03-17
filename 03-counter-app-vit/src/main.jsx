import React from "react";
import ReactDom from 'react-dom/client';

import { App } from "./App"
import './style.css'



ReactDom.createRoot( document.getElementById('root') ).render(
    <React.StrictMode>
       <App title={123} /> {/* Esto debería generar una advertencia */}
    </React.StrictMode>
)

