import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"; 
import { getMoviesAPI } from "./API/API";

const initialState = {
    loading: false,
    movieData : null
}

export const getMovieData = createAsyncThunk("getMovieData", async() => {
    try {
        const response = await getMoviesAPI()
        console.log(response.data);
        if (response.status === 200) {
            return response.data
        } else {
            return null
        }
    } catch (error) {
        console.error(error);
    }
})

const movixerSlice = createSlice({
    name: 'movie',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(getMovieData.pending, (state) => {
            state.loading = true
        }).addCase(getMovieData.fulfilled, (state, action) => {
            state.loading = false
            state.movieData = action.payload
        }).addCase(getMovieData.rejected, (state) => {
            state.loading = false
        })
    }
})

export default movixerSlice.reducer
