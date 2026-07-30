import {
  Flag,
  Timer,
  MapPinned,
} from "lucide-react";

import StatCard from "../../components/cards/StatCard";
import InfoCard from "../../components/cards/InfoCard";
import useMeeting from "../../hooks/useMeeting";
import useSession from "../../hooks/useSession";

export default function Dashboard() {
  const {
    data: meeting,
    isLoading: meetingLoading,
    error: meetingError,
  } = useMeeting();

  const {
    data: session,
    isLoading: sessionLoading,
    error: sessionError,
  } = useSession(meeting?.meeting_key);

  if (meetingLoading || sessionLoading) {
    return (
      <div className="flex h-full items-center justify-center">
        <h2 className="text-xl">Loading...</h2>
      </div>
    );
  }

  if (meetingError) {
    return <h2>{meetingError.message}</h2>;
  }

  if (sessionError) {
    return <h2>{sessionError.message}</h2>;
  }

  return (
    <>
      <h1 className="mb-8 text-4xl font-bold">
        Mission Control
      </h1>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

        <StatCard
          title="Grand Prix"
          value={meeting?.meeting_name}
          icon={<Flag size={28} />}
          color="#DC2626"
        />

        <StatCard
          title="Session"
          value={session?.session_name}
          icon={<Timer size={28} />}
          color="#2563EB"
        />

        <StatCard
          title="Circuit"
          value={meeting?.location}
          icon={<MapPinned size={28} />}
          color="#16A34A"
        />

        <InfoCard
          title="Start Time"
          value={session?.date_start}
        />

        <InfoCard
          title="End Time"
          value={session?.date_end}
        />

        <InfoCard
          title="Official Name"
          value={meeting?.official_name}
        />

      </div>
    </>
  );
}