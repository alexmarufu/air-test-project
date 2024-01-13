import { configureStore, combineReducers, Action, ThunkAction } from '@reduxjs/toolkit'
import { airtimeOrderReducer } from "./slices/airtimeOrderSlice"
import { authReducer } from './slices/authSlice';

export const store = configureStore({
    reducer: combineReducers({ airtimeOrderReducer, authReducer })
})
  
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;