import axios from "axios";

export const loginApi = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}`,
});

loginApi.interceptors.request.use(async (request) => {
  const token = sessionStorage.getItem('token');

  if (token) {
    const parsedToken = JSON.parse(token);
    request.headers.Authorization = `Bearer ${parsedToken.token}`;
    request.headers["Content-Type"] = `application/json`;
    request.headers.Accept = `application/json`;
  }
  
  return request;
});