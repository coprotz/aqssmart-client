import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  equips: [],
  status:"idle",
  fetchStatus: "",
  addStatus: "",
  editStatus: "",
  error: null
}

export const addEquip = createAsyncThunk(
  "equips/addEquip", 
  async (equip, { rejectWithValue}) => {  
       
      try {
        const  {data}  = await axios.post("https://aqssmart.herokuapp.com/api/equips/addEquip", equip);
        return data          
      } catch (error) {
        console.log(error)
        return rejectWithValue(error.response.data);
      }
 
  });


  export const updateEquip = createAsyncThunk(
    "equips/updateEquip", 
    async (equip, { rejectWithValue }) => {           
        try { 
          const  {data}  = await axios.put("https://aqssmart.herokuapp.com/api/equips", equip);
          return data          
        } catch (error) {
          console.log(error);
          return rejectWithValue(error.response.data);
        }
   
    });

 

  export const fetchEquips = createAsyncThunk(
    'equips/fetchEquips', 
    async (_, {rejectWithValue}) => {    
      try {
        const  {data} = await axios.get('https://aqssmart.herokuapp.com/api/equips');     
        return data
      } catch (error) {
        console.log(error)
        return rejectWithValue(error.response.data);
      } 
    
})





export const deleteEquip = createAsyncThunk(
  "equips/deleteEquip",
  async( _id, { rejectWithValue }) => {     
    try {
        const {data} = await axios.delete(`https://aqssmart.herokuapp.com/api/equips/${_id}`);
        return data

    } catch (error) {
      console.log(error)
      return rejectWithValue(error.response.data);
    }
    
  
});



const equipsSlice = createSlice({
    name: 'equips',
    initialState,
    reducers:{}, 
    extraReducers: {
      [addEquip.pending]: (state, action) => {
        return{
          ...state,
          status: "pending"          
        }
      },
      [addEquip.fulfilled]: (state, action) => {
        return{
          ...state,
          equips: [action.payload, ...state.equips],
          fetchStatus: "",
          addStatus: "success",
          deleteStatus: "",      
          editStatus: "",
          status: "idle"
        }
     
      },
      [addEquip.rejected]: (state, action) => {
        return{
          ...state,
          status: "rejected",
          error: action.payload
        }
      },
      [fetchEquips.pending]: (state, action) => {
        return{
          ...state,
          status: "pending"
        }
      },
      [fetchEquips.fulfilled]: (state, action) => {
        return{
          ...state,
          equips: action.payload,
          fetchStatus: "success",
          addStatus: "",
          editStatus: "",         
          deleteStatus: "",
          status: "idle",
          error: null
        }
     
      },
      [fetchEquips.rejected]: (state, action) => {
        return{
          ...state,
          status: "rejected",
          error: action.payload
        }
      },
      [deleteEquip.pending]: (state, action) => {
        return{
          ...state,
          status: "pending"
        }
      },
      [deleteEquip.fulfilled]: (state, action) => {
        const currentEquips = state.equips.filter((equip) => 
        equip._id !== action.payload._id)
        return{
          ...state,
          equips: currentEquips,
          fetchStatus: "",
          addStatus: "",
          deleteStatus: "success",        
          editStatus: "",
          status: "idle"
        }
     
      },
      [deleteEquip.rejected]: (state, action) => {
        return{
          ...state,
          status: "rejected",
          error: action.payload
        }
      },

      [updateEquip.pending]: (state, action) => {
        return{
          ...state,
          status: "pending"
        }
      },
      [updateEquip.fulfilled]: (state, action) => {

        const updatedEquips = state.equips.map((equip) => 
        equip._id === action.payload._id ? action.payload : equip)
        return{
          ...state,
          equips: updatedEquips,
          fetchStatus: "",
          addStatus: "",
          editStatus: "success",       
          deleteStatus: "", 
          status: "idle"
        }
     
      },
      [updateEquip.rejected]: (state, action) => {
        return{
          ...state,
          status: "rejected",
          error: action.payload
        }
      },

    
        
    
    }
});


export default equipsSlice.reducer
