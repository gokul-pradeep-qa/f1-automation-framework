export default function StatCard({
  title,
  value,
  icon,
  color = "#3B82F6",
}) {
  return (
    <div className="rounded-2xl bg-[#161B22] border border-gray-800 p-6 shadow-lg">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm uppercase tracking-wide text-gray-400">
            {title}
          </p>

          <h2 className="mt-3 text-3xl font-bold text-white">
            {value ?? "--"}
          </h2>
        </div>

        <div
          className="flex h-14 w-14 items-center justify-center rounded-xl text-2xl"
          style={{ backgroundColor: color }}
        >
          {icon}
        </div>
      </div>
    </div>
  );
}