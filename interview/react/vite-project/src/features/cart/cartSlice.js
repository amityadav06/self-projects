import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const url = '/api/react-useReducer-cart-project';
const initialState = {
    cartItems: [],
    amount: 4,
    total: 0,
    isLoading: true
}

export const getCartItems = createAsyncThunk('cart/getCartItems', async (name, thunkAPI) => {
    try {
        // console.log(name);
        // console.log(thunkAPI);
        // console.log(thunkAPI.getState());
        
        const res = await fetch(url);    
        const resJson = await res.json()    
        return resJson
    } catch (error) {
        return thunkAPI.rejectWithValue('Something went wrong');
    }
})

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        clearCart: (state) => {
            state.cartItems = [];
        },
        removeItem: (state, action) => {
            const itemId = action.payload;
            state.cartItems = state.cartItems.filter((item) => item.id !== itemId )
        },
        increase: (state, action) => {
            const itemId = action.payload;
            const cartItem = state.cartItems.find((item) => item.id === itemId)
            cartItem.amount = cartItem.amount + 1
        },
        decrease: (state, action) => {
            const itemId = action.payload;
            const cartItem = state.cartItems.find((item) => item.id === itemId)
            cartItem.amount = cartItem.amount - 1
        },
        calculateTotals: (state) => {
            let amount = 0;
            let total = 0;
            state.cartItems.forEach((item) => {
              amount += item.amount;
              total += item.amount * item.price;
            });
            state.amount = amount;
            state.total = total;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getCartItems.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(getCartItems.fulfilled, (state, action) => {
            // console.log(action);
            state.isLoading = false;
            state.cartItems = action.payload
        })
        builder.addCase(getCartItems.rejected, (state, action) => {
            // console.log(action);
            state.isLoading = false;
        })
    }
})

export const { clearCart, removeItem, increase, decrease, calculateTotals } = cartSlice.actions

export default cartSlice.reducer;