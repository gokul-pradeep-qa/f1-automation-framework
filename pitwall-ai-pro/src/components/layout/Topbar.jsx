function Topbar() {
  return (
    <header className="h-16 bg-[#161B22] border-b border-gray-800 flex items-center justify-between px-8">

      <div>
        <h2 className="text-white text-2xl font-bold">
          Formula 1 Engineering Dashboard
        </h2>

        <p className="text-sm text-gray-400">
          Hungarian GP 2026
        </p>
      </div>

      <div className="flex items-center gap-3">

        <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />

        <span className="text-green-400 font-semibold">
          LIVE
        </span>

      </div>

    </header>
  );
}

export default Topbar;