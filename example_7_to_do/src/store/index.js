import todoReducer from "./reducers/todoReducer";

import { combineReducers } from "redux";
import { configureStore } from '@reduxjs/toolkit'

const reducers = combineReducers( { 
    todos:todoReducer
})

export const store = configureStore({reducer : reducers})
