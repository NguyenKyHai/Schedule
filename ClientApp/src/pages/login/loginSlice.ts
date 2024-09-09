import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../redux/store";

export interface LoginState {
    token: string | null;
}

const initialState: LoginState = {
    token: null,
}

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        login: (state, action: PayloadAction<LoginState>) => {
            state.token = action.payload.token;
            localStorage.setItem("jwt",action.payload.token as string);
        }
    }
});

export const { login } = loginSlice.actions;
export const selectLoginState = (state: RootState) => state.login;
export default loginSlice.reducer;