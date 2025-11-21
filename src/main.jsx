import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Homepage from './assets/pages/HomePage.jsx'
import ProductDetail from './assets/pages/ProductDetail.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
