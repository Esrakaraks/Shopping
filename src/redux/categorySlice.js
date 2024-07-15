import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async thunk to fetch categories
export const fetchCategories = createAsyncThunk('categories', async () => {
    const response = await fetch('https://fakestoreapi.com/products/categories');
    return response.json();
});

const categorySlice = createSlice({
    name: 'categories',
    initialState: {
        categories: []
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCategories.fulfilled, (state, action) => {
                state.categories = action.payload;
            })
    },
});

export default categorySlice.reducer;
