import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addUsersAPI, loginUserAPI, updateUserAPI } from "./API/API";

const initialState = {
    loading: false,
    data: [],
    finduser: null,
    error: null,
};

export const addUsersData = createAsyncThunk("Signup", async (data) => {
    try {
        const response = await addUsersAPI(data);
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
});

export const loginUserData = createAsyncThunk("login", async () => {
    try {
        const response = await loginUserAPI()
        return response.data
    } catch (error) {
        console.error(error);
    }
});

export const updateUserData = createAsyncThunk("UpdateData", async ({ id, updatedData }) => {
    try {
        const response = await updateUserAPI(id, updatedData);
        console.log("======id=====");
        console.log(id);
        console.log(response.data);  
        return response.data;
    } catch (error) {
        console.error(error);
    }
});

const movixerSlice = createSlice({
    name: 'movie',
    initialState,
    reducers:    {
        userFind:(state,action)=>{
            const email = action.payload.email
            const password = action.payload.password
      
            const find = state.data.find((e)=>{
              if(e.email == email && e.password==password){
                return e
              }
            })
      
            state.finduser = find
          },
          clearError: state => {
            state.error = null;
          },
    },
    extraReducers: (builder) => {
        builder
            .addCase(addUsersData.pending, (state) => {
                state.loading = true;
            })
            .addCase(addUsersData.fulfilled, (state) => {
                state.loading = false;
            })
            .addCase(addUsersData.rejected, (state) => {
                state.loading = false;
            })
            .addCase(loginUserData.pending, (state) => {
                state.loading = true;
              })
            .addCase(loginUserData.fulfilled, (state, action) => {
                state.loading = false;
                state.data=action.payload
            })
            .addCase(loginUserData.rejected, (state) => {
                state.loading = false;
            })
            .addCase(updateUserData.pending, (state) => {
                state.loading = true;
            })
            .addCase(updateUserData.fulfilled, (state, action) => {
                state.loading = false;
                const updatedIndex = state.data.findIndex(post => post.id === action.payload.id);
                if (updatedIndex !== -1) {
                    state.data[updatedIndex] = action.payload;
                }
            })
            .addCase(updateUserData.rejected, (state) => {
                state.loading = false;
            });
    }
});

export const { userFind, clearError } = movixerSlice.actions;
export default movixerSlice.reducer;

