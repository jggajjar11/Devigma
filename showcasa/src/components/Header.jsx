import React from "react";
import { Link } from "react-router-dom";
import showcasa from "../assets/img/ShowCasa.svg";
import userimg from "../assets/img/user-img.png";

const Header = ({ isAuthenticated, handleLogout }) => {
  return (
    <header className="header shadow-[0_4px_4px_rgba(222,222,222,0.25)]">
      <nav className="bg-white">
        <div className="max-w-[1420px] flex flex-wrap items-center justify-between mx-auto p-5">
          <a
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src={showcasa}
              alt="ShowCasa Logo"
              className="max-w-[150px] md:max-w-full"
              width={"244"}
              height={"38"}
            />
          </a>
          {isAuthenticated ? (
            <>
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
                  <button
                    id="dropdownDefaultButtonMobile"
                    data-dropdown-toggle="dropdownMobile"
                    type="button"
                    className="flex items-center space-x-1 hover:cursor-pointer"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <img src={userimg} width={"56px"} height={"56px"} />
                    <svg
                      class="w-2.5 h-2.5 ms-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m1 1 4 4 4-4"
                      />
                    </svg>
                  </button>
                  <div
                    id="dropdownMobile"
                    class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-auto"
                  >
                    <ul
                      class="py-2 text-sm text-gray-700"
                      aria-labelledby="dropdownDefaultButtonMobile"
                    >
                      <li>
                        <a href="#" class="block px-4 py-2 hover:bg-gray-100">
                          Dashboard
                        </a>
                      </li>
                      <li>
                        <a href="#" class="block px-4 py-2 hover:bg-gray-100">
                          Settings
                        </a>
                      </li>
                      <li>
                        <a href="#" class="block px-4 py-2 hover:bg-gray-100">
                          Earnings
                        </a>
                      </li>
                      <li>
                        <a
                          onClick={handleLogout}
                          class="block px-4 py-2 hover:bg-gray-100"
                        >
                          Sign out
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="flex w-full md:w-auto items-center space-x-0 md:space-x-10">
                <div className="search-input-wrapper hidden xl:block">
                  <input
                    type="text"
                    placeholder="Search Here"
                    className="max-w-[320px] text-[#D0CDD3] bg-[url('/search.svg')] bg-no-repeat bg-[top_50%_right_10px] placeholder-[#D0CDD3] px-[30px] pr-10 w-100 rounded-[30px] border-[#E2E0E4] focus:outline-none focus:shadow-none focus:ring-0"
                  />
                </div>
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

                    <div className="user-profile-img hidden md:block">
                      <button
                        id="dropdownDefaultButton"
                        data-dropdown-toggle="dropdown"
                        type="button"
                        className="flex items-center space-x-1 hover:cursor-pointer"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <img src={userimg} width={"56px"} height={"56px"} />
                        <svg
                          class="w-2.5 h-2.5 ms-3"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 10 6"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="m1 1 4 4 4-4"
                          />
                        </svg>
                      </button>
                      <div
                        id="dropdown"
                        class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-auto"
                      >
                        <ul
                          class="py-2 text-sm text-gray-700"
                          aria-labelledby="dropdownDefaultButton"
                        >
                          <li>
                            <a
                              href="#"
                              class="block px-4 py-2 hover:bg-gray-100"
                            >
                              Dashboard
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              class="block px-4 py-2 hover:bg-gray-100"
                            >
                              Settings
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              class="block px-4 py-2 hover:bg-gray-100"
                            >
                              Earnings
                            </a>
                          </li>
                          <li>
                            <Link
                              // to="/logout"
                              onClick={handleLogout}
                              className="block px-4 py-2 hover:bg-gray-100"
                            >
                              Sign out
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </ul>
                </div>
              </div>
            </>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
