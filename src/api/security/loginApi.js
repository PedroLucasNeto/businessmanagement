import axios from "axios";

export const loginApi = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}`,
});

loginApi.interceptors.request.use(async (request) => {

  return request;
});