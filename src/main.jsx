import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Homepage from './assets/pages/HomePage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Homepage/>
  </StrictMode>,
)
