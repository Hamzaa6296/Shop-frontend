import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Navbar from './assets/components/Navbar.jsx'
import Hero from './assets/components/Hero.jsx'
import NewArrivals from './assets/components/Arrival.jsx'
import Selling from './assets/components/Selling.jsx'
import Browse from './assets/components/Browse.jsx'
import Reviews from './assets/components/Reviews.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Navbar/>
    <Hero/>
    <NewArrivals/>
    <Selling/>
    <Browse/>
    <Reviews/>
  </StrictMode>,
)
