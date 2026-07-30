import { useQuery } from "@tanstack/react-query";
import { getSessions } from "../services/sessionService";

export default function useSession(meetingKey) {
  return useQuery({
    queryKey: ["session", meetingKey],
    enabled: !!meetingKey,
    queryFn: async () => {
      const sessions = await getSessions(meetingKey);
      return sessions[sessions.length - 1] ?? null;
    },
  });
}