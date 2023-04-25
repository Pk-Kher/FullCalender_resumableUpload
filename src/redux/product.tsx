import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { ProductDataType } from "../types/types";

export const getProducts = createAsyncThunk(
    '/products',
    async () => {
        const response = await axios.get('https://fakestoreapi.com/products')
        console.log(response.data);
        return response?.data
    });

const initialState: { products: ProductDataType[], status: string, error: string } = {
    products: [],
    status: "idle",
    error: ""
}
export const product = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(getProducts.pending, (state, action) => {
                state.status = "loading"
            })
            .addCase(getProducts.fulfilled, (state, action) => {
                state.status = "succeeded"
                state.products = action?.payload;
            })
            .addCase(getProducts.rejected, (state, action) => {
                state.status = "failed"
                state.error = action.error.message || ''
            })
    }
});

export default product.reducer;