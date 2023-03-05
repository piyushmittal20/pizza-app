import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';


export const getProductList = createAsyncThunk('/products/pizzaList', async () => {
    const { data } = await axios.get("/api/products")
    return data;
})

const initialState = {
    isLoading: false,
    errMsg: '',
    pizzaList: []
}

const prodSlice = createSlice({
    name: "product",
    initialState,
    extraReducers: {
        [getProductList.pending]: (state) => {
            state.isLoading = true
        },
        [getProductList.fulfilled]: (state, action) => {
            state.isLoading = false,
                state.pizzaList = action.payload
        },
        [getProductList.rejected]: (state, action) => {
            state.isLoading = false,
                state.errMsg = action.payload
        }
    }
})

export default prodSlice.reducer;