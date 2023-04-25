// /* eslint-disable jsx-a11y/no-redundant-roles */
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from '../hooks';
import { removeCartItem } from '../redux/cart';
const Cart = () => {
    const cart = useSelector(store => store.cart);
    const dispatch = useDispatch();
    const removeItem = (id: number) => {
        dispatch(removeCartItem({ id }));
    }
    return (
        <>
            <title>Shopping Cart</title>
            <section className='mt-5'>
                <div className='container mx-auto'>
                    <div id='form' className='flex flex-wrap -mx-3 -mt-3 cart-box'>
                        <div className='w-full lg:w-9/12 px-3 mt-3'>
                            <div className="flex justify-between items-center bg-gray-200 w-full px-4 py-2">
                                <div className="text-2xl mr-3">Shopping Cart</div>
                                <div className="text-base">
                                    {cart?.products?.length} Item(s)
                                    <span className="hidden-xs"> in cart</span>
                                </div>
                            </div>
                            <ul className="overflow-hidden pb-4">
                                {
                                    cart?.products?.length > 0 ? cart?.products?.map((product, index) => {
                                        return (
                                            <li className="flex flex-wrap pt-4 -mx-3" key={index} >
                                                <div className="w-full lg:w-1/3 px-3" >
                                                    <NavLink to={`/product/detail/${product?.id}`
                                                    } title="" className="h-44 w-72 flex items-center justify-center bg-auto" >
                                                        <img src={product?.image} alt="Patagonia Men's Better Sweater Jacket" className="max-h-full object-contain" />
                                                    </NavLink>
                                                    {/* <div className="h-44 w-72 flex items-center justify-center bg-auto">
                                                        <img className="max-h-full object-contain" src={product?.image} alt={product?.title} title={product?.title} />
                                                    </div> */}
                                                </div>
                                                <div className="w-full lg:w-2/3 px-3 flex flex-wrap lg:justify-between">
                                                    <div className="text-lg font-semibold">
                                                        <NavLink to={`/product/detail/${product?.id}`} className="text-black hover:text-anchor-hover">{product?.title}</NavLink>
                                                    </div>
                                                    <div className="w-full flex flex-wrap">
                                                        <div className="w-full mt-4">
                                                            <div className="flex justify-between">
                                                                <div className="text-base">
                                                                    <span className="font-semibold">Category :</span> {product?.category}
                                                                </div>
                                                            </div>
                                                            <div className="mt-4 border-t border-t-gray-500" >
                                                                <div className="flex justify-between py-3 border-b border-b-gray-300" >
                                                                    <div className="w-full md:w-1/3" >
                                                                        <div className="mb-1" > Qty</div >
                                                                        <div className="font-semibold" > {product?.qty}</div >
                                                                    </div>
                                                                    <div className="w-full md:w-1/3" >
                                                                        <div className="mb-1" > Price</div >
                                                                        <div className="font-semibold" > ${parseFloat('' + product?.price).toFixed(2)}</div >
                                                                    </div>
                                                                    <div className="w-full md:w-1/3" >
                                                                        <div className="mb-1" > Total Price</div >
                                                                        <div className="font-semibold" > ${parseFloat('' + (product?.qty || 0) * product?.price).toFixed(2)}</div >
                                                                    </div>

                                                                </ div >
                                                            </div>
                                                            <div className="flex mt-5 justify-end" >
                                                                <button type='button' onClick={() => removeItem(product?.id)} className="btn bg-red-500 px-2 py-1 border border-slate-400 rounded-md text-white hover:bg-red-600 text-center" > Remove</button >
                                                            </div>
                                                        </div>
                                                    </div>
                                                </ div >
                                            </li>
                                        );
                                    }) : <p className='text-center mt-2'>Cart is empty.</p>
                                }

                            </ul>
                        </ div >
                    </div >
                </div >
            </section >
        </>

    )
}

export default Cart;