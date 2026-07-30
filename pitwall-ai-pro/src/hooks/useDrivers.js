import { useQuery } from "@tanstack/react-query";
import { getDrivers } from "../services/driverService";

export default function useDrivers(sessionKey) {
  return useQuery({
    queryKey: ["drivers", sessionKey],
    enabled: !!sessionKey,
    queryFn: () => getDrivers(sessionKey),
  });
}