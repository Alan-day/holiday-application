import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import Homepage from "./pages/LoginPage/Homepage/Homepage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/homepage" element={<Homepage />} />

          // make user go to homepage from login page 
        </Routes>
      </Router>
    </div>
  );
}

export default App;
