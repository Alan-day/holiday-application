import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import Homepage from "./pages/LoginPage/Homepage/Homepage";
import Holiday from "./components/Holiday/Holiday";
import { useState, useEffect } from "react";

function App() {
  const [user, setUser] = useState();
  const [holidayList, setHolidayList] = useState([]);

  useEffect(() => {
    getList();
  }, []);

  const getList = async () => {
    const url = "http://localhost:8080/holidays";
    const response = await fetch(url);
    const list = await response.json();
    setHolidayList(list);
  };

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage setUser={setUser} />} />
          {user && (
            <>
              <Route
                path="/holidays"
                element={<Homepage list={holidayList} />}
              />
              <Route path="/holidays/:id" element={<Holiday />} />
            </>
          )}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
