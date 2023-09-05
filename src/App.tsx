import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SearchPage from "./pages/SearchPage";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SearchPage />} />
      </Routes>
    </Router>
  );
}

export default App;
