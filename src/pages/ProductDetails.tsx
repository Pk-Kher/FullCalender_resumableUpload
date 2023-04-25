import axios from 'axios';
import React, { useState, useCallback, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { ProductDataType } from '../types/types';
import ReactImageZoom from 'react-image-zoom';
import { useDispatch } from '../hooks';
import { addToCart } from '../redux/cart';
const ProductDetails = () => {
    const params = useParams();
    const dispatch = useDispatch();
    const [product, setProduct] = useState<ProductDataType>();
    const getProduct = useCallback(() => {
        axios.get(`https://fakestoreapi.com/products/${params?.id}`).then((res) => {
            setProduct(res.data);
        }).catch(() => { });
    }, [params?.id]);

    useEffect(() => {
        getProduct();
        console.log('pk');

    }, [getProduct, params.id]);
    const addToCartHandler = () => {
        if (product) {
            dispatch(addToCart(product));
        }
    }
    return (
        <>
            <title>{product?.title}</title>
            <section className="">
                <div className="container bg-white mx-auto">
                    <div className="pt-6 border-t border-[#f0f0f0] mt-6 overflow-hidden">
                        <div className="flex flex-wrap -mx-3 gap-y-6">
                            <div className="w-full lg:w-6/12 px-3">
                                <div className="relative">
                                    <div className="flex items-center justify-center bg-auto border border-[#f0f0f0] mb-3">
                                        {/* <img className="max-h-full object-contain" src={product?.image} alt={product?.title} title={product?.title} /> */}
                                        {product?.image && <ReactImageZoom {...{ width: 400, zoomWidth: 300, img: (product?.image || '') }} />}
                                    </div>
                                </div>
                            </div>
                            <div className="w-full lg:w-6/12 px-3">
                                <div className="mb-1">
                                    <h1 className="text-[22px] font-black text-black">
                                        {product?.title}
                                    </h1>
                                </div>
                                <div className="bg-[#061b2c] text-white uppercase md:py-5 mb-5 text-center">
                                    <div className="max-w-lg mx-auto">
                                        <div className="flex flex-wrap max-w-2xl -mx-3">
                                            <div className="w-full md:w-1/2 px-3 py-3 md:py-0 border-b border-b-white last:border-b-0 md:border-0 md:border-r md:border-r-white md:last:border-r-0">
                                                <div className="flex flex-wrap justify-center items-center gap-4 tracking-wider leading-none">
                                                    <img src="http://ystore.us/HTML/RedefineCommerce/Ecom-front/gamedaygear/images/free-shipping-new.png" alt="" />
                                                    <span className="inline-block text-left">
                                                        <span className="block font-extrabold">Free Shipping</span>
                                                        <span>To One Location</span>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="w-full md:w-1/2 px-3 py-3 md:py-0 border-b border-b-white last:border-b-0 md:border-0 md:border-r md:border-r-white md:last:border-r-0">
                                                <div className="flex flex-wrap justify-center items-center gap-4 tracking-wider leading-none">
                                                    <img src="http://ystore.us/HTML/RedefineCommerce/Ecom-front/gamedaygear/images/guarantee.png" alt="" />
                                                    <span className="inline-block text-left">
                                                        <span className="block font-extrabold">Satisfaction</span>
                                                        <span>Guarantee</span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <div className="text-black mb-5 text-[16px] flex items-center">
                                <span className="font-bold w-32">SKU </span>
                                <span>: NF0A529R</span>
                            </div> */}
                                {/* <div className="text-black mb-5 text-[16px] flex items-center">
                                <span className="font-bold w-32">MSRP </span>
                                <span>: <del>$141.00</del></span>
                            </div> */}
                                <div className="text-black mb-5 flex items-center">
                                    <span className="font-bold w-32">Category Name </span>
                                    <span>: {product?.category}</span>
                                </div>
                                <div className="mb-3 font-bold bg-[#051C2C] px-4 py-2.5 text-white tracking-widest text-center">
                                    Add 12 more of this johnnie-O Men's The Original 4-Button Polo to your cart to save an additional $8.00 per Item!
                                </div>
                                <div className="bg-[#d8dfe1] text-sm text-gray-900 flex flex-wrap p-5 items-center gap-2 tracking-wider mb-3">
                                    <span className="">Price Per Item</span>
                                    <span className="text-4xl font-bold">${(product?.price || 0).toFixed(2)}</span>
                                </div>
                                <div className="mb-3">
                                    <button onClick={addToCartHandler} type="button" className="flex justify-center bg-slate-900 hover:bg-slate-600 py-5 text-stone-100 w-full" data-modal-toggle="QuoteRequestModal"><span className="material-icons mr-1">shopping_cart</span>Add To Cart</button>
                                </div>
                                <div className='mb-3'>
                                    <span className='font-bold'>Description:</span>
                                    <p className='block'>
                                        {product?.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ProductDetails;