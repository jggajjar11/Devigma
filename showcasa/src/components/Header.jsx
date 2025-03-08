import React from "react";
import { Link } from "react-router-dom";
import showcasa from "../assets/img/ShowCasa-Logo.png";
import userimg from "../assets/img/user-img.png";

const Header = ({ isAuthenticated, handleLogout }) => {
  return (
    <header className="header">
      <nav className="bg-white border-gray-200">
        {/* <nav> */}

        {/* </nav> */}
        <div className="max-w-[1420px] flex flex-wrap items-center justify-between mx-auto p-5">
          <Link
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src={showcasa} alt="ShowCasa Logo" />
          </Link>
          <div className="flex items-center space-x-3 md:space-x-0">
            <button
              data-collapse-toggle="navbar-default"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              aria-controls="navbar-default"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
            <div className="user-profile-img block md:hidden">
              <Link to="/profile" className="font-inter text-[#211F24] ">
                <img src={userimg} width={"56px"} height={"56px"} />
              </Link>
            </div>
          </div>
          <div className="flex w-full md:w-auto items-center space-x-0 md:space-x-10">
            <div
              className="hidden w-full md:block md:w-auto"
              id="navbar-default"
            >
              <ul className="font-medium flex flex-col items-center p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white">
                <li>
                  <Link to="/search" className="font-inter text-[#211F24]">
                    Explore
                  </Link>
                </li>
                <li>
                  <Link to="/" className="font-inter text-[#211F24] ">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link to="/" className="font-inter text-[#211F24] ">
                    Find Job
                  </Link>
                </li>
                <li>
                  <Link to="/" className="font-inter text-[#211F24] ">
                    Hire Talent
                  </Link>
                </li>
              </ul>
            </div>
            {isAuthenticated ? (
              <div className="user-profile-img hidden md:block">
                <Link to="/profile" className="font-inter text-[#211F24] ">
                  <img src={userimg} width={"56px"} height={"56px"} />
                </Link>
                <button onClick={handleLogout}>Logout</button>
              </div>
            ) : (
              <Link to="/login">Login</Link>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
