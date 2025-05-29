import { createSlice } from "@reduxjs/toolkit";
import { getImagesThunk } from "../thunks/getImagesThunk";
import { typeListImage } from "../../type/typeListImage";
import { getImagesForTag } from "../thunks/getImagesForTag";
import { getImagesForUser } from "../thunks/getImagesForUser";


const initialState:typeListImage = {
    data: [],
    status: 'idle',
    error: null,
    tag: "",
    user: false,
    total: 0,
    per_page: 0,
    current_page: 1,
    isPending: true,
    links: {
        next: "",
        prev: "",
        first: "",
        last: ""
    }
}

const listImagesSlice = createSlice({
    name: 'imagesList',
    initialState,
    reducers: {
        setTag: (state,action) => {
            state.tag = action.payload
        },
        setUser: (state,action) => {
            state.user = action.payload
        },
        setPendingState: (state, action) => {
            state.isPending = action.payload;
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
            state.data = action.payload?.images ?? []
            state.total = action.payload?.pagination.total ?? 0
            state.per_page = action.payload?.pagination.perPage ?? 0
            state.current_page = action.payload?.pagination.currentPage ?? 1
            state.links = {
                next: action.payload?.pagination.links?.next ?? "",
                prev: action.payload?.pagination.links?.prev ?? "",
                first: action.payload?.pagination.links?.first ?? "",
                last: action.payload?.pagination.links?.last ?? ""
            }
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
            state.data = action.payload?.images ?? []
            state.total = action.payload?.pagination.total ?? 0
            state.per_page = action.payload?.pagination.perPage ?? 0
            state.current_page = action.payload?.pagination.currentPage ?? 1
            state.links = {
                next: action.payload?.pagination.links?.next ?? "",
                prev: action.payload?.pagination.links?.prev ?? "",
                first: action.payload?.pagination.links?.first ?? "",
                last: action.payload?.pagination.links?.last ?? ""
            }
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
            state.user = true
            state.data = action.payload?.images
            state.total = action.payload?.pagination.total ?? 0
            state.per_page = action.payload?.pagination.perPage ?? 0
            state.current_page = action.payload?.pagination.currentPage ?? 1
            state.links = {
                next: action.payload?.pagination.links?.next ?? "",
                prev: action.payload?.pagination.links?.prev ?? "",
                first: action.payload?.pagination.links?.first ?? "",
                last: action.payload?.pagination.links?.last ?? ""
            }
        })
        .addCase(getImagesForUser.rejected, (state,action) => {
            state.status = 'rejected'
            state.error = action.error?.message ?? null
        })
    }
});
export const { setTag,setUser,setPendingState} = listImagesSlice.actions;
export default listImagesSlice.reducer;