import { Link } from "react-router-dom";

export default function DriverCard({ driver }) {
  return (
    <Link to={`/drivers/${driver.driver_number}`}>
      <div
        className="rounded-2xl border border-gray-800 bg-[#161B22] p-5 transition hover:border-gray-600 hover:shadow-xl"
      >
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold">
              {driver.full_name}
            </h2>

            <p
              className="mt-2 font-medium"
              style={{ color: driver.team_colour ? `#${driver.team_colour}` : "#ffffff" }}
            >
              {driver.team_name}
            </p>

            <p className="mt-3 text-gray-400">
              #{driver.driver_number}
            </p>

            <p className="text-sm text-gray-500">
              {driver.name_acronym}
            </p>
          </div>

          <div className="text-5xl font-bold text-gray-700">
            {driver.driver_number}
          </div>
        </div>
      </div>
    </Link>
  );
}