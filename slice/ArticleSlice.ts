import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ArticleModle from "../model/ArticlModel";
import axios from "axios";

const initialState: ArticleModle[] = []

const api = axios.create({
    baseURL : "http://localhost:3000/"
})

export const saveArticleState = createAsyncThunk(
    'article/save',
    async(article:ArticleModle)=>{

        try{
            const response = await api.post('article',article);
            return response.data;
        }catch(e){
            console.log(e);
        }
})

export const getArticleState = createAsyncThunk(
    'article/get',
    async()=>{

        try{
            const response = await api.get('article');
            return response.data;
        }catch(e){
            console.log(e);
        }
})



const articleSlice = createSlice({
    name: "article",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.
         addCase(saveArticleState.fulfilled,(state,action)=>{
            state.push(action.payload)
        })
        .addCase(saveArticleState.rejected,(state,action)=>{
            console.log(action.payload);
            
        })
        .addCase(saveArticleState.pending,(state,action)=>{
            console.log("pending");
            
        })  
        builder.addCase(getArticleState.fulfilled,(state,action)=>{
           action.payload.map((article:ArticleModle)=>{
               state.push(article);
           })
        })
        .addCase(getArticleState.rejected,(state,action)=>{
            console.log(action.payload);
            
        }).addCase(getArticleState.pending,(state,action)=>{
            console.log("pending");
            
        })

    }
});

export default articleSlice.reducer;