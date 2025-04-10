import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './Styles.css'; // Si es un archivo CSS

import { Login } from './components/Login.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Login />
  </StrictMode>,
)
