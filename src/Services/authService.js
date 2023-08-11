import authAxios from "../Axios/authAxios";
import axios from "../Axios";

export const getLogin = (obj) => {
    return authAxios.post("/user/login", { email: obj.email, password: obj.password }, { withCredentials: true });
}

export const getLogout = () => {
    return axios.get("/user/logout", { withCredentials: true });
}

export const registerUser = (data) => {
    return axios.post("/user/register", data);
}

export const current = () => {
    return authAxios.get("/user")
}

export const likeBlog = (bid) => {
    return authAxios.put(`/blogger/like/${bid}`)
}

export const disLikeBlog = (bid) => {
    return authAxios.put(`/blogger/dislike/${bid}`)
}

export const addCartUser = (data) => {
    return authAxios.put("/user/cart", data);
}

export const removeCartUser = (pid) => {
    return authAxios.put("/user/cart/remove", { pid: pid });
}

export const updateAddress = (data) => {
    return authAxios.put("/user/address", data);
}

export const createBill = (coupon) => {
    return authAxios.post("/bill", { coupon });
}
export const getBill = (bid) => {
    return authAxios.get(`/bill/detail/${bid}`);
}

export const getBills = (uid) => {
    return authAxios.get(`/bill/${uid}`);
}

export const deleteCart = (uid) => {
    return authAxios.put(`/user/cart/delete/${uid}`);
}

export const editUser = (data) => {
    return authAxios.put(`/user`, data);
}

export const changePasswordNormal = (data) => {
    return authAxios.put("/user/alter_password", data);
}
