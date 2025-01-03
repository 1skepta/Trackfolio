import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AddApplication from "./pages/AddApplication";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<AddApplication />} />
          <Route path="/newapplication" element={<AddApplication />} />
          <Route path="/home" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
