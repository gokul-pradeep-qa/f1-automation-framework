import apiClient from "./apiClient";

export async function getDrivers(sessionKey) {
  const { data } = await apiClient.get("/drivers", {
    params: {
      session_key: sessionKey,
    },
  });

  return data.sort((a, b) => a.driver_number - b.driver_number);
}