import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../redux/store";

export interface LoginState {
    userName: string | null
    token: string | null;
}

const initialState: LoginState = {
    userName: null,
    token: null,
}

export const loginSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action: PayloadAction<LoginState>) => {
            state.token = action.payload.token;
            state.userName = action.payload.userName;
            localStorage.setItem("jwt", action.payload.token as string);
        },
        logout: () => {
            localStorage.removeItem("jwt");
            return initialState;
        }
    }
});

export const { login, logout } = loginSlice.actions;
export const selectLoginState = (state: RootState) => state.auth;
export default loginSlice.reducer;