import { configureStore } from "@reduxjs/toolkit";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './auth/userSlice'


const persistConfig = {
    key: "ecommerce",
    storage
}

const persistedUserReducer = persistReducer(persistConfig, userReducer);

export const store = configureStore({
    reducer: {
        userInfo: persistedUserReducer
    }
})