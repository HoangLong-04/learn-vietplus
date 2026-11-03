import { createSlice } from "@reduxjs/toolkit";
import { JobType } from "../../../types/jobType";
import { fetchJobDetail } from "./jobDetailThunk";

interface JobDetailState {
  jobDetail: JobType | null;
  loading: boolean;
  error: string | null;
}

const initialState: JobDetailState = {
  jobDetail: null,
  loading: false,
  error: null,
};

const jobDetailSlice = createSlice({
  name: "jobDetail",

  initialState,

  reducers: {
    clearJobDetail: (state) => {
      state.jobDetail = null;
      state.error = null;
    },
  },

  extraReducers: (builder) => {
    builder
      // Pending
      .addCase(fetchJobDetail.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      // Fulfilled
      .addCase(fetchJobDetail.fulfilled, (state, action) => {
        state.loading = false;
        state.jobDetail = action.payload;
      })

      // Rejected
      .addCase(fetchJobDetail.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { clearJobDetail } = jobDetailSlice.actions;

export default jobDetailSlice.reducer;
