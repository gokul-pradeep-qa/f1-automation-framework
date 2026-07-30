import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard/Dashboard";
import Drivers from "./pages/Drivers/Drivers";
import DriverDetails from "./pages/DriverDetails/DriverDetails";
import Telemetry from "./pages/Telemetry/Telemetry";
import Analytics from "./pages/Analytics/Analytics";
import Automation from "./pages/Automation/Automation";
import AIEngineer from "./pages/AIEngineer/AIEngineer";
import Settings from "./pages/Settings/Settings";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/drivers" element={<Drivers />} />
        <Route path="/drivers/:id" element={<DriverDetails />} />
        <Route path="/telemetry" element={<Telemetry />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/automation" element={<Automation />} />
        <Route path="/ai" element={<AIEngineer />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </BrowserRouter>
  );
}