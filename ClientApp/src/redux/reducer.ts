import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "../pages/auth/authSlice";

export const rootReducer = combineReducers({
    auth: authReducer
});