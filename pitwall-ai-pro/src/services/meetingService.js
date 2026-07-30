import apiClient from "./apiClient";

export async function getLatestMeeting() {
  const { data } = await apiClient.get("/meetings", {
    params: {
      year: 2026,
    },
  });

  return data;
}