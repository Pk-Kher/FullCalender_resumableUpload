import React from 'react'
import { NavLink } from 'react-router-dom';
import { useDispatch } from '../../hooks';
import { addToCart } from '../../redux/cart';
import { ProductDataType } from '../../types/types';

const ProductBox: React.FC<{ product: ProductDataType }> = ({ product }) => {
    const dispatch = useDispatch();
    const addToCartHandler = () => {
        dispatch(addToCart(product));
    }
    return (
        <div className="relative mt-1">
            <NavLink to={`/product/detail/${product?.id}`}>
                <div className="h-44 w-72 flex items-center justify-center bg-auto">
                    <img className="max-h-full object-contain" src={product?.image} alt={product?.title} title={product?.title} />
                </div>
            </NavLink>
            <div className="mt-6">
                <h3 className="mt-1 font-bold text-xl text-gray-900 px-3 hover:text-blue-500">
                    <NavLink to={`/product/detail/${product?.id}`}>
                        <span className="relative cursor-pointer"><span className="absolute inset-0"></span> {product?.title}</span>
                    </NavLink>
                </h3>
                <p className="mt-4 text-[#415364]"><span className="font-bold">MSRP ${product?.price}</span></p>
                {/* <ul role="list" className="hidden items-center mt-2 justify-center space-x-1" style={{ display: 'none' }}>
                    <li className="w-8 h-8 border-2 border-indigo-600 hover:border-indigo-600"><img src="https://www.pkhealthgear.com/Resources/patagonia/Product/color/566736_25543_NENA.jpg" alt="" title="" className="" /></li>
                    <li className="w-8 h-8 border-2 border-[#000000] hover:border-indigo-600"><img src="https://www.pkhealthgear.com/Resources/patagonia/Product/color/1040605_25543_PLCN.jpg" alt="" title="" className="" /></li>
                    <li className="w-8 h-8 border-2 border-[#000000] hover:border-indigo-600"><img src="https://www.pkhealthgear.com/Resources/patagonia/Product/color/562584_1040611_25543_BCW.jpg" alt="" title="" className="" /></li>
                    <li className="w-8 h-8 border-2 border-[#000000] hover:border-indigo-600"><img src="https://www.pkhealthgear.com/Resources/patagonia/Product/color/562576_1040593_25543_BLK.jpg" alt="" title="" className="" /></li>
                    <li className="w-8 h-8 border-2 border-[#000000] hover:border-indigo-600"><img src="https://www.pkhealthgear.com/Resources/patagonia/Product/color/637848564486828779_197289_5744764_swatch_abb.jpg" alt="" title="" className="" /></li>
                </ul> */}
                <div className="mt-3 mb-4">
                    <button onClick={addToCartHandler} className={`text-lg py-2 px-5 inline-block border border-transparent shadow-sm font-medium text-white bg-slate-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 cursor-pointer hover:bg-indigo-800`}>Add to Cart</button>
                </div>
            </div>
        </div>
    )
}

export default ProductBox;