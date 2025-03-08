import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <h1>Talent Showcase</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/search">Search Profiles</Link>
      </nav>
    </header>
  );
};

export default Header;
