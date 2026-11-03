import { createSlice } from "@reduxjs/toolkit";
import { fetchJobForm } from "./jobFormListThunk";

interface FormState {
  formList: any[];
  loading: boolean;
  error: string | null;
}

const initialState: FormState = {
  formList: [],
  loading: false,
  error: null,
};

const jobFormSlice = createSlice({
  name: "jobCategory",
  
  initialState,

  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchJobForm.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(fetchJobForm.fulfilled, (state, action) => {
        state.loading = false;
        state.formList = action.payload;
      })

      .addCase(fetchJobForm.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default jobFormSlice.reducer;
