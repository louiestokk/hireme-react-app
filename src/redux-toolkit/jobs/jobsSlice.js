import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  jobs: [],
};

const jobsSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {
    addJobs: (state, { payload }) => {
      state.jobs = payload;
    },
  },
});

export const { addJobs } = jobsSlice.actions;
export const getJobs = (state) => state.jobs.jobs;
export default jobsSlice.reducer;
