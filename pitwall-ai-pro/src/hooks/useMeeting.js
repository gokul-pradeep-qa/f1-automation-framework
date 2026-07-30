import { useQuery } from "@tanstack/react-query";
import { getLatestMeeting } from "../services/meetingService";

export default function useMeeting() {
  return useQuery({
    queryKey: ["meeting"],
    queryFn: async () => {
      const meetings = await getLatestMeeting();
      return meetings[0] ?? null;
    },
  });
}