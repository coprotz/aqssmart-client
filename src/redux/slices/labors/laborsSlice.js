import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  labors: [],
  status:"idle",
  fetchStatus: "",
  addStatus: "",
  editStatus: "",
  error: null
}

export const addLabor = createAsyncThunk(
  "labors/addLabor", 
  async (labor, { rejectWithValue}) => {  
       
      try {
        const  {data}  = await axios.post("https://aqssmart.herokuapp.com/api/labors/addLabor", labor);
        return data          
      } catch (error) {
        console.log(error)
        return rejectWithValue(error.response.data);
      }
 
  });


  export const updateLabor = createAsyncThunk(
    "labors/updateLabor", 
    async (labor, { rejectWithValue }) => {           
        try { 
          const  {data}  = await axios.put("hhttps://aqssmart.herokuapp.com/api/labors", labor);
          return data          
        } catch (error) {
          console.log(error);
          return rejectWithValue(error.response.data);
        }
   
    });

 

  export const fetchLabors = createAsyncThunk(
    'labors/fetchLabors', 
    async (_, {rejectWithValue}) => {    
      try {
        const  {data} = await axios.get('https://aqssmart.herokuapp.com/api/labors');     
        return data
      } catch (error) {
        console.log(error)
        return rejectWithValue(error.response.data);
      } 
    
})





export const deleteLabor = createAsyncThunk(
  "labors/deleteLabor",
  async( _id, { rejectWithValue }) => {     
    try {
        const {data} = await axios.delete(`https://aqssmart.herokuapp.com/api/labors/${_id}`);
        return data

    } catch (error) {
      console.log(error)
      return rejectWithValue(error.response.data);
    }
    
  
});



const laborsSlice = createSlice({
    name: 'labors',
    initialState,
    reducers:{}, 
    extraReducers: {
      [addLabor.pending]: (state, action) => {
        return{
          ...state,
          status: "pending"          
        }
      },
      [addLabor.fulfilled]: (state, action) => {
        return{
          ...state,
          labors: [action.payload, ...state.labors],
          fetchStatus: "",
          addStatus: "success",
          deleteStatus: "",      
          editStatus: "",
          status: "idle"
        }
     
      },
      [addLabor.rejected]: (state, action) => {
        return{
          ...state,
          status: "rejected",
          error: action.payload
        }
      },
      [fetchLabors.pending]: (state, action) => {
        return{
          ...state,
          status: "pending"
        }
      },
      [fetchLabors.fulfilled]: (state, action) => {
        return{
          ...state,
          labors: action.payload,
          fetchStatus: "success",
          addStatus: "",
          editStatus: "",         
          deleteStatus: "",
          status: "idle",
          error: null
        }
     
      },
      [fetchLabors.rejected]: (state, action) => {
        return{
          ...state,
          status: "rejected",
          error: action.payload
        }
      },
      [deleteLabor.pending]: (state, action) => {
        return{
          ...state,
          status: "pending"
        }
      },
      [deleteLabor.fulfilled]: (state, action) => {
        const currentLabors = state.labors.filter((labor) => 
        labor._id !== action.payload._id)
        return{
          ...state,
          labors: currentLabors,
          fetchStatus: "",
          addStatus: "",
          deleteStatus: "success",        
          editStatus: "",
          status: "idle"
        }
     
      },
      [deleteLabor.rejected]: (state, action) => {
        return{
          ...state,
          status: "rejected",
          error: action.payload
        }
      },

      [updateLabor.pending]: (state, action) => {
        return{
          ...state,
          status: "pending"
        }
      },
      [updateLabor.fulfilled]: (state, action) => {

        const updatedLabors = state.labors.map((labor) => 
        labor._id === action.payload._id ? action.payload : labor)
        return{
          ...state,
          labors: updatedLabors,
          fetchStatus: "",
          addStatus: "",
          editStatus: "success",       
          deleteStatus: "", 
          status: "idle"
        }
     
      },
      [updateLabor.rejected]: (state, action) => {
        return{
          ...state,
          status: "rejected",
          error: action.payload
        }
      },

    
        
    
    }
});


export default laborsSlice.reducer
