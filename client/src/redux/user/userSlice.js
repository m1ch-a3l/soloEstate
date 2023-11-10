import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentUser: null,
    error:null,
    loading: false,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{
        signInStart: (state) =>{
            state.loading = true;
        },

        signInSuccess: (state, action) =>{
            // action is we receiving data from the database
            state.currentUser = action.payload;  //<--- this represents the data from the database
            state.loading = false;
            state.error = null;
        },

        signInFailure: (state, action) =>{
            state.error = action.payload;
            state.loading = false;
        }
    }
});

export const {signInStart, signInSuccess, signInFailure} = userSlice.actions;

export default userSlice.reducer;