import axios from "axios";

const instanceAxios = axios.create({
  baseURL: "http://localhost:5000/api/v1/",
});

instanceAxios.interceptors.request.use(
  function (config) {
    let tokenUser = localStorage.getItem("user");
    if (tokenUser) {
      tokenUser = JSON.parse(tokenUser);
    }
    if (tokenUser?.state?.token) {
      config.headers.Authorization = `Bearer ${tokenUser?.state?.token.trim()}`;
    }
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axios.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

export default instanceAxios;
