import { createSlice } from "@reduxjs/toolkit";
import { JobType } from "../../../types/jobType";
import { ParamsType } from "../../../types/paramsType";
import { fetchJobList } from "./jobThunk";

interface jobState {
  jobList: JobType[];
  params: ParamsType;
  totalPages: number;
  loading: boolean;
  error: string | null;
}

const initialState: jobState = {
  jobList: [],
  params: {} as ParamsType,
  totalPages: 0,
  loading: false,
  error: null,
};

const jobSlice = createSlice({
  name: "job",

  initialState,

  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchJobList.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(fetchJobList.fulfilled, (state, action) => {
        state.loading = false;

        // Điều chỉnh theo response backend
        state.jobList = action.payload.data || [];
        state.totalPages = action.payload?.pagination?.totalPages || 0;
      })

      .addCase(fetchJobList.rejected, (state, action) => {
        state.loading = false;

        state.error = action.payload as string;
      });
  },
});

export default jobSlice.reducer;
