import { createSlice } from "@reduxjs/toolkit";
import { fetchJobCategory } from "./jobCategoryThunk";

interface CategoryState {
  categoryList: any[];
  loading: boolean;
  error: string | null;
}

const initialState: CategoryState = {
  categoryList: [],
  loading: false,
  error: null,
};

const jobCategorySlice = createSlice({
  name: "jobCategory",
  
  initialState,

  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchJobCategory.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(fetchJobCategory.fulfilled, (state, action) => {
        state.loading = false;
        state.categoryList = action.payload;
      })

      .addCase(fetchJobCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default jobCategorySlice.reducer;
