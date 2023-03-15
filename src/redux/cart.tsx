import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { ProductDataType } from '../types/types';


const initialState: { products: ProductDataType[] } = {
    products: [],
}

export const cart = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<ProductDataType>) => {
            let product = action.payload;
            let productExists = state.products.find(value => value.id === product.id);
            if (productExists) {
                let temp = state.products.filter((value) => value.id !== product.id);

                return { products: [...temp, { ...productExists, qty: (productExists?.qty || 0) + 1 }] };
            } else {
                return { products: [...state?.products, { ...product, qty: 1 }] }
            }
        },
        removeCartItem: (state, action: PayloadAction<{ id: number }>) => {
            return { products: state.products.filter((value) => action.payload.id !== value.id) }
        }
    },
});




// Action creators are generated for each case reducer function
export const { addToCart, removeCartItem } = cart.actions;
export default cart.reducer;