import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  applications: [],
};

const applicationSlice = createSlice({
  name: "applications",
  initialState,
  reducers: {
    addApplication: (state, action) => {
      state.applications.push(action.payload);
    },

    deleteApplication: (state, action) => {
      state.applications = state.applications.filter(
        (application) => application.id !== action.payload
      );
    },
  },
});
export const { addApplication, deleteApplication } = applicationSlice.actions;

export default applicationSlice.reducer;
