import Home from "./pages/Home";
import Learn from "./pages/Learn/Learn";
import { Routes, Route } from "react-router-dom";

import BG from "./assets/background.png";

function App() {
  return (
    <div
      className="bg-center bg-contain"
      style={{ backgroundImage: `url(${BG})` }}
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/learn" element={<Learn />} />
      </Routes>
    </div>
  );
}

export default App;
