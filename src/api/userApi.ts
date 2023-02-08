import {createAsyncThunk} from "@reduxjs/toolkit";

export const getUser = createAsyncThunk('user/getUser',async function (username: string){
    const  response = await fetch(`https://api.github.com/users/${username}`)
    return await response.json()
})