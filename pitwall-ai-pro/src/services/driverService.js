import apiClient from "./apiClient";

export async function getDrivers(sessionKey) {
    try {
        const response = await apiClient.get("/drivers", {
            params: {
                session_key: sessionKey,
            },
        });

        return response.data;
    } catch (error) {
        throw new Error("Unable to fetch drivers.");
    }
}