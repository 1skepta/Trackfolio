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
    editApplication: (state, action) => {
      const { id, updatedData } = action.payload;
      const applicationIndex = state.applications.findIndex(
        (application) => application.id === id
      );

      if (applicationIndex !== 1) {
        state.applications[applicationIndex] = {
          ...state.applications[applicationIndex],
          ...updatedData,
        };
      }
    },
  },
});
export const { addApplication, deleteApplication, editApplication } =
  applicationSlice.actions;

export default applicationSlice.reducer;
