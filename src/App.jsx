import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import Homepage from "./pages/LoginPage/Homepage/Homepage";
import Holiday from "./components/Holiday/Holiday";
import { useState } from "react";

function App() {
  const [user, setUser] = useState();

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage setUser={setUser} />} />
          {user && (
            <>
              <Route path="/holidays" element={<Homepage />} />
              <Route path="/holidays/:id" element={<Holiday />} />
            </>
          )}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
