import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../utils/Status";


export const fetchProducts = createAsyncThunk('products', async() => {
    const products = await fetch('https://fakestoreapi.com/products')
    return products.json();
})

export const fetchCategoriesFilter = createAsyncThunk('categoryFilter', async(category) => {
    const product = await fetch(`https://fakestoreapi.com/products/category/${category}`)
    return product.json();
})

export const productSorting = createAsyncThunk('productSorting', async(sort) => {
    const product = await fetch(`https://fakestoreapi.com/products?sort=${sort}`);
    return product.json();
})

export const fetchProductDetail = createAsyncThunk('productDetail', async(id) => {
    const product = await fetch('https://fakestoreapi.com/products/`{id}`')
    return product;
})

const productSlice = createSlice({
    name: 'products',
    initialState: {
        products: [],
        productStatus: STATUS.IDLE,
        productDetails: []
    },
    reducers: [],
    extraReducers: (builder) => {
        builder
        .addCase(fetchProducts.pending,(state,action) => {
            state.productStatus = STATUS.LOADING;
        })
        .addCase(fetchProducts.fulfilled, (state,action) => {
            state.productStatus = STATUS.SUCCESS
            state.products = action.payload;
        })
        .addCase(fetchProducts.rejected, (state, action) => {
            state.productStatus = STATUS.FAIL
        })
        .addCase(fetchProductDetail.pending, (state, action) =>{
            state.productStatus = STATUS.LOADING;
        })
        .addCase(fetchProductDetail.fulfilled, (state, action) => {
            state.productStatus = STATUS.SUCCESS
            state.productDetails = action.payload
        })
        .addCase(fetchProductDetail.rejected, (state, action) => {
            state.productStatus = STATUS.FAIL
        })
        .addCase(fetchCategoriesFilter.pending, (state, action) =>{
            state.productStatus = STATUS.LOADING;
        })
        .addCase(fetchCategoriesFilter.fulfilled, (state, action) => {
            state.productStatus = STATUS.SUCCESS
            state.products = action.payload
        })
        .addCase(fetchCategoriesFilter.rejected, (state, action) => {
            state.productStatus = STATUS.FAIL
        })
        .addCase(productSorting.pending, (state, action) =>{
            state.productStatus = STATUS.LOADING;
        })
        .addCase(productSorting.fulfilled, (state, action) => {
            state.productStatus = STATUS.SUCCESS
            state.products = action.payload
        })
        .addCase(productSorting.rejected, (state, action) => {
            state.productStatus = STATUS.FAIL
        })
    }
})
export default productSlice.reducer;