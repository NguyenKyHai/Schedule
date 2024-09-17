import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "../pages/auth/authSlice";
import { commonApi } from "../api/commonApi";

export const rootReducer = combineReducers({
    auth: authReducer,
    [commonApi.reducerPath]: commonApi.reducer
});