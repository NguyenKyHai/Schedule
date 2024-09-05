import { handleResponse, handleError } from "./apiUtils";

const baseUrl = "http://localhost:7072/api/";
const headerInit: HeadersInit = {
    'Content-Type': 'application/json'
};

export function getData<T>(url: string): Promise<T> {
    return fetch(baseUrl + url)
        .then(handleResponse<T>)
        .catch(handleError);
}

export function postData<T, U>(url: string, data: T, headers: HeadersInit = headerInit): Promise<U> {
    return fetch(baseUrl + url, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(data)
    })
        .then(handleResponse<U>)
        .catch(handleError);
}