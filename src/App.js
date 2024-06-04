import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import FavCourses from "./pages/FavCourses";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/saved" element={<FavCourses />} />
      </Routes>
    </Router>
  );
};

export default App;
