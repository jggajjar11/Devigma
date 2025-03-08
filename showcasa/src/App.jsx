import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import SearchResults from "./pages/SearchResults";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ProtectedRoute from "./components/ProtectedRoute";
import Header from "./components/Header";
import Footer from "./components/Footer";
import RedirectToHome from "./components/RedirectToHome";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    () => localStorage.getItem("isAuthenticated") === "true"
  );

  const handleLogin = () => {
    setIsAuthenticated(true);
    localStorage.setItem("isAuthenticated", "true");
    //this will fix the issue of dropdown not showing after login
    window.location.reload();
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("isAuthenticated");
  };

  return (
    <Router>
      <Header isAuthenticated={isAuthenticated} handleLogout={handleLogout} />
      <Routes>
        {/* Public Routes */}
        <Route element={<RedirectToHome isAuthenticated={isAuthenticated} />}>
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          {/* <Route path="/signup" element={<Signup />} /> */}
        </Route>

        {/* Protected Routes */}
        <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
          <Route path="/" element={<Home />} />
          <Route path="/profile/:slug" element={<Profile />} />
          <Route path="/search" element={<SearchResults />} />
        </Route>

        {/* Redirect unknown paths */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
