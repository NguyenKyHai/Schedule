export interface BaseResponse<T> {
    hasError: boolean,
    data: T,
    error: Error
}

export interface Error {
    errorType: string,
    errors: ErrorDetail[]
}

export interface ErrorDetail {
    name: string,
    messages: string
}