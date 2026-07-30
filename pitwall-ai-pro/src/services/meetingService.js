import apiClient from "./apiClient";

export async function getCurrentMeeting() {
    try {
        const response = await apiClient.get("/meetings", {
            params: {
                year: 2026,
            },
        });

        return response.data;
    } catch (error) {
        throw new Error("Unable to fetch meetings.");
    }
}