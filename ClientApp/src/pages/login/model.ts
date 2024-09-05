export interface LoginRequestModel {
    loginId: string;
    password: string
}

export interface LoginResponseModel {
    token: string;
}