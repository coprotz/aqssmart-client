import { configureStore } from "@reduxjs/toolkit";


// import usersReducer, { verifyUser } from "./slices/users/usersSlice";
import dealersReducer from "./slices/dealers/dealersSlice";
import applicantsReducer from "./slices/applicants/applicantsSlice";
import authUserReducer from "./slices/users/authUserSlice";
import verifyUserReducer from "./slices/users/verifyUserSlice";
import certsReducer from "./slices/certificates/certsSlice";
import skillsReducer from "./slices/skills/skillsSlice";
import userApplicantReducer from "./slices/applicants/userApplicantSlice";
import experiencesReducer from "./slices/experiences/experiencesSlices";
import equipsReducer from "./slices/equips/equipsSlice";
import suppliersReducer from "./slices/suppliers/suppliersSlice";
import materialsReducer from "./slices/materials/materialsSlice";
import laborsReducer from "./slices/labors/laborsSlice";
import usersReducer from "./slices/users/usersSlice";




const store = configureStore({
    reducer: {
        // users: usersReducer,
        dealers: dealersReducer,
        applicants: applicantsReducer,
        authUser: authUserReducer,
        verifyUser: verifyUserReducer,
        certs: certsReducer,
        skills: skillsReducer,
        applicant: userApplicantReducer,
        experiences: experiencesReducer,
        equips: equipsReducer,
        suppliers: suppliersReducer,
        materials: materialsReducer,
        labors: laborsReducer,
        users: usersReducer

    },
});


export default store
