import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./styles.css";
import Explore from "./Pages/Explore.js";
import Home from "./Pages/Home.js";
import Settings from "./Pages/Settings.js";
import Statistics from "./Pages/Statistics.js";
import Sidenav from "./sidebar.js";

export default function Routess() {
  return (
    <div className="routess">
      <Sidenav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/statistics" element={<Statistics />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </main>
    </div>
  );
}
