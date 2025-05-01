import { createSlice } from "@reduxjs/toolkit";
import { getImagesThunk } from "../thunks/getImagesThunk";
import { typeListImage } from "../../type/typeListImage";
import { getImagesForTag } from "../thunks/getImagesForTag";
import { getImagesForUser } from "../thunks/getImagesForUser";


const initialState:typeListImage = {
    data: [],
    status: 'idle',
    error: null,
    total: 0,
    total_pages: 0,
    tag: ""
}

const listImagesSlice = createSlice({
    name: 'imagesList',
    initialState,
    reducers: {
        setTag: (state,action) => {
            state.tag = action.payload
        }
    },
    extraReducers: (builder) => {
        //Thunk images standar
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
            state.error = action.error?.message ?? null
        })
        //Thunk by tag
        .addCase(getImagesForTag.pending,(state) => {
            state.status = 'pending'
        })
        .addCase(getImagesForTag.fulfilled,(state,action) => {
            state.status = 'fulfilled'
            state.total = action.payload?.total ?? 0
            state.total_pages = action.payload?.total_pages ?? 0
            state.data = action.payload?.results ?? []
        })
        .addCase(getImagesForTag.rejected,(state,action) => {
            state.status = 'rejected'
            state.error = action.error?.message ?? null
        })
        //Thunk by user
        .addCase(getImagesForUser.pending, (state) => {
            state.status = 'pending'
        })
        .addCase(getImagesForUser.fulfilled, (state,action) => {
            state.status = 'fulfilled'
            state.data = action.payload
        })
        .addCase(getImagesForUser.rejected, (state,action) => {
            state.status = 'rejected'
            state.error = action.error?.message ?? null
        })
    }
});
export const { setTag } = listImagesSlice.actions;
export default listImagesSlice.reducer;