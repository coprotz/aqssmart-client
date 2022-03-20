import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'



  export const updateApplicant = createAsyncThunk(
    "applicant/updateApplicant", 
    async (applicant, { rejectWithValue }) => {           
        try {
          const { data } = await axios.put('https://aqssmart.herokuapp.com/api/applicants', applicant);         
          return data   

        } catch (error) {
          console.log(error);
          return rejectWithValue(error.response.data);
        }
   
    });

 
export const deleteApplicant = createAsyncThunk(
  "applicant/deleteApplicant",
  async( _id, { rejectWithValue }) => {     
    try {
        const response = await axios.delete(`https://aqssmart.herokuapp.com/api/applicants/${_id}`);
        return response.data

    } catch (error) {
      console.log(error)
      return rejectWithValue(error.response.data);
    }
    
  
});



const userApplicantSlice = createSlice({
    name: 'applicants',
    initialState: {
        applicant:{},
        editStatus: '',
        status: 'idle',
        error: false,
        deleteApplicant:'',
    },
    reducers:{}, 
    extraReducers: {
      
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

        return{
          ...state,
          applicant: action.payload, 
          editStatus: "success", 
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

      // [updateApplicant.pending]: (state, action) => {
      //   return{
      //     ...state,
      //     status: "pending"
      //   }
      // },
      // [updateApplicant.fulfilled]: (state, action) => {

      //   const updatedApplicants = state.applicants.map((applicant) => 
      //   applicant._id === action.payload._id ? action.payload : applicant)
      //   return{
      //     ...state,
      //     applicants: updatedApplicants,
      //     fetchStatus: "",
      //     addStatus: "",
      //     editStatus: "success",
      //     likeStatus: "",
      //     deleteStatus: "", 
      //     status: "idle"
      //   }
     
      // },
      // [updateApplicant.rejected]: (state, action) => {
      //   return{
      //     ...state,
      //     status: "rejected",
      //     error: action.payload
      //   }
      // },

    
        
    
    }
});


export default userApplicantSlice.reducer
