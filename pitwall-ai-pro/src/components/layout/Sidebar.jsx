import { NavLink } from "react-router-dom";

import {
  MdDashboard,
  MdPeople,
  MdSpeed,
  MdAnalytics,
  MdSmartToy,
  MdSettings,
  MdPrecisionManufacturing,
} from "react-icons/md";

const menuItems = [
  {
    name: "Dashboard",
    path: "/",
    icon: <MdDashboard size={22} />,
  },
  {
    name: "Drivers",
    path: "/drivers",
    icon: <MdPeople size={22} />,
  },
  {
    name: "Telemetry",
    path: "/telemetry",
    icon: <MdSpeed size={22} />,
  },
  {
    name: "Analytics",
    path: "/analytics",
    icon: <MdAnalytics size={22} />,
  },
  {
    name: "Automation",
    path: "/automation",
    icon: <MdPrecisionManufacturing size={22} />,
  },
  {
    name: "AI Engineer",
    path: "/ai",
    icon: <MdSmartToy size={22} />,
  },
  {
    name: "Settings",
    path: "/settings",
    icon: <MdSettings size={22} />,
  },
];

function Sidebar() {
  return (
    <aside className="w-72 bg-[#111827] border-r border-gray-800 flex flex-col">

      <div className="h-16 flex items-center px-6 border-b border-gray-800">
        <h1 className="text-red-500 text-2xl font-bold">
          🏎 PitWall AI
        </h1>
      </div>

      <nav className="flex-1 mt-4">

        {menuItems.map((item) => (

          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-4 mx-3 my-1 px-4 py-3 rounded-xl transition-all ${
                isActive
                  ? "bg-red-600 text-white"
                  : "text-gray-300 hover:bg-gray-800"
              }`
            }
          >
            {item.icon}
            <span>{item.name}</span>

          </NavLink>

        ))}

      </nav>

    </aside>
  );
}

export default Sidebar;