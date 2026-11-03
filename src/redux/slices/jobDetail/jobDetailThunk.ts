import { createAsyncThunk } from "@reduxjs/toolkit";
import { jobApi } from "../../../services/jobApi";

export const fetchJobDetail = createAsyncThunk(
  "job/fetchJobDetail",
  async (id: string, { rejectWithValue }) => {
    try {
      const response = await jobApi.getJobDetail(id);
      return response;
    } catch (error) {
      console.log(error);
      
      return rejectWithValue("Failed");
    }
  },
);
