import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { TokenProvider } from './context/TokenContext.jsx'
import { Toaster } from "@/components/ui/toaster"
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TokenProvider>
      <App />
      <Toaster />
    </TokenProvider>
  </React.StrictMode>,
)
