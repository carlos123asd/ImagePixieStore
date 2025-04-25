import { createSlice } from "@reduxjs/toolkit";
import { getImagesThunk } from "../thunks/getImagesThunk";
import { typeListImage } from "../../type/typeListImage";


const initialState:typeListImage = {
    data: [],
    status: 'idle',
    error: null
}

const listImagesSlice = createSlice({
    name: 'imagesList',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(getImagesThunk.pending, (state) => {
            state.status = 'pending';
            
        })
        .addCase(getImagesThunk.fulfilled, (state,action) => {
            state.status = 'fulfilled';
            state.data = action.payload
        })
        .addCase(getImagesThunk.rejected, (state,action) => {
            state.status = 'rejected'
            state.error = action.error.message ?? null
        })
    }
});

export default listImagesSlice.reducer;