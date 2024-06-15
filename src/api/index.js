import axios from "axios";

export const api = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}`,
});

api.interceptors.request.use(async (request) => {
  const token = sessionStorage.getItem('token');

  if (token) {
    const rawToken = sessionStorage.getItem('rawToken');
    request.headers.Authorization = `Bearer ${rawToken}`;
    request.headers["Content-Type"] = `application/json`;
    request.headers.Accept = `application/json`;
  }

  await new Promise(resolve => setTimeout(resolve, 500));

  return request;
});

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      window.location.href = '/login';
    } else if (error.response && error.response.status === 400) {
      console.log(error.response.data);
    } else {
      console.log('ERROR:', error);
    }

    return Promise.reject(error);
  }
);
