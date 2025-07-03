import axios from "axios";
import { LocalStorageKey, Result } from "../models/constant.model";

axios.interceptors.request.use(function (config: any) {
    return config;
}, function (error) {
    return Promise.reject(error);
});

axios.interceptors.response.use((res: any) => {
    if (res.data.result === Result.UNAUTHORIZED) {
        localStorage.removeItem(LocalStorageKey.USER);
        window.location.pathname = "/login";
    }
    return res;
}, error => {
    throw error;
});