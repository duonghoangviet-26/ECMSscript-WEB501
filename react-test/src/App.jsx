import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes >
          <Route path="/" element={<Homepage />} />
          <Route path="/About" element={<About />} />
          {/* <Route path="/Destinations" element={<Destinations />} /> */}
          {/* <Route path="/Bookings" element={<Bookings />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

