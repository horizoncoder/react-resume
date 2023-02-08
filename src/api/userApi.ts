import {createAsyncThunk} from "@reduxjs/toolkit";

export const getUser = createAsyncThunk('user/getUser',async function (username: string){
    const  response = await fetch(`${process.env.REACT_APP_API_PATH}/users/${username}`)
    return await response.json()
})
