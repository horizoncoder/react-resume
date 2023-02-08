import { createSlice } from '@reduxjs/toolkit'
import {getUser} from "../../api/userApi";

interface userState {
    data: userData | null
    status:string | null
}
interface  userData {
    login: string
    name: string
}
const initialState = { status: null , data: null} as userState

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
            state.data ={login: action.payload.login, name:action.payload.name}
        })
        builder.addCase(getUser.rejected, (state, action) => {
            state.status= 'rejected'

        })
    },
})


export default userSlice.reducer