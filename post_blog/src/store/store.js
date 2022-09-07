import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "@reduxjs/toolkit";
import { persistStore,persistReducer } from "redux-persist";
import AuthSlice from "./authSlice/AuthSlice";
import PostSlice from "./postSlice/PostSlice";
import SocketSlice from "./socketSlice/SocketSlice";


const rootReducer = combineReducers( {
    auth:AuthSlice,
    post : PostSlice,
    socketIO : SocketSlice
})

const persistConfig = {
    key:"root",
    version : 1,
    storage , 
    whiteList : ["auth"]
}

const persistedReducer = persistReducer(persistConfig,rootReducer)

const store = configureStore({
    reducer:persistedReducer, 
})

const persistor = persistStore(store)

export default store
export {persistor}