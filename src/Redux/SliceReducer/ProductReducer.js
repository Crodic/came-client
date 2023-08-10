import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getDealProduct, getProduct } from "../../Services/service";


const ProductReducer = createSlice({
    name: "products",
    initialState: { products: [], deal: {}, isLoading: false, isError: false, product: {} },
    reducers: {
        clearError: (state) => {
            state.isError = false;
        }
    },
    extraReducers: builder => {
        builder.addCase(fetchDealProduct.pending, (state) => {
            state.isError = false;
            state.isLoading = true;
        }).addCase(fetchDealProduct.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.deal = action.payload;
        }).addCase(fetchDealProduct.rejected, (state) => {
            state.isError = true;
            state.isLoading = false;
        }).addCase(fetchProduct.pending, (state) => {
            state.isLoading = true;
            state.isError = false;
        }).addCase(fetchProduct.fulfilled, (state, action) => {
            state.product = action.payload;
            state.isLoading = false;
        }).addCase(fetchProduct.rejected, (state) => {
            state.isLoading = false;
            state.isError = true;
        })
    }
})

export const fetchDealProduct = createAsyncThunk("/products/fetchDealProduct", async () => {
    try {
        let res = await getDealProduct();
        if (res && res.status === 200) {
            return res.data.product;
        }
    } catch (error) {
        throw error;
    }
})

export const fetchProduct = createAsyncThunk("/products/fetchProduct", async (id) => {
    try {
        let res = await getProduct(id);
        if (res && res.status === 200 && res.data.product !== null) {
            return res.data.product;
        }
    } catch (error) {
        throw error;
    }
})



export default ProductReducer.reducer;
export const { clearError } = ProductReducer.actions;