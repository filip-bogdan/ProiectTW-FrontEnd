import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Login from "./components/Login/Login";
import Signup from "./components/SignUp/Signup";
import HomePage from "./components/HomePage/HomePage";

import './App.css';

function App() {
  return (
      <div className="main">
        <Router>
          <Routes>
            <Route path="/homepage" element={<HomePage />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            {/*<Route path="/forgot-password" element={<ForgotPassword />} />*/}
            {/*<Route path="*" element={<ErrorPage />} />*/}
            
          </Routes>
        </Router>
      </div>
  );
}

export default App;
