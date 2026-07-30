import axios from "axios";

const apiClient = axios.create({
    baseURL: "https://api.openf1.org/v1",
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
    },
});

apiClient.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response) {
            console.error(
                `API Error ${error.response.status}:`,
                error.response.data
            );
        } else if (error.request) {
            console.error("Network Error:", error.message);
        } else {
            console.error("Request Error:", error.message);
        }

        return Promise.reject(error);
    }
);

export default apiClient;