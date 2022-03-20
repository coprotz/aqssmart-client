import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  applicants: [],
  status:"idle",
  fetchStatus: "",
  addStatus: "",
  editStatus: "",
  error: null
}


  export const updateApplicant = createAsyncThunk(
    "applicants/updateApplicant", 
    async (applicant, { rejectWithValue }) => {           
        try {
          const { data } = await axios.put('https://aqssmart.herokuapp.com//api/applicants', applicant);         
          return data   

        } catch (error) {
          console.log(error);
          return rejectWithValue(error.response.data);
        }
   
    });

 

  export const fetchApplicants = createAsyncThunk(
    'applicants/fetchApplicants', 
    async (_, {rejectWithValue}) => {    
      try {
        const  response = await axios.get('https://aqssmart.herokuapp.com/api/applicants');     
        return response.data
      } catch (error) {
        console.log(error)
        return rejectWithValue(error.response.data);
      } 
    
})





export const deleteApplicant = createAsyncThunk(
  "applicants/deleteApplicant",
  async( _id, { rejectWithValue }) => {     
    try {
        const response = await axios.delete(`https://aqssmart.herokuapp.com/api/applicants/${_id}`);
        return response.data

    } catch (error) {
      console.log(error)
      return rejectWithValue(error.response.data);
    }
    
  
});



const applicantsSlice = createSlice({
    name: 'applicants',
    initialState,
    reducers:{}, 
    extraReducers: {
      
      [fetchApplicants.pending]: (state, action) => {
        return{
          ...state,
          status: "pending"
        }
      },
      [fetchApplicants.fulfilled]: (state, action) => {
        return{
          ...state,
          applicants: action.payload,
          fetchStatus: "success",         
          editStatus: "",
          likeStatus: "",
          deleteStatus: "",
          status: "idle",
          error: null
        }
     
      },
      [fetchApplicants.rejected]: (state, action) => {
        return{
          ...state,
          status: "rejected",
          error: action.payload
        }
      },
      [deleteApplicant.pending]: (state, action) => {
        return{
          ...state,
          status: "pending"
        }
      },
      [deleteApplicant.fulfilled]: (state, action) => {
        const currentApplicants = state.applicants.filter((applicant) => 
        applicant._id !== action.payload._id)
        return{
          ...state,
          applicants: currentApplicants,
          fetchStatus: "",
          addStatus: "",
          deleteStatus: "success",
          likeStatus: "",
          editStatus: "",
          status: "idle"
        }
     
      },
      [deleteApplicant.rejected]: (state, action) => {
        return{
          ...state,
          status: "rejected",
          error: action.payload
        }
      },

      [updateApplicant.pending]: (state, action) => {
        return{
          ...state,
          status: "pending"
        }
      },
      [updateApplicant.fulfilled]: (state, action) => {

        const updatedApplicants = state.applicants.map((applicant) => 
        applicant._id === action.payload._id ? action.payload : applicant)
        return{
          ...state,
          applicant: action.payload,
          fetchStatus: "",
          addStatus: "",
          editStatus: "success",
          likeStatus: "",
          deleteStatus: "", 
          status: "idle"
        }
     
      },
      [updateApplicant.rejected]: (state, action) => {
        return{
          ...state,
          status: "rejected",
          error: action.payload
        }
      },

    
        
    
    }
});


export default applicantsSlice.reducer
