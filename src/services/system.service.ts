import axios from "axios";
import './interceptor';
import { Requesturl, API_URL } from '../models/constant.model';

export const getSymbols = (type: number) => {
    return axios({
        method: "GET",
        url: API_URL + Requesturl.GET_SYMBOLS,
        params: {
            symbolType: type
        }
    })
}

export const getCurrency = () => {
    return axios({
        method: "GET",
        url: API_URL + Requesturl.GET_CCY
    })
}