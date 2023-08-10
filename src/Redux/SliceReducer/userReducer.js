import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { current, editUser, getLogin, getLogout, updateAddress } from "../../Services/authService";
import { toast } from "react-toastify";

const UserReducer = createSlice({
    name: "user",
    initialState: { user: null, accessToken: null, refreshToken: null, auth: false, isError: false, isLoading: false, refreshUser: false },
    reducers: {
        logout: (state) => {
            state.user = null;
            state.auth = false;
            state.accessToken = null;
            state.refreshToken = null;
        },
        clearError: (state) => {
            state.isError = false;
        },
        updateRefreshToken: (state, action) => {
            state.refreshToken = action.payload;
        },
        updateAccessToken: (state, action) => {
            state.accessToken = action.payload;
        },
        refreshUser: (state) => {
            state.refreshUser = !state.refreshUser;
        }
    },
    extraReducers: builder => {
        builder.addCase(fetchLoginUser.pending, (state) => {
            state.isLoading = true;
            state.isError = false;
        }).addCase(fetchLoginUser.fulfilled, (state, action) => {
            state.user = action.payload.user;
            state.accessToken = action.payload.access_token;
            state.refreshToken = action.payload.refresh_token;
            state.isLoading = false;
            state.auth = true;
        }).addCase(fetchLoginUser.rejected, (state) => {
            state.isLoading = false;
            state.isError = true;
        }).addCase(fetchLogoutUser.pending, (state) => {
            state.isLoading = true;
            state.isError = false;
        }).addCase(fetchLogoutUser.fulfilled, (state) => {
            state.user = null;
            state.auth = false;
            state.accessToken = null;
            state.refreshToken = null;
            state.isLoading = false;
        }).addCase(fetchLogoutUser.rejected, (state) => {
            state.isLoading = false;
            state.isError = true;
        }).addCase(fetchUpdateAddress.pending, (state) => {
            state.isLoading = true;
            state.isError = false;
        }).addCase(fetchUpdateAddress.fulfilled, (state, action) => {
            state.user = action.payload;
            state.isLoading = false;
        }).addCase(fetchUpdateAddress.rejected, (state) => {
            state.isLoading = false;
            state.isError = true;
        }).addCase(fetchCurrentUser.pending, (state) => {
            state.isError = false;
            state.isLoading = true;
            state.msg = null;
        }).addCase(fetchCurrentUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.user = action.payload;
        }).addCase(fetchCurrentUser.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.msg = action?.error || "Lỗi. Vui Lòng Thử Lại Sau";
        })
            .addCase(fetchUpdateUser.pending, (state) => {
                state.isError = false;
                state.isLoading = true;
                state.msg = null;
            }).addCase(fetchUpdateUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.user = action.payload;
                toast.success("Cập Nhật Thông Tin Thành Công");
            }).addCase(fetchUpdateUser.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.msg = action?.error || "Lỗi. Vui Lòng Thử Lại Sau";
            })
    }
})


export const fetchLoginUser = createAsyncThunk("/user/fetchLoginUser", async (data) => {
    try {
        let res = await getLogin(data);
        if (res && res.status === 200) {
            toast.success("Login Thành Công");
            return res.data;
        }
    } catch (error) {
        toast.error("Đăng Nhập Thất Bại. Vui Lòng Kiểm Tra Lại");
        throw error;
    }
})

export const fetchLogoutUser = createAsyncThunk("/user/fetchLogoutUser", async () => {
    try {
        let res = await getLogout();
        if (res && res.status === 200) {
            toast.success("Logout Thành Công");
            return true;
        }
    } catch (error) {
        throw error;
    }
})

export const fetchUpdateAddress = createAsyncThunk("/user/fetchUpdateAddress", async (data) => {
    try {
        let res = await updateAddress(data);
        if (res && res.status === 201) {
            toast.success("Địa Chỉ Nhận Hàng Đã Được Cập Nhật");
            return res.data.user;
        }
    } catch (error) {
        throw error;
    }
})

export const fetchCurrentUser = createAsyncThunk("user/fetchCurrentUser", async () => {
    try {
        let res = await current();
        if (res && res.status === 200) {
            return res.data.user;
        }
    } catch (error) {
        throw error;
    }
})

export const fetchUpdateUser = createAsyncThunk("user/fetchUpdateUser", async (data) => {
    try {
        let res = await editUser(data);
        if (res && res.status === 201) {
            return res.data.user;
        }
    } catch (error) {
        throw error;
    }
})

export default UserReducer.reducer;

export const { logout, updateRefreshToken, updateAccessToken, refreshUser } = UserReducer.actions;