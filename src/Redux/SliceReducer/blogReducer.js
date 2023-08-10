import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const BlogSlice = createSlice({
    name: "blog",
    initialState: { blogs: [], isLoading: false, isError: false, msg: null },
    reducers: {
        getBlogs: (state, action) => {
            state.blogs = action.payload;
            state.isError = false;
        },
        ErrorAPI: (state, action) => {
            state.isError = true;
            state.msg = action.payload;
        }
    }
})

export default BlogSlice.reducer;

export const { getBlogs, ErrorAPI } = BlogSlice.actions;