import React, { useEffect, useState, useCallback } from 'react'
import ProductBox from '../components/product/ProductBox';
import axios from 'axios'
import { ProductDataType } from '../types/types';
import { useParams } from 'react-router-dom';
import { useQuery/* , useQueryClient */ } from 'react-query';
import { getProducts } from '../reactQueryAPI/product';
// import { useDispatch } from '../hooks';
// import { getProducts } from '../redux/product';
// import { useGetProductsQuery } from '../api/api';

const Products = () => {
    const { category } = useParams();
    // const [products, setProducts] = useState<ProductDataType[] | []>([]);

    //redux async call
    // const dispatch = useDispatch();
    // dispatch(getProducts());

    //redux RTK query
    // const { data: products, isSuccess } = useGetProductsQuery('pk');

    // react query 
    // const queryClient = useQueryClient();
    const { data: products } = useQuery({ queryKey: ['products', category], queryFn: getProducts });

    const getProductsData = useCallback(async () => {
        // axios.get<ProductDataType[]>(`https://fakestoreapi.com/products/${category ? 'category/' + category : ''}`)
        //     .then((response) => {
        //         setProducts(response?.data);
        //     }).catch(() => {
        //     })
    }, [category]);

    useEffect(() => {
        getProductsData();
    }, [category, getProductsData]);
    return (
        <>
            <title>Products</title>
            <div className='container mx-auto bg-white overflow-hidden'>
                <div className='flex flex-wrap gap-y-6 -mx-4'>
                    <div className='w-full md:w-3/12 lg:w-3/12 px-4'>

                    </div>
                    <div className='w-full md:w-9/12 lg:w-9/12 px-4'>
                        <div className='flex justify-between items-center space-x-6 text-sm bg-[#f5f5f5] py-4 text-[16px]'>
                            <div className="lg:flex-1 flex flex-wrap justify-bet items-center px-2 gap-1">
                                Total <span className="font-semibold">{products?.length} Results</span>
                            </div>
                        </div>
                        <div className='mt-8'>
                            <div className='mt-8 relative'>
                                <div className='relative w-full pb-6 -mb-6'>
                                    <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8'>
                                        {
                                            products && products.map((product, i) => {
                                                return (
                                                    <li key={i} className='text-center border border-gray-200'>
                                                        <ProductBox product={product} />
                                                    </li>
                                                );
                                            })
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Products;