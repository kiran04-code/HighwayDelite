import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {BrowserRouter} from "react-router-dom"
import { AuthContextProvider } from './context/AuthContextProvider.tsx'
import { GoogleOAuthProvider } from '@react-oauth/google'
const ClinectId = import.meta.env.VITE_CLINET_ID
createRoot(document.getElementById('root')!).render(
  <StrictMode>
<AuthContextProvider>
  <BrowserRouter>
  <GoogleOAuthProvider clientId= {ClinectId}>
    <App />
  </GoogleOAuthProvider>
    
</BrowserRouter>
</AuthContextProvider>
  </StrictMode>,
)
