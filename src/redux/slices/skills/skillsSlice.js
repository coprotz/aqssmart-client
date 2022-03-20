import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  skills: [],
  status:"idle",
  fetchStatus: "",
  addStatus: "",
  editStatus: "",
  error: null
}

export const addSkill = createAsyncThunk(
  "skills/addSkill", 
  async (skill, { rejectWithValue}) => {  
       
      try {
        const  response  = await axios.post("https://aqssmart.herokuapp.com/api/skills/addSkill", skill);
        return response.data          
      } catch (error) {
        console.log(error)
        return rejectWithValue(error.response.data);
      }
 
  });


  export const updateSkill = createAsyncThunk(
    "skills/updateSkill", 
    async (cert, { rejectWithValue }) => {           
        try {
          const { _id, body } = cert
          const  response  = await axios.put(`https://aqssmart.herokuapp.com/api/certs//${_id}`, {body});
          return response.data          
        } catch (error) {
          console.log(error);
          return rejectWithValue(error.response.data);
        }
   
    });

 

  export const fetchSkills = createAsyncThunk(
    'skills/fetchSkills', 
    async (_, {rejectWithValue}) => {    
      try {
        const  response = await axios.get('https://aqssmart.herokuapp.com/api/skills');     
        return response.data
      } catch (error) {
        console.log(error)
        return rejectWithValue(error.response.data);
      } 
    
})





export const deleteSkill = createAsyncThunk(
  "skills/deleteSkill",
  async( _id, { rejectWithValue }) => {     
    try {
        const response = await axios.delete(`https://aqssmart.herokuapp.com/api/skills/${_id}`);
        return response.data

    } catch (error) {
      console.log(error)
      return rejectWithValue(error.response.data);
    }
    
  
});



const skillsSlice = createSlice({
    name: 'skills',
    initialState,
    reducers:{}, 
    extraReducers: {
      
      [fetchSkills.pending]: (state, action) => {
        return{
          ...state,
          status: "pending"
        }
      },
      [fetchSkills.fulfilled]: (state, action) => {
        return{
          ...state,
          skills: action.payload,
          fetchStatus: "success",         
          editStatus: "",       
          deleteStatus: "",
          status: "idle",
          error: null
        }
     
      },
      [fetchSkills.rejected]: (state, action) => {
        return{
          ...state,
          status: "rejected",
          error: action.payload
        }
      },
      [deleteSkill.pending]: (state, action) => {
        return{
          ...state,
          status: "pending"
        }
      },
      [deleteSkill.fulfilled]: (state, action) => {
        const currentSkills = state.skills.filter((skill) => 
        skill._id !== action.payload._id)
        return{
          ...state,
          skills: currentSkills,
          fetchStatus: "",
          addStatus: "",
          deleteStatus: "success",   
          editStatus: "",
          status: "idle"
        }
     
      },
      [deleteSkill.rejected]: (state, action) => {
        return{
          ...state,
          status: "rejected",
          error: action.payload
        }
      },

      [updateSkill.pending]: (state, action) => {
        return{
          ...state,
          status: "pending"
        }
      },
      [updateSkill.fulfilled]: (state, action) => {

        const updatedSkills = state.skills.map((skill) => 
        skill._id === action.payload._id ? action.payload : skill)
        return{
          ...state,
          skills: updatedSkills,
          fetchStatus: "",
          addStatus: "",
          editStatus: "success",
          deleteStatus: "", 
          status: "idle"
        }
     
      },
      [updateSkill.rejected]: (state, action) => {
        return{
          ...state,
          status: "rejected",
          error: action.payload
        }
      },

    
        
    
    }
});


export default skillsSlice.reducer
