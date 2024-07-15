import { configureStore } from '@reduxjs/toolkit';
import categoryReducer from './categorySlice';
import productReducer from './productsSlice';
import productDetailReducer from './productDetailSlice';
import cartReducer from './cartSlice';

export const store = configureStore({
    reducer: {
        categories: categoryReducer,
        products: productReducer,
        productDetail: productDetailReducer,
        cart: cartReducer
    },
});

export default store;