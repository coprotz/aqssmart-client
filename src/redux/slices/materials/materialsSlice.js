import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  materials: [],
  status:"idle",
  fetchStatus: "",
  addStatus: "",
  editStatus: "",
  error: null
}

export const addMaterial = createAsyncThunk(
  "materials/addMaterial", 
  async (material, { rejectWithValue}) => {  
       
      try {
        const  {data}  = await axios.post("https://aqssmart.herokuapp.com/api/materials/addMaterial", material);
        return data          
      } catch (error) {
        console.log(error)
        return rejectWithValue(error.response.data);
      }
 
  });


  export const updateMaterial = createAsyncThunk(
    "materials/updateMaterial", 
    async (material, { rejectWithValue }) => {           
        try { 
          const  {data}  = await axios.put("https://aqssmart.herokuapp.com/api/materials", material);
          return data          
        } catch (error) {
          console.log(error);
          return rejectWithValue(error.response.data);
        }
   
    });

 

  export const fetchMaterails = createAsyncThunk(
    'materials/fetchMaterails', 
    async (_, {rejectWithValue}) => {    
      try {
        const  {data} = await axios.get('https://aqssmart.herokuapp.com/api/materials');     
        return data
      } catch (error) {
        console.log(error)
        return rejectWithValue(error.response.data);
      } 
    
})





export const deleteMaterial = createAsyncThunk(
  "materials/deleteMaterial",
  async( _id, { rejectWithValue }) => {     
    try {
        const {data} = await axios.delete(`https://aqssmart.herokuapp.com/api/materials/${_id}`);
        return data

    } catch (error) {
      console.log(error)
      return rejectWithValue(error.response.data);
    }
    
  
});



const materialsSlice = createSlice({
    name: 'materials',
    initialState,
    reducers:{}, 
    extraReducers: {
      [addMaterial.pending]: (state, action) => {
        return{
          ...state,
          status: "pending"          
        }
      },
      [addMaterial.fulfilled]: (state, action) => {
        return{
          ...state,
          materials: [action.payload, ...state.materials],
          fetchStatus: "",
          addStatus: "success",
          deleteStatus: "",      
          editStatus: "",
          status: "idle"
        }
     
      },
      [addMaterial.rejected]: (state, action) => {
        return{
          ...state,
          status: "rejected",
          error: action.payload
        }
      },
      [fetchMaterails.pending]: (state, action) => {
        return{
          ...state,
          status: "pending"
        }
      },
      [fetchMaterails.fulfilled]: (state, action) => {
        return{
          ...state,
          materials: action.payload,
          fetchStatus: "success",
          addStatus: "",
          editStatus: "",         
          deleteStatus: "",
          status: "idle",
          error: null
        }
     
      },
      [fetchMaterails.rejected]: (state, action) => {
        return{
          ...state,
          status: "rejected",
          error: action.payload
        }
      },
      [deleteMaterial.pending]: (state, action) => {
        return{
          ...state,
          status: "pending"
        }
      },
      [deleteMaterial.fulfilled]: (state, action) => {
        const currentMaterials = state.materials.filter((material) => 
        material._id !== action.payload._id)
        return{
          ...state,
          materials: currentMaterials,
          fetchStatus: "",
          addStatus: "",
          deleteStatus: "success",        
          editStatus: "",
          status: "idle"
        }
     
      },
      [deleteMaterial.rejected]: (state, action) => {
        return{
          ...state,
          status: "rejected",
          error: action.payload
        }
      },

      [updateMaterial.pending]: (state, action) => {
        return{
          ...state,
          status: "pending"
        }
      },
      [updateMaterial.fulfilled]: (state, action) => {

        const updatedMaterials = state.materials.map((material) => 
        material._id === action.payload._id ? action.payload : material)
        return{
          ...state,
          materials: updatedMaterials,
          fetchStatus: "",
          addStatus: "",
          editStatus: "success",       
          deleteStatus: "", 
          status: "idle"
        }
     
      },
      [updateMaterial.rejected]: (state, action) => {
        return{
          ...state,
          status: "rejected",
          error: action.payload
        }
      },

    
        
    
    }
});


export default materialsSlice.reducer