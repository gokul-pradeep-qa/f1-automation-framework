import useMeeting from "../../hooks/useMeeting";
import useSession from "../../hooks/useSession";
import useDrivers from "../../hooks/useDrivers";
import DriverCard from "../../components/drivers/DriverCard";

export default function Drivers() {
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

  const {
    data: drivers = [],
    isLoading: driversLoading,
    error: driversError,
  } = useDrivers(session?.session_key);

  if (meetingLoading || sessionLoading || driversLoading) {
    return <h2>Loading...</h2>;
  }

  if (meetingError) return <h2>{meetingError.message}</h2>;
  if (sessionError) return <h2>{sessionError.message}</h2>;
  if (driversError) return <h2>{driversError.message}</h2>;

  return (
    <>
      <h1 className="mb-8 text-4xl font-bold">Drivers</h1>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {drivers.map((driver) => (
          <DriverCard
            key={driver.driver_number}
            driver={driver}
          />
        ))}
      </div>
    </>
  );
}