import axios from "axios";
import { RESTFUL_HOST_API } from "@/config";

// ----------------------------------------------------------------------

const axiosInstance = axios.create({ baseURL: RESTFUL_HOST_API });

axiosInstance.interceptors.response.use(
  (res) => res,
  (error) =>
    Promise.reject(
      (error.response && error.response.data) || "Something went wrong"
    )
);

export default axiosInstance;

// ----------------------------------------------------------------------

export const endpoints = {
  project: {
    contactMessage: "/project/:projectId/contact-message",
  },
};
