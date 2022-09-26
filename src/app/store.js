/* eslint-disable linebreak-style */
import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'
import vetsReducer from '../features/vets/vetsSlice'

export const store = configureStore({
    reducer: {
        auth: authReducer,
        vets: vetsReducer,
    },
})

