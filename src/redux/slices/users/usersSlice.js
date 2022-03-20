import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'


//login action


const initialState = {
    users: [],
    error: false,
    status: "idle",
    fetchStatus: 'success',
    deleteStatus: '',
    editUser: ''
}

export const fetchUsers = createAsyncThunk(
    "users/fetchUsers",
    async (_, { rejectWithValue, getState, dispatch }) => {

        try {
            const { data } = await axios.get("https://aqssmart.herokuapp.com/api/users")
            return data

        } catch (error) {
            console.log(error)
            return rejectWithValue(error.response.data);
        }
    }
);


//edit user

export const updateUser = createAsyncThunk(
    "users/updateUser",
    async (user, { rejectWithValue }) => {
        try {
            const { data } = await axios.put("https://aqssmart.herokuapp.com/api/users", user);

            // localStorage.setItem("userinfo", JSON.stringify(data));
            return data

        } catch (error) {
            console.log(error);
            return rejectWithValue(error.response.data);
        }
    }
);


// delete user

export const deleteUser = createAsyncThunk(
    "users/deleteUser",
    async (_id, { rejectWithValue }) => {
        try {
            const {data} = await axios.delete(`https://aqssmart.herokuapp.com/api/users/${_id}`);
            return data

        } catch (error) {
            console.log(error)
            return rejectWithValue(error.response.data);
        }


    });


//varify otp action


const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {},
    extraReducers: {
    
        [updateUser.pending]: (state, action) => {
            return {
                ...state,
                status: "pending",

            }
        },
        [updateUser.fulfilled]: (state, action) => {
            const updatedUsers = state.users.map((user => 
                user._id === action.payload._id ? action.payload : user))
            return {
                ...state,
                users: updatedUsers,
                status: "idle",
                error: false,
                editUserStatus: "success",
                deleteStatus: '',
            }
        },
        [updateUser.rejected]: (state, action) => {
            return {
                ...state,
                status: "rejected",
                error: action.payload,
            }
        },
    
      
        [fetchUsers.pending]: (state, action) => {
            return {
                ...state,
                status: "pending",

            }
        },
        [fetchUsers.fulfilled]: (state, action) => {
            return {
                ...state,
                users: action.payload,
                status: "idle",
                error: false,                
                fetchStatus: 'success',
                deleteStatus: '',
                editUser: ''
            }
        },
        [fetchUsers.rejected]: (state, action) => {
            return {
                ...state,
                status: "rejected",
                error: action.payload,
            }
        },

        [deleteUser.pending]: (state, action) => {
            return {
                ...state,
                status: "pending",

            }
        },
        [deleteUser.fulfilled]: (state, action) => {
            const currentUsers = state.users.filter((user) => 
                user._id !== action.payload._id)
            return {
                ...state,
                users: currentUsers,
                status: "idle",
                error: false,                
                fetchStatus: '',
                deleteStatus: 'success',
                editUser: ''
            }
        },
        [deleteUser.rejected]: (state, action) => {
            return {
                ...state,
                status: "rejected",
                error: action.payload,
            }
        }

        
    }



});


export default usersSlice.reducer;



