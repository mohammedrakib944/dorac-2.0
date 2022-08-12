import Home from "./pages/Home";
import Learn from "./pages/Learn/Learn";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/learn" element={<Learn />} />
      </Routes>
    </div>
  );
}

export default App;
