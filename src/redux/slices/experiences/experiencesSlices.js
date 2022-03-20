import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    experiences: [],
    status: "idle",
    fetchStatus: "",
    addStatus: "",
    editStatus: "", 
    error: null
}


export const addExperience = createAsyncThunk(
    "experiences/addExperience",
    async (experience, { rejectWithValue }) => {

        try {
            const {data} = await axios.post("https://aqssmart.herokuapp.com/api/experiences/addExperience", experience);
            return data
        } catch (error) {
            console.log(error)
            return rejectWithValue(error.response.data);
        }

    });



export const updateExperience = createAsyncThunk(
    "experiences/updateExperience",
    async (experience, { rejectWithValue }) => {
        try {
            const { data } = await axios.put('https://aqssmart.herokuapp.com/api/experiences', experience);
            return data

        } catch (error) {
            console.log(error);
            return rejectWithValue(error.response.data);
        }

    });



export const fetchExperiences = createAsyncThunk(
    'experiences/fetchExperiences',
    async (_, { rejectWithValue }) => {
        try {
            const {data} = await axios.get('https://aqssmart.herokuapp.com/api/experiences');
            return data
        } catch (error) {
            console.log(error)
            return rejectWithValue(error.response.data);
        }

    })





export const deleteExperience = createAsyncThunk(
    "experiences/deleteExperience",
    async (_id, { rejectWithValue }) => {
        try {
            const {data} = await axios.delete(`https://aqssmart.herokuapp.com/api/experiences/${_id}`);
            return data

        } catch (error) {
            console.log(error)
            return rejectWithValue(error.response.data);
        }


    });


const experiencesSlice = createSlice({
    name: 'experiences',
    initialState,
    reducers: {},
    extraReducers: {

        [addExperience.pending]: (state, action) => {
            return {
                ...state,
                status: "pending"
            }
        },
        [addExperience.fulfilled]: (state, action) => {
            return {
                ...state,
                experiences: [action.payload,...state.experiences ],
                fetchStatus: "",
                editStatus: "",
                deleteStatus: "",
                status: "idle",
                addStatus: 'success',
                error: null
            }

        },
        [addExperience.rejected]: (state, action) => {
            return {
                ...state,
                status: "rejected",
                error: action.payload
            }
        },

        [fetchExperiences.pending]: (state, action) => {
            return {
                ...state,
                status: "pending"
            }
        },
        [fetchExperiences.fulfilled]: (state, action) => {
            return {
                ...state,
                experiences: action.payload,
                fetchStatus: "success",
                editStatus: "",
                deleteStatus: "",
                status: "idle",
                addStatus: '',
                error: null

            }

        },
        [fetchExperiences.rejected]: (state, action) => {
            return {
                ...state,
                status: "rejected",
                error: action.payload
            }
        },
        [deleteExperience.pending]: (state, action) => {
            return {
                ...state,
                status: "pending"
            }
        },
        [deleteExperience.fulfilled]: (state, action) => {
            const currentExperiences = state.experiences.filter((experience) =>
                experience._id !== action.payload._id)
            return {
                ...state,
                experiences: currentExperiences,
                fetchStatus: "",
                addStatus: "",
                deleteStatus: "success",
                editStatus: "",
                addStatus: '',
                status: "idle"
            }

        },
        [deleteExperience.rejected]: (state, action) => {
            return {
                ...state,
                status: "rejected",
                error: action.payload
            }
        },

        [updateExperience.pending]: (state, action) => {
            return {
                ...state,
                status: "pending"
            }
        },
        [updateExperience.fulfilled]: (state, action) => {

            const updatedExperiences = state.experiences.map((experience) =>
                experience._id === action.payload._id ? action.payload : experience)
            return {
                ...state,
                experiences: updatedExperiences,
                fetchStatus: "",
                addStatus: "",
                editStatus: "success",      
                deleteStatus: "",
                status: "idle"
            }

        },
        [updateExperience.rejected]: (state, action) => {
            return {
                ...state,
                status: "rejected",
                error: action.payload
            }
        },

     

    }
});


export default experiencesSlice.reducer
