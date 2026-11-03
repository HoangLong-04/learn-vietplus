import { createAsyncThunk } from "@reduxjs/toolkit";
import { jobApi } from "../../../services/jobApi";

export const fetchJobForm = createAsyncThunk(
  "job/form/fetchJobForm",
  async (_, { rejectWithValue }) => {
    try {
      const response = await jobApi.getJobForm();
      return response.workType;
    } catch (error) {
      console.log(error);
      
      return rejectWithValue("Failed to fetch job categories");
    }
  },
);
