import { createAsyncThunk } from "@reduxjs/toolkit";
import { jobApi } from "../../../services/jobApi";

export const fetchJobCategory = createAsyncThunk(
  "job/category/fetchJobCategory",
  async (_, { rejectWithValue }) => {
    try {
      const response = await jobApi.getJobCategory();
      return response.jobType;
    } catch (error) {
      console.log(error);
      
      return rejectWithValue("Failed to fetch job categories");
    }
  },
);
