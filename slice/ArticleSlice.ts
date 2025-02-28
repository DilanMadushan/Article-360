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

export const updateArticleState = createAsyncThunk(
    'article/update',
    async(article:ArticleModle)=>{
            
            try{
                const response = await api.put(`article`,article);
                return response.data;
            }catch(e){
                console.log(e);
            }
    }
)



const articleSlice = createSlice({
    name: "article",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(saveArticleState.fulfilled, (state, action) => {
            state.push(action.payload);
        })
        .addCase(saveArticleState.rejected, (state, action) => {
            console.log(action.payload);
        })
        .addCase(saveArticleState.pending, () => {
            console.log("pending");
        });
        builder
        .addCase(getArticleState.fulfilled, (state, action) => {
            return [...state, ...action.payload]; 
        })
        .addCase(getArticleState.rejected, (state, action) => {
            console.log(action.payload);
        })
        .addCase(getArticleState.pending, () => {
            console.log("pending");
        });
        builder
        .addCase(updateArticleState.fulfilled, (state, action) => {
           return state = state.map((article:ArticleModle) => {
                if(article.title === action.payload.title){
                    return action.payload;
                }
                return article;
            })
        })
        .addCase(updateArticleState.rejected, (state, action) => {
            console.log(action.payload);
        })
        .addCase(updateArticleState.pending, () => {
            console.log("pending");
        });
    }
});


export default articleSlice.reducer;