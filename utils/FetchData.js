import axios from "axios";

const FetchData = axios.create({
  //   baseURL: "http://localhost:8080",
  baseURL: "https://df0d-140-213-170-107.ap.ngrok.io/api/",
});

// FetchData.interceptors.request.use((config) => {
//   config.headers["Authorization"] =
//     "Bearer " + window.localStorage.getItem("token");
//   return config;
// });

FetchData.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default FetchData;
