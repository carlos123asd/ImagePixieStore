import { createSlice } from "@reduxjs/toolkit";
import { typeListImage } from "../../type/typeListImage";
import { getImagesForTag } from "../thunks/getImagesForTag";

const initialState:typeListImage = {
    data: [],
    status: 'idle',
    error: null
}

const listImagesByTagSlice = createSlice({
    name: 'imagesListByTag',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(getImagesForTag.pending,(state) => {
            state.status = 'pending'
        })
        .addCase(getImagesForTag.fulfilled,(state,action) => {
            state.status = 'fulfilled'
            state.data = action.payload
        })
        .addCase(getImagesForTag.rejected,(state,action) => {
            state.status = 'rejected'
            state.error = action.error?.message ?? null
        })
    }
})
export default listImagesByTagSlice.reducer;