import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://api.openf1.org/v1",
  timeout: 10000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("OpenF1 API Error:", error);

    return Promise.reject(error);
  }
);

export default apiClient;