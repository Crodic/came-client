import axios from 'axios';
import jwt_decode from "jwt-decode";
import { logout, updateAccessToken, updateRefreshToken } from '../Redux/SliceReducer/userReducer';
import { toast } from 'react-toastify';

let store;

// Take Store in store.jsx (Using function in store.js - input store)
export const injectStore = _store => {
    store = _store;
}

const authAxios = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
    withCredentials: true,
    timeout: 10000,
})

authAxios.interceptors.request.use(async function (config) {
    const { accessToken, refreshToken } = store.getState().user;
    // ADD TOKEN ON HEADERS
    if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`
    }

    if (accessToken && refreshToken) {
        const date = new Date().getTime() / 1000;
        const decodeAccessToken = jwt_decode(accessToken);
        const decodeRefreshToken = jwt_decode(refreshToken);
        const isExpired = decodeAccessToken.exp < date;
        if (isExpired) {
            if (decodeRefreshToken.exp > date) {
                try {
                    let res = await axios.post(`${import.meta.env.VITE_BASE_URL}user/refresh_v2`, {}, {
                        headers: {
                            Authorization: `Bearer ${refreshToken}`
                        }
                    })
                    if (res && res.status === 200) {
                        store.dispatch(updateAccessToken(res.data.access_token));
                        store.dispatch(updateRefreshToken(res.data.refresh_token));
                        config.headers.Authorization = `Bearer ${res.data.access_token}`;
                    }
                } catch (error) {
                    toast.error("Phiên Đăng Nhập Đã Hết Hạn. Vui Lòng Đăng Nhập Lại (Lỗi server)")
                    store.dispatch(logout());
                    return config;
                }
            } else {
                console.log("refresh expired")
                toast.error("Phiên Đăng Nhập Đã Hết Hạn. Vui Lòng Đăng Nhập Lại")
                store.dispatch(logout());
            }
        }
    }
    return config;
}, function (error) {
    return Promise.reject(error);
});

authAxios.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    return Promise.reject(error);
});

export default authAxios;