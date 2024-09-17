import {
    configureStore,
    ThunkAction,
    Action,
    MiddlewareAPI,
    isRejectedWithValue,
    Middleware
} from '@reduxjs/toolkit';


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
import { commonApi } from '../api/commonApi';
import { logout } from '../pages/auth/authSlice';
import { toast } from 'react-toastify';
const persistConfig = {
    key: 'root',
    version: 1,
    storage,
    whitelist: ['auth']
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const rtkQueryErrorLogger: Middleware = (api: MiddlewareAPI) => (next) => (action: any) => {
    if (isRejectedWithValue(action)) {
        if (action.payload.status === 401) {
            api.dispatch(logout());
        } if (action.payload.status === 403) {
            toast.warning('Forbidden access');
        }
        else {
            toast.error('An error occurred!');
        }
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
        })
            .concat(commonApi.middleware)
            .concat(rtkQueryErrorLogger)
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
