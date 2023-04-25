import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom';
import { useSelector } from '../hooks';
const Header: React.FC = () => {
    const location = useLocation();
    const pathName = location?.pathname?.toLowerCase();
    const cart = useSelector(store => store.cart);
    const [category, setCategory] = useState<string[] | []>([]);

    const getCategory = () => {
        axios.get<string[]>(`https://fakestoreapi.com/products/categories`)
            .then((response) => {
                setCategory(response?.data);
            }).catch(error => {
            })
    }
    useEffect(() => {
        getCategory();
    }, []);

    return (
        <section className='bg-white sticky top-0 z-50'>
            <div className="container mx-auto">
                <header className='relative bg-white border-b border-gray-200'>
                    <div className="bg-white py-2 md:py-4">
                        <div className="container px-4 mx-auto md:flex md:items-center">
                            <div className="flex justify-between items-center">
                                <NavLink to="/" className="font-bold text-xl text-indigo-600">FWR</NavLink>
                                <button className="border border-solid border-gray-600 px-3 py-1 rounded text-gray-600 opacity-50 hover:opacity-75 md:hidden" id="navbar-toggle">
                                    <i className="fas fa-bars"></i>
                                </button>
                            </div>
                            <div className="md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0" id="navbar-collapse">
                                <NavLink to="/" className={`p-2 lg:px-4 md:mx-2 rounded ${pathName !== '/' ? 'hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300' : 'bg-indigo-600 text-white'}`}>Home</NavLink>
                                <NavLink to="/about" className={`p-2 lg:px-4 md:mx-2 rounded ${pathName !== '/about' ? 'hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300' : 'bg-indigo-600 text-white'}`}>About</NavLink>
                                <NavLink to="/features" className={`p-2 lg:px-4 md:mx-2 rounded ${pathName !== '/features' ? 'hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300' : 'bg-indigo-600 text-white'}`}>Features</NavLink>
                                <NavLink to="/pricing" className={`p-2 lg:px-4 md:mx-2 rounded ${pathName !== '/pricing' ? 'hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300' : 'bg-indigo-600 text-white'}`}>Pricing</NavLink>
                                <NavLink to="/contact" className={`p-2 lg:px-4 md:mx-2 rounded ${pathName !== '/contact' ? 'hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300' : 'bg-indigo-600 text-white'}`}>Contact</NavLink>
                                <div className="flex items-center justify-end">
                                    <div className="flex items-center">
                                        <div className="flex items-center space-x-3">
                                            <div className="flex relative">
                                                <NavLink to="/login" title='Login' className={`${pathName === '/login' ? 'text-indigo-600' : 'text-gray-600'} hover:text-indigo-600 flex items-center gap-1`}>
                                                    <span className="material-icons">person</span>
                                                </NavLink>
                                            </div>
                                            <div className="flow-root">
                                                <NavLink to={'/shopping/cart'} className="text-gray-600 hover:text-primary group flex items-center gap-1 relative pr-2 cursor-pointer">
                                                    <span className="material-icons">shopping_cart</span>
                                                    <span className="absolute right-0 -top-2 w-4 h-4 rounded-full flex items-center justify-center bg-gray-200 text-[9px] font-medium text-gray-500">{cart?.products?.length}</span>
                                                </NavLink>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div >
                    </div>
                </header>
            </div>
            <div className='h-full py-2 lg:flex items-center justify-center bg-[#051c2c] relative'>
                <div>
                    <div className='ml-6'>
                        <div className='h-full flex justify-center gap-x-4 xl:gap-x-10 text-base xl:tracking-widest'>
                            <div className="flex">
                                <div className="">
                                    <NavLink to="/products" className={`p-2 rounded relative z-10 flex items-center transition-colors ease-out duration-200 font-semibold ${pathName !== '/products' ? 'transition-colors duration-300 text-white hover:text-sky-400' : 'text-sky-400'}`} >
                                        <span className="uppercase ">Brands</span>
                                    </NavLink>
                                </div>
                            </div>
                            {
                                category.map((value, index) => {
                                    let url = `/products/category/${value}`;
                                    return (
                                        <div className="flex" key={index}>
                                            <div className="">
                                                <NavLink to={url} className={`p-2 rounded relative z-10 flex items-center transition-colors ease-out duration-200 font-semibold ${pathName !== url.toLowerCase() ? ' hover:text-sky-400 transition-colors duration-300 text-white' : 'text-sky-400'}`}>
                                                    <span className="uppercase">{value}</span>
                                                </NavLink>
                                            </div>
                                        </div>
                                    );
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Header;
