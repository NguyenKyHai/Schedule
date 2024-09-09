import { combineReducers } from "@reduxjs/toolkit";
import loginReducer from "../pages/login/loginSlice";

export const rootReducer = combineReducers({
    login: loginReducer
});