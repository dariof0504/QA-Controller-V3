import axios from "axios";
import { getPk } from "../functions/generalFn";

export const api = axios.create({
    baseURL: 'http://localhost:4000/',
    headers: {
        'Content-Type': 'application/json',
    }
})

export const generalApi = async (info, element, method) => {

    const { path } = info;

    const pk = getPk(element)

    const config = {
        method,
        data: element,
        url: method === "POST" ? `${path}/` : `${path}/${pk}/`,
    };

    const result = await api.request(config)

    return result

}

export const listElements = async (path) => {

    const config = {
        method: 'GET',
        url: `all/${path}/`
    }

    const result = await api.request(config)

    return result

}

export const listElementByField = async (path, field, payload) => {
    const config = {
        method: 'GET',
        url: `byField/${path}/${field}/${payload}/`
    }

    const result = await api.request(config)

    return result

}

export const elementsByFK = async (path, fk_path, fk) => {
    const config = {
        method: 'GET',
        url: `byFK/${path}/${fk_path}/${fk}/`
    }

    const result = await api.request(config)

    return result

}

export const getElement = async (path, pk) => {
    const config = {
        method: 'GET',
        url: `/byID/${path}/${pk}`
    }

    const result = await api.request(config)

    return result
}