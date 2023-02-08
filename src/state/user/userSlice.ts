import { createSlice } from '@reduxjs/toolkit'
import {getUser} from "../../api/userApi";

interface userState {
    data: userData
    status:string
}
interface  userData {
    login: string
    name: string
    publicRepos: string
    createdDate: Date
}
const initialState = { status: 'resolved' , data: {}} as userState

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(getUser.pending, (state, action) => {
            state.status= 'loading'
        })
        builder.addCase(getUser.fulfilled, (state, action) => {
            state.status= 'resolved'
            state.data ={login: action.payload.login, name:action.payload.name, publicRepos: action.payload.public_repos, createdDate:action.payload.created_at}
        })
        builder.addCase(getUser.rejected, (state, action) => {
            state.status= 'rejected'

        })
    },
})


export default userSlice.reducer
