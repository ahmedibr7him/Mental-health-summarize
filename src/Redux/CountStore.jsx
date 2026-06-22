import { configureStore } from '@reduxjs/toolkit';
import authReducer from './Auth/AuthSLice'; 

export const store = configureStore({
  reducer: {
    auth: authReducer,}
    
});