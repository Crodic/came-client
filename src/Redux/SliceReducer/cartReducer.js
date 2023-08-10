import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { addCartUser, current, deleteCart, removeCartUser } from "../../Services/authService";


const CartSlice = createSlice({
    name: "cart",
    initialState: { userCart: [], isLoading: false, isError: false, msg: null },
    reducers: {
        logout: (state, action) => {
            state.userCart = [];
        }
    },
    extraReducers: builder => {
        builder.addCase(fetchAddCartUser.pending, (state) => {
            state.isLoading = true;
            state.isError = false;
            state.msg = null;
        }).addCase(fetchAddCartUser.fulfilled, (state, action) => {
            state.userCart = action.payload;
            state.isLoading = false;
        }).addCase(fetchAddCartUser.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.msg = action?.error || "Lỗi. Vui Lòng Thử Lại Sau";
        }).addCase(fetchRemoveCartUser.pending, (state) => {
            state.isLoading = true;
            state.isError = false;
            state.msg = null;
        }).addCase(fetchRemoveCartUser.fulfilled, (state, action) => {
            state.userCart = action.payload;
            state.isLoading = false;
        }).addCase(fetchRemoveCartUser.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.msg = action?.error || "Lỗi. Vui Lòng Thử Lại Sau";
        }).addCase(fetchCartUser.pending, (state) => {
            state.isError = false;
            state.isLoading = true;
            state.msg = null;
        }).addCase(fetchCartUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.userCart = action.payload;
        }).addCase(fetchCartUser.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.msg = action?.error || "Lỗi. Vui Lòng Thử Lại Sau";
        }).addCase(fetchDeleteCart.pending, (state) => {
            state.isError = false;
            state.isLoading = true;
            state.msg = null;
        }).addCase(fetchDeleteCart.fulfilled, (state) => {
            state.isLoading = false;
            state.userCart = [];
        }).addCase(fetchDeleteCart.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.msg = action?.error || "Lỗi. Vui Lòng Thử Lại Sau";
        })
    }
})

export const fetchDeleteCart = createAsyncThunk("cart/fetchDeleteCart", async (data) => {
    try {
        let res = await deleteCart(data);
        if (res && res.status === 200) {
            return true;
        }
    } catch (error) {
        throw error;
    }
})

export const fetchAddCartUser = createAsyncThunk("cart/fetchAddCartUser", async (data) => {
    try {
        let res = await addCartUser(data);
        if (res && res.status === 200) {
            return res.data.user.cart;
        }
    } catch (error) {
        throw error;
    }
})

export const fetchRemoveCartUser = createAsyncThunk("cart/fetchRemoveCartUser", async (pid) => {
    try {
        let res = await removeCartUser(pid);
        if (res && res.status === 200) {
            return res.data.user.cart;
        }
    } catch (error) {
        throw error;
    }
})

export const fetchCartUser = createAsyncThunk("cart/fetchCartUser", async () => {
    try {
        let res = await current();
        if (res && res.status === 200) {
            return res.data.user.cart;
        }
    } catch (error) {
        throw error;
    }
})


export default CartSlice.reducer;

export const { logout } = CartSlice.actions;