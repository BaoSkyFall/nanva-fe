import { API_URL, STRAPI_API_TOKEN } from "./urls";

export const fetchDataFromApi = async (endpoint) => {
    try {

        const options = {
            method: "GET",
            headers: {
                // Authorization: "Bearer " + STRAPI_API_TOKEN,
            },
        };

        const res = await fetch(`${API_URL}${endpoint}`, options);
        const data = await res.json();

        return data;
    }
    catch (error) {
        console.log('error fetchDataFromApi:', error)
    }
};
export const fetchAPI = async (endpoint, params) => {
    try {

        const options = {
            method: "GET",
            headers: {
                // Authorization: "Bearer " + STRAPI_API_TOKEN,
            },
        };
        const url = new URL(`${API_URL}${endpoint}`);
        console.log('params:', params)
        Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));
        console.log('url:', url)

        const res = await fetch(url, options);
        const data = await res.json();

        return data;
    }
    catch (error) {
        console.log('error fetchDataFromApi:', error)
    }
};
export const makePaymentRequest = async (endpoint, payload) => {
    const res = await fetch(`${API_URL}${endpoint}`, {
        method: "POST",
        headers: {
            // Authorization: "Bearer " + STRAPI_API_TOKEN,
            "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
    });
    const data = await res.json();
    return data;
};
