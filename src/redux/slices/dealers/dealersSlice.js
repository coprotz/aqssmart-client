import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  dealers: [],
  status:"idle",
  fetchStatus: "",
  addStatus: "",
  editStatus: "",
  error: null
}

export const addDealer = createAsyncThunk(
  "dealers/addDealer", 
  async (dealer, { rejectWithValue}) => {  
       
      try {
        const  {data}  = await axios.post("https://aqssmart.herokuapp.com/api/dealers/addDealer", dealer);
        return data          
      } catch (error) {
        console.log(error)
        return rejectWithValue(error.response.data);
      }
 
  });


  export const updateDealer = createAsyncThunk(
    "dealers/updateDealer", 
    async (dealer, { rejectWithValue }) => {           
        try { 
          const  {data}  = await axios.put("https://aqssmart.herokuapp.com/api/dealers", dealer);
          return data          
        } catch (error) {
          console.log(error);
          return rejectWithValue(error.response.data);
        }
   
    });

 

  export const fetchDealers = createAsyncThunk(
    'dealers/fetchDealers', 
    async (_, {rejectWithValue}) => {    
      try {
        const  {data} = await axios.get('https://aqssmart.herokuapp.com/api/dealers');     
        return data
      } catch (error) {
        console.log(error)
        return rejectWithValue(error.response.data);
      } 
    
})





export const deleteDealer = createAsyncThunk(
  "dealers/deleteDealer",
  async( _id, { rejectWithValue }) => {     
    try {
        const {data} = await axios.delete(`https://aqssmart.herokuapp.com/api/dealers/${_id}`);
        return data

    } catch (error) {
      console.log(error)
      return rejectWithValue(error.response.data);
    }
    
  
});



const dealersSlice = createSlice({
    name: 'dealers',
    initialState,
    reducers:{}, 
    extraReducers: {
      [addDealer.pending]: (state, action) => {
        return{
          ...state,
          status: "pending"          
        }
      },
      [addDealer.fulfilled]: (state, action) => {
        return{
          ...state,
          dealers: [action.payload, ...state.dealers],
          fetchStatus: "",
          addStatus: "success",
          deleteStatus: "",      
          editStatus: "",
          status: "idle"
        }
     
      },
      [addDealer.rejected]: (state, action) => {
        return{
          ...state,
          status: "rejected",
          error: action.payload
        }
      },
      [fetchDealers.pending]: (state, action) => {
        return{
          ...state,
          status: "pending"
        }
      },
      [fetchDealers.fulfilled]: (state, action) => {
        return{
          ...state,
          dealers: action.payload,
          fetchStatus: "success",
          addStatus: "",
          editStatus: "",         
          deleteStatus: "",
          status: "idle",
          error: null
        }
     
      },
      [fetchDealers.rejected]: (state, action) => {
        return{
          ...state,
          status: "rejected",
          error: action.payload
        }
      },
      [deleteDealer.pending]: (state, action) => {
        return{
          ...state,
          status: "pending"
        }
      },
      [deleteDealer.fulfilled]: (state, action) => {
        const currentDealers = state.dealers.filter((dealer) => 
        dealer._id !== action.payload._id)
        return{
          ...state,
          dealers: currentDealers,
          fetchStatus: "",
          addStatus: "",
          deleteStatus: "success",        
          editStatus: "",
          status: "idle"
        }
     
      },
      [deleteDealer.rejected]: (state, action) => {
        return{
          ...state,
          status: "rejected",
          error: action.payload
        }
      },

      [updateDealer.pending]: (state, action) => {
        return{
          ...state,
          status: "pending"
        }
      },
      [updateDealer.fulfilled]: (state, action) => {

        const updatedDealers = state.dealers.map((dealer) => 
        dealer._id === action.payload._id ? action.payload : dealer)
        return{
          ...state,
          dealers: updatedDealers,
          fetchStatus: "",
          addStatus: "",
          editStatus: "success",       
          deleteStatus: "", 
          status: "idle"
        }
     
      },
      [updateDealer.rejected]: (state, action) => {
        return{
          ...state,
          status: "rejected",
          error: action.payload
        }
      },

    
        
    
    }
});


export default dealersSlice.reducer
