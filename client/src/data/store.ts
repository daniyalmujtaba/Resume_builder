
import { authReducer } from "./reducers/authReducer";

import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { useDispatch } from "react-redux";
import storage from "redux-persist/lib/storage";

import { persistReducer, FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER, } from 'redux-persist'

const reducers = combineReducers({
    authReducer : authReducer
 });
 
 const persistConfig = {
     key: 'root',
     storage
 };
 
 const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
})  
export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()

export default store
