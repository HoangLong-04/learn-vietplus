import { createAsyncThunk } from "@reduxjs/toolkit";
import { ParamsType } from "../../../types/paramsType";
import { jobApi } from "../../../services/jobApi";

export const fetchJobList = createAsyncThunk(
  "job/fetchJobList",
  async (params: ParamsType, { rejectWithValue }) => {
    try {
      const response = await jobApi.getJobList(params);
      return response;
    } catch (error) {
      console.log(error);
      
      return rejectWithValue("Failed to fetch job list");
    }
  },
);
