import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'

//edit user

export const editUser = createAsyncThunk(
    "users/editUser",
    async (user, { rejectWithValue }) => {
        try {     
            const { data } = await axios.put("https://aqssmart.herokuapp.com/api/users/editUser", user);
          
            localStorage.setItem("userinfo", JSON.stringify(data));
            return data

        } catch (error) {
            console.log(error);
            return rejectWithValue(error.response.data);
        }
    }
);

//logout action

export const logout = createAsyncThunk(
    "users/logout",
    async (payload, { rejectWithValue, getState, dispatch }) => {
       
        try {
          
            localStorage.removeItem("userinfo");      
            
            
        } catch (error) {
            if (!error?.response){
                throw error
            }
            return rejectWithValue(error?.response?.data);
        }
    }
);


//varify otp action

export const verifyUser = createAsyncThunk(
    "users/verifyUser",
    async (payload, { rejectWithValue, getState, dispatch }) => {   
        const config = {        
            headers: {'Content-Type': 'application/json'},                
        };

        try {
            const { data }  = await axios.post("https://aqssmart.herokuapp.com/api/users/verifyUser", payload, config);            

            localStorage.setItem("userinfo", JSON.stringify(data))       
            
            return data;
            
        } catch (error) {
            console.log(error.response.data)
            return rejectWithValue(error.response.data);  
        }
    }
);

const userLoginFromStorage = localStorage.getItem("userinfo")
? JSON.parse(localStorage.getItem("userinfo"))
: undefined


const verifyUserSlice = createSlice({
    name: "verifyUser",
    initialState: {
        user: userLoginFromStorage, 
        editUserStatus:'',
        signinStatus:'',
        status: 'idle',
        error: false,
        deleteUserStatus: '',  
    },
    

    reducers:{}, 

    extraReducers: {
        [verifyUser.pending]: (state, action) => {
            return{
                ...state,
                status: "pending",  
                 
            }
        },
        [verifyUser.fulfilled]: (state, action) => {
            return{
                ...state,
                user:action.payload,
                status: "idle",
                error: false, 
                editUserStatus: "",
                signinStatus:'success'
               
            }
        },
        [verifyUser.rejected]: (state, action) => {
            return{
                ...state,               
                status: "rejected",
                error: action.payload,            }
        },
        [editUser.pending]: (state, action) => {
            return{
                ...state,
                status: "pending",  
                 
            }
        },
        [editUser.fulfilled]: (state, action) => {
            return{
                ...state,
                user:action.payload,
                status: "idle",
                error: false, 
                editUserStatus: 'success',
                signinStatus:''
                         
            }
        },
        [editUser.rejected]: (state, action) => {
            return{
                ...state,               
                status: "rejected",
                error: action.payload,            
            }
        },
           
      
    }


    
});


export default verifyUserSlice.reducer;