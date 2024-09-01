import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const url = 'https://dummyjson.com/products'

const initialState = {
    products: [],
    isLoading: true
}

export const getProducts = createAsyncThunk('product/getProducts', async () => {
    try {
        const res = await fetch(url);
        const resJson = await res.json();
        // console.log(resJson);
        
        return resJson.products;
    } catch (error) {
        console.log(error);
    }
})

const productSlice = createSlice({
    name: 'product',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getProducts.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(getProducts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.products = action.payload
        })
        builder.addCase(getProducts.rejected, (state, action) => {
            state.isLoading = false
        })
    }
})

export default productSlice.reducer