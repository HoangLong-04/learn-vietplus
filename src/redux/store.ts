import { configureStore } from "@reduxjs/toolkit";
import jobReducer from "./slices/jobList/jobSlice";
import jobCategoryReducer from "./slices/jobCategoryList/jobCategorySlice";
import jobFormReducer from "./slices/jobFormList/jobFormListSlice";
import jobDetailReducer from "./slices/jobDetail/jobDetailSlice";

export const store = configureStore({
  reducer: {
    job: jobReducer,
    jobCategory: jobCategoryReducer,
    jobForm: jobFormReducer,
    jobDetail: jobDetailReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
