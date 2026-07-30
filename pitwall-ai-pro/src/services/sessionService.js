import apiClient from "./apiClient";

export async function getSessions(meetingKey) {
  const { data } = await apiClient.get("/sessions", {
    params: {
      meeting_key: meetingKey,
    },
  });

  return data;
}