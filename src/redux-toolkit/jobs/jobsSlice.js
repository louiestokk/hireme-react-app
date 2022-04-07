import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  jobs: [],
  employees: "10",
  loaction: "Stockholm",
  employment: "Fast",
  remote: true,
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
export const businessdata = (state) => state.jobs;
export default jobsSlice.reducer;
