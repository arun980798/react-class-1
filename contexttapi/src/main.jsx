import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import XyzContaxt from './contaxt/XyzContaxt'

createRoot(document.getElementById('root')).render(
  <XyzContaxt>
      <App />
 
  </XyzContaxt>
)
