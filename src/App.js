import { Routes, Route, Navigate } from "react-router-dom";
import React, { useEffect } from "react";
import Login from "./components/Login/Login";
import Signup from "./components/SignUp/Signup";
import HomePage from "./components/HomePage/HomePage";
import Profile from "./components/Profile/Profile";
import AddJob from "./components/AddJob/AddJob";
import "./App.css";

const ProtectedRoute = ({ logged, children }) => {
  if (logged === false) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

const LoggedRoute = ({ logged, children }) => {
  if (logged === true) {
    return <Navigate to="/homepage" replace />;
  }
  return children;
};

function App() {
  const saved = localStorage.getItem("logged");
  const initialValue = JSON.parse(saved);
  return (
    <div className="main">
      <Routes>
        <Route path="/homepage" element={<ProtectedRoute logged={initialValue}><HomePage /></ProtectedRoute>} />
        <Route path="/" element={<ProtectedRoute logged={initialValue}><HomePage /></ProtectedRoute>} />
        <Route path="/login" element={<LoggedRoute logged={initialValue}><Login /></LoggedRoute>}  />
        <Route path="/signup" element={<LoggedRoute logged={initialValue}><Signup /></LoggedRoute>}  />
        <Route path="/profile" element={<ProtectedRoute logged={initialValue}><Profile /></ProtectedRoute>} />
        <Route path="/add-new-job" element={<ProtectedRoute logged={initialValue}><AddJob /></ProtectedRoute>} />
      </Routes>
    </div>
  );
}

export default App;
