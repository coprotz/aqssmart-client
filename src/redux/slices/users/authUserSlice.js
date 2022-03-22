import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'


const apiUrl = 'https://aqssmart.herokuapp.com/api/users/signup';


//login action



export const signinUser = createAsyncThunk(
    "users/signin",
    async (payload, { rejectWithValue }) => {     
        try {
            const { data } = await axios.post("https://aqssmart.herokuapp.com/api/users/signin", payload)            
            return data

        } catch (error) {
            console.log(error.response.data)
            return rejectWithValue(error.response.data);            
        }
    }
);


// register user
export const signupUser = createAsyncThunk(
    "users/signup",
    async (payload, { rejectWithValue }) => {     
        try {
            const { data }  = await axios.post(apiUrl, payload );
            return data;
        } catch (error) {
            console.log(error.response)
            return rejectWithValue(error);  
        }
    }
);




const authUserSlice = createSlice({
    name: "authUser",
    initialState: { 
    error: false,
    status: 'idle',
    signinStatus:'', 
    signupStatus:'' 
       
    },
    extraReducers: {       
        [signinUser.pending]: (state, action) => {
            return{
                ...state,
                status: "pending",  
                 
            }
        },
        [signinUser.fulfilled]: (state, action) => {
            return{
                ...state,              
                user:action.payload,
                status: "idle",
                error: false,         
                signinStatus:'success', 
                signupStatus:''         
            }
        },
        [signinUser.rejected]: (state, action) => {
            return{
                ...state,               
                status: "rejected",
                error: action.payload,            
            }
        },
        [signupUser.pending]: (state, action) => {
            return{
                ...state,
                status: "pending",  
                 
            }
        },
        [signupUser.fulfilled]: (state, action) => {
            return{
                ...state,
                user:action.payload,
                status: "idle",
                error: false,        
                signinStatus:'', 
                signupStatus:'success'         
            }
        },
        [signupUser.rejected]: (state, action) => {
            return{
                ...state,               
                status: "rejected",
                error: action.payload,            
            }
        }
    }    
});

export default authUserSlice.reducer;

export const { userId, message } = (state) => state.signin.data