import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomeGallery, HomePage } from "./pages/index";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/gallery" element={<HomeGallery />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
