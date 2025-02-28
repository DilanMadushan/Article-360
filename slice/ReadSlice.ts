import { createSlice } from "@reduxjs/toolkit";
import ArticleModel from "../model/ArticlModel";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState: ArticleModel[] = []


const api = axios.create({
    baseURL : "http://localhost:3000/"
})

export const findArticle = createAsyncThunk(
    'article/find',
    async(title:string)=>{

        try{
            const response = await api.get(`article/${title}`);
            return response.data;
        }catch(e){
            console.log(e);
        }
})


const readSlice = createSlice({
    name: "read",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.
         addCase(findArticle.fulfilled,(state,action)=>{
            state.push(action.payload)
        })
        .addCase(findArticle.rejected,(state,action)=>{
            console.log(action.payload);
            
        })
        .addCase(findArticle.pending,(state,action)=>{
            console.log("pending");
            
        })  
    }
});

export default readSlice.reducer;
