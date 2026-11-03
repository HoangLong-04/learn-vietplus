import { ParamsType } from "../types/paramsType";
import { api } from "./api";

export const jobApi = {
  getJobList: async (params: ParamsType) => {
    const response = await api.get("/jobs/get-jobs", { params });
    return response.data;
  },
  getJobCategory: async () => {
    const response = await api.get("/jobs/get-job-types");
    return response.data;
  },
  getJobForm: async () => {
    const response = await api.get("/jobs/get-work-types");
    return response.data;
  },
  getJobDetail: async (id: string) => {
    const response = await api.get(`/jobs/get-job-detail/${id}`);
    return response.data;
  },
};