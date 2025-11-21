import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './assets/pages/HomePage';
import ProductDetail from './assets/pages/ProductDetail'
import Navbar from './assets/components/Navbar';

function App () {
    return (
        <>
        <Navbar />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/product' element={<ProductDetail />} />
        </Routes>
        </>

    )
}

export default App;