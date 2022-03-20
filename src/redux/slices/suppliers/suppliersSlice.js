import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  suppliers: [],
  status:"idle",
  fetchStatus: "",
  addStatus: "",
  editStatus: "",
  error: null
}

export const addSupplier = createAsyncThunk(
  "suppliers/addDealer", 
  async (supplier, { rejectWithValue}) => {  
       
      try {
        const  {data}  = await axios.post("https://aqssmart.herokuapp.com/api/suppliers/addSupplier", supplier);
        return data          
      } catch (error) {
        console.log(error)
        return rejectWithValue(error.response.data);
      }
 
  });


  export const updateSupplier = createAsyncThunk(
    "suppliers/updateSupplier", 
    async (supplier, { rejectWithValue }) => {           
        try { 
          const  {data}  = await axios.put("https://aqssmart.herokuapp.com/api/suppliers", supplier);
          return data          
        } catch (error) {
          console.log(error);
          return rejectWithValue(error.response.data);
        }
   
    });

 

  export const fetchSuppliers = createAsyncThunk(
    'suppliers/fetchSuppliers', 
    async (_, {rejectWithValue}) => {    
      try {
        const  {data} = await axios.get('https://aqssmart.herokuapp.com/api/suppliers');     
        return data
      } catch (error) {
        console.log(error)
        return rejectWithValue(error.response.data);
      } 
    
})





export const deleteSupplier = createAsyncThunk(
  "suppliers/deleteSupplier",
  async( _id, { rejectWithValue }) => {     
    try {
        const {data} = await axios.delete(`https://aqssmart.herokuapp.com/api/suppliers/${_id}`);
        return data

    } catch (error) {
      console.log(error)
      return rejectWithValue(error.response.data);
    }
    
  
});



const suppliersSlice = createSlice({
    name: 'suppliers',
    initialState,
    reducers:{}, 
    extraReducers: {
      [addSupplier.pending]: (state, action) => {
        return{
          ...state,
          status: "pending"          
        }
      },
      [addSupplier.fulfilled]: (state, action) => {
        return{
          ...state,
          suppliers: [action.payload, ...state.suppliers],
          fetchStatus: "",
          addStatus: "success",
          deleteStatus: "",      
          editStatus: "",
          status: "idle"
        }
     
      },
      [addSupplier.rejected]: (state, action) => {
        return{
          ...state,
          status: "rejected",
          error: action.payload
        }
      },
      [fetchSuppliers.pending]: (state, action) => {
        return{
          ...state,
          status: "pending"
        }
      },
      [fetchSuppliers.fulfilled]: (state, action) => {
        return{
          ...state,
          suppliers: action.payload,
          fetchStatus: "success",
          addStatus: "",
          editStatus: "",         
          deleteStatus: "",
          status: "idle",
          error: null
        }
     
      },
      [fetchSuppliers.rejected]: (state, action) => {
        return{
          ...state,
          status: "rejected",
          error: action.payload
        }
      },
      [deleteSupplier.pending]: (state, action) => {
        return{
          ...state,
          status: "pending"
        }
      },
      [deleteSupplier.fulfilled]: (state, action) => {
        const currentSuppliers = state.suppliers.filter((supplier) => 
        supplier._id !== action.payload._id)
        return{
          ...state,
          suppliers: currentSuppliers,
          fetchStatus: "",
          addStatus: "",
          deleteStatus: "success",        
          editStatus: "",
          status: "idle"
        }
     
      },
      [deleteSupplier.rejected]: (state, action) => {
        return{
          ...state,
          status: "rejected",
          error: action.payload
        }
      },

      [updateSupplier.pending]: (state, action) => {
        return{
          ...state,
          status: "pending"
        }
      },
      [updateSupplier.fulfilled]: (state, action) => {

        const updatedSuppliers = state.suppliers.map((supplier) => 
        supplier._id === action.payload._id ? action.payload : supplier)
        return{
          ...state,
          suppliers: updatedSuppliers,
          fetchStatus: "",
          addStatus: "",
          editStatus: "success",       
          deleteStatus: "", 
          status: "idle"
        }
     
      },
      [updateSupplier.rejected]: (state, action) => {
        return{
          ...state,
          status: "rejected",
          error: action.payload
        }
      },

    
        
    
    }
});


export default suppliersSlice.reducer
