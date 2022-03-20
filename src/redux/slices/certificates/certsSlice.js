import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  certs: [],
  status: "idle",
  fetchStatus: "",
  addStatus: "",
  editStatus: "",
  error: null
}

export const addCert = createAsyncThunk(
  "certs/addCert",
  async (cert, { rejectWithValue }) => {

    try {
      const { data } = await axios.post("https://aqssmart.herokuapp.com/certs/addCert", cert);
      return data
    } catch (error) {
      console.log(error)
      return rejectWithValue(error.response.data);
    }

  });


export const updateCert = createAsyncThunk(
  "certs/updateCert",
  async (certificate, { rejectWithValue }) => {
    try {
      const { data } = await axios.put('https://aqssmart.herokuapp.com/api/certs', certificate);
      return data
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response.data);
    }

  });



export const fetchCerts = createAsyncThunk(
  'certs/fetchCerts',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('https://aqssmart.herokuapp.com/api/certs');
      return data
    } catch (error) {
      console.log(error)
      return rejectWithValue(error.response.data);
    }

  })





export const deleteCert = createAsyncThunk(
  "certs/deleteCert",
  async (_id, { rejectWithValue }) => {
    try {
      const {data} = await axios.delete(`https://aqssmart.herokuapp.com/api/certs/${_id}`);
      return data

    } catch (error) {
      console.log(error)
      return rejectWithValue(error.response.data);
    }


  });



const certsSlice = createSlice({
  name: 'certs',
  initialState,
  reducers: {},
  extraReducers: {

    [addCert.pending]: (state, action) => {
      return {
        ...state,
        status: "pending"
      }
    },
    [addCert.fulfilled]: (state, action) => {
      // const newCerts = state.certs.map((cert) =>
      //   cert === action.payload)
      return {
        ...state,
        // certs: action.payload,
        certs: [action.payload,...state.certs ],
        fetchStatus: "",
        editStatus: "",
        deleteStatus: "",
        status: "idle",
        addStatus: 'success',
        error: null
      }

    },
    [addCert.rejected]: (state, action) => {
      return {
        ...state,
        status: "rejected",
        error: action.payload
      }
    },

    [fetchCerts.pending]: (state, action) => {
      return {
        ...state,
        status: "pending"
      }
    },
    [fetchCerts.fulfilled]: (state, action) => {
      return {
        ...state,
        certs: action.payload,
        fetchStatus: "success",
        editStatus: "",
        deleteStatus: "",
        status: "idle",
        error: null
      }

    },
    [fetchCerts.rejected]: (state, action) => {
      return {
        ...state,
        status: "rejected",
        error: action.payload
      }
    },
    [deleteCert.pending]: (state, action) => {
      return {
        ...state,
        status: "pending"
      }
    },
    [deleteCert.fulfilled]: (state, action) => {
      const currentCerts = state.certs.filter((cert) =>
        cert._id !== action.payload._id)
      return {
        ...state,
        certs: currentCerts,
        fetchStatus: "",
        addStatus: "",
        deleteStatus: "success",
        editStatus: "",
        status: "idle"
      }

    },
    [deleteCert.rejected]: (state, action) => {
      return {
        ...state,
        status: "rejected",
        error: action.payload
      }
    },

    [updateCert.pending]: (state, action) => {
      return {
        ...state,
        status: "pending"
      }
    },
    [updateCert.fulfilled]: (state, action) => {

      const updatedCerts = state.certs.map((cert) =>
        cert._id === action.payload._id ? action.payload : cert)
      return {
        ...state,
        certs: updatedCerts,
        fetchStatus: "",
        addStatus: "",
        editStatus: "success",
        deleteStatus: "",
        status: "idle"
      }

    },
    [updateCert.rejected]: (state, action) => {
      return {
        ...state,
        status: "rejected",
        error: action.payload
      }
    },




  }
});


export default certsSlice.reducer
