import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { AuthProvider } from './contexts/AuthContext'
import { CarrinhoProvider } from './contexts/CarrinhoContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <CarrinhoProvider>
        <App />
      </CarrinhoProvider>
    </AuthProvider>
  </React.StrictMode>,
)
