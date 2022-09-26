/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import vetsService from './vetsService'

const initialState = {
    vets: [],
    isError: false,
    isSucces: false,
    isLoading: false,
    message: ''
}

//Create new vet
export const createVet = createAsyncThunk('vets/create', async (vetsData, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token
        return await vetsService.createVet(vetsData, token)
    } catch (error) {
        const message =
        (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

export const vetsSlice = createSlice({
    name: 'vets',
    initialState,
    reducers: {
        reset: (state) => initialState,
    },
    extraReducers: (builder) => {
        builder
            .addCase(createVet.pending, (state) => {
                state.isLoading = true
            })
            .addCase(createVet.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.vets.push(action.payload)
            })
            .addCase(createVet.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
    }
})

export const {reset} = vetsSlice.actions
export default vetsSlice.reducer

