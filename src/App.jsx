import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AddApplication from "./pages/AddApplication";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/newapplication" element={<AddApplication />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>

      <div className="bg-red-500">hello</div>
    </div>
  );
}

export default App;
