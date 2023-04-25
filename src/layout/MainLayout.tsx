import React, { useEffect } from 'react'
import { Route, useLocation } from 'react-router-dom'
import About from '../pages/About'
import Cart from '../pages/Cart'
import Contact from '../pages/Contact'
import Features from '../pages/Features'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Pricing from '../pages/Pricing'
import ProductDetails from '../pages/ProductDetails'
import Products from '../pages/Products'
import Routes from '../routes/Routes'
import Footer from './Footer'
import Header from './Header'

const MainLayout: React.FC = () => {
    const location = useLocation();
    useEffect(() => {
        window.scroll(0, 0);
    }, [location]);
    return (
        <div>
            <Header />
            <main>
                <div className='bg-white'>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/products/category/:category" element={<Products />} />
                        <Route path="/products" element={<Products />} />
                        <Route path="/product/detail/:id" element={<ProductDetails />} />
                        <Route path="/shopping/cart" element={<Cart />} />

                        <Route path="/about" element={<About />} />
                        <Route path="/features" element={<Features />} />
                        <Route path="/pricing" element={<Pricing />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/login" element={<Login />} />
                    </Routes>
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default MainLayout