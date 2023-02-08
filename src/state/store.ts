import { configureStore } from '@reduxjs/toolkit'
import userSlice from "./user/userSlice";
import {useDispatch} from "react-redux";

export const store = configureStore({
    reducer: {user: userSlice},
})



// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()