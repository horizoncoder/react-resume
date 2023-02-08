import {createSlice} from "@reduxjs/toolkit";
import {getRepositories} from "../../api/repositoryApi";

interface repositoryState {
    data: repositoryData[]
    status: string
}
interface repositoryData {
    name: string
    description: string
    url: string
    createdAt: Date
}
const initialState:repositoryState = {status: 'resolved', data:[]}
const repositoriesSlice =createSlice({
    name: 'repositories',
    initialState,
    reducers:{
        resetRepositoryState(state){
            state.data = []
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(getRepositories.pending, state => {
            state.status = 'loading'
        })
        builder.addCase(getRepositories.fulfilled, (state, action)=>{
            state.status = 'resolved'
            let repoArray
            if(action.payload.length> 10){
               repoArray = action.payload.slice(0, 10)
            }else{
                repoArray = action.payload
            }
            state.data = repoArray.map((data: { [key:string]: string })=>{
                   return {name: data.name, description: data.description, url: data.html_url, createdAt: data.created_at}
            })
        })
    }
})
export const {resetRepositoryState} = repositoriesSlice.actions
export default repositoriesSlice.reducer
