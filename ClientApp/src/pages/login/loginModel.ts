export interface LoginRequestModel {
    loginId: string;
    password: string
}

export interface LoginResponseModel {
    userName : string,
    token: string;
}