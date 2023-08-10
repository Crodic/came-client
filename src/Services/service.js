import axios from "../Axios";

export const getAllCategory = () => {
    return axios.get("/categories");
}

export const getDealProduct = () => {
    return axios.get("/product/deal");
}

export const getAllBrand = () => {
    return axios.get("/brand");
}

export const filterProduct = (data) => {
    const baseUrl = "/product";
    if (Object.keys(data).length === 0) {
        return axios.get(baseUrl);
    }
    const customData = Object.keys(data).map(key => `${key}=${data[key]}`).join("&");
    return axios.get(`${baseUrl}?${customData}`);
}

export const getAllBlog = () => {
    return axios.get("/blogger");
}

export const getProduct = (id) => {
    return axios.get(`/product/${id}`);
}

export const getDetailBlog = (id) => {
    return axios.get(`/blogger/${id}`);
}

export const getCouponByName = (name) => {
    return axios.get(`/coupon/find_coupon?name=${name}`)
}