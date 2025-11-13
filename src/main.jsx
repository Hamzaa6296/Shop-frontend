import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Navbar from './assets/components/Navbar.jsx'
import Hero from './assets/components/Hero.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Navbar/>
    <Hero/>
  </StrictMode>,
)
