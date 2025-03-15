import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchJobs = createAsyncThunk("jobs/fetchJobs", async () => {
  const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
  return response.data;
});

export const fetchJobDetails = createAsyncThunk("jobs/fetchJobDetails", async (id) => {
  const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
  return response.data;
});

const jobsSlice = createSlice({
  name: "jobs",
  initialState: {
    jobs: [],
    selectedJob: null,
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchJobs.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchJobs.fulfilled, (state, action) => {
        state.loading = false;
        state.jobs = action.payload;
      })
      .addCase(fetchJobDetails.fulfilled, (state, action) => {
        state.selectedJob = action.payload;
      });
  },
});

export default jobsSlice.reducer;
