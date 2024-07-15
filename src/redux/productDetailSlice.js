import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../utils/Status";


export const getProductDetails = createAsyncThunk('productDetail', async (id) => {
    const product = await fetch(`https://fakestoreapi.com/products/${id}`);
    return product.json();

})

const productDetailSlice = createSlice({
    name: 'productDetail',
    initialState: {
        productsDetails: [],
        productStatus: STATUS.IDLE,
        count:0
    },
    reducers: {
        increment: (state) => {
            if (state.count > 9) {
                return;
            }
            state.count += 1
          },
          decrement: (state) => {
            if (state.count < 1) {
                return;
            }
            state.count -= 1
          },
    },
    extraReducers: (builder) => {
        builder
        .addCase(getProductDetails.pending, (state, action) =>{
            state.productStatus = STATUS.LOADING;
        })
        .addCase(getProductDetails.fulfilled, (state, action) => {
            state.productStatus = STATUS.SUCCESS
            state.productsDetails = action.payload
        })
        .addCase(getProductDetails.rejected, (state, action) => {
            state.productStatus = STATUS.FAIL
        })
    }

})
export const { increment, decrement } = productDetailSlice.actions
export default productDetailSlice.reducer;