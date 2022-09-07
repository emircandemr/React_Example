import { createSlice } from "@reduxjs/toolkit";

const PostSlice =createSlice({
    name : "postSlice",
    initialState : {
        posts : []
    },
    reducers : {
        setPost: (state,action) => {
            state.posts = action.payload
        }
    }
})

export const {setPost} = PostSlice.actions
export default PostSlice.reducer