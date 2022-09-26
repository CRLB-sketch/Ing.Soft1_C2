/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

const initialState = {
    vets: [],
    isError: false,
    isSucces: false,
    isLoading: false,
    message: ''
}

export const vetsSlice = createSlice({
    name: 'vets',
    initialState,
    reducers: {
        reset: (state) => initialState,
    },
})

export const {reset} = vetsSlice.actions
export default vetsSlice.reducer

