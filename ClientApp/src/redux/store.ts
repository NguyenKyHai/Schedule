import {
    configureStore,
    ThunkAction,
    Action,
    MiddlewareAPI,
    isRejectedWithValue,
    Middleware
} from '@reduxjs/toolkit';

// import Swal from 'sweetalert2';
import { rootReducer } from './reducer';

import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { logout } from '../pages/auth/authSlice';


const persistConfig = {
    key: 'root',
    version: 1,
    storage,
    whitelist: ['auth']
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const rtkQueryErrorLogger: Middleware =
    (api: MiddlewareAPI) => (next) => (action) => {
        if (isRejectedWithValue(action)) {
            window.location.reload();
            api.dispatch(logout());
            // if (action.payload.status == 401) {
            //   api.dispatch(logout());
            // } else {
            //   Swal.fire({
            //     html: `<p align="left">There is an exception on server!!!</p>`,
            //     allowOutsideClick: false,
            //     showCancelButton: false,
            //     confirmButtonColor: "#0f0d6a",
            //     confirmButtonText: "OK",
            //   });
            // }
        }
        return next(action);
    };

export const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV === 'development',
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
            }
        }).concat(rtkQueryErrorLogger)
});

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;