export default function InfoCard({
  title,
  value,
  subtitle,
}) {
  return (
    <div className="rounded-2xl border border-gray-800 bg-[#161B22] p-6 shadow-lg">
      <p className="text-sm uppercase tracking-wide text-gray-400">
        {title}
      </p>

      <h2 className="mt-3 text-2xl font-bold text-white">
        {value ?? "--"}
      </h2>

      {subtitle && (
        <p className="mt-2 text-sm text-gray-500">
          {subtitle}
        </p>
      )}
    </div>
  );
}