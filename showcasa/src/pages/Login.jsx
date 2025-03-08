import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import loginImg from "../assets/img/login-img.png";
import googleIcon from "../assets/img/google-icon.svg";
import linkedinIcon from "../assets/img/linkedin-icon.svg";

const Login = ({ onLogin }) => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false); // Add loading state
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    onLogin();
    return;

    // try {
    //   const response = await fetch("http://localhost:5000/login", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify(credentials),
    //   });

    //   if (!response.ok) {
    //     const { message } = await response.json();
    //     setError(message || "Invalid credentials or user not found.");
    //   } else {
    //     onLogin();
    //     navigate("/");
    //   }
    // } catch (err) {
    //   setError("An error occurred. Please try again.");
    // } finally {
    //   setIsLoading(false); // Stop loading
    // }
  };

  return (
    <div className="login-wrapper flex items-center">
      <div className="lg:w-1/2 hidden lg:block self-start">
        <img
          src={loginImg}
          alt="showcasa login"
          className="w-full object-cover h-full"
          width={960}
          height={1024}
        />
      </div>
      <div className="w-full lg:w-1/2">
        <div className="w-full lg:max-w-[625px] pt-[30px] px-4  mx-auto text-center bg-[#E9E8EB] lg:bg-transparent">
          <h1 className="h3 font-literata-bold text-[#703cd2] mb-2">
            Showcase Your Talent.<br></br>Get Discovered.
          </h1>
          <p className="text-[#646167]">
            Log in to connect, share your work, and explore amazing talent.
          </p>
          <div className="form-wrapper max-w-[360px] mx-auto pt-[40px]">
            <form onSubmit={handleSubmit}>
              <div className="input-wrapper flex flex-col gap-5">
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={credentials.email}
                    onChange={handleChange}
                    className="text-[#646167] placeholder-[#646167] ps-[30px] pe-[60px] rounded-[30px] w-full border-[#E2E0E4] focus:outline-none focus:shadow-none focus:ring-0 min-h-[60px]"
                    required
                  />
                  <div className="absolute top-[37%] right-[35px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="16"
                      viewBox="0 0 20 16"
                      fill="none"
                    >
                      <path
                        d="M2.30775 15.5C1.80258 15.5 1.375 15.325 1.025 14.975C0.675 14.625 0.5 14.1974 0.5 13.6923V2.30775C0.5 1.80258 0.675 1.375 1.025 1.025C1.375 0.675 1.80258 0.5 2.30775 0.5H17.6923C18.1974 0.5 18.625 0.675 18.975 1.025C19.325 1.375 19.5 1.80258 19.5 2.30775V13.6923C19.5 14.1974 19.325 14.625 18.975 14.975C18.625 15.325 18.1974 15.5 17.6923 15.5H2.30775ZM10 8.55775L2 3.44225V13.6923C2 13.7821 2.02883 13.8558 2.0865 13.9135C2.14417 13.9712 2.21792 14 2.30775 14H17.6923C17.7821 14 17.8558 13.9712 17.9135 13.9135C17.9712 13.8558 18 13.7821 18 13.6923V3.44225L10 8.55775ZM10 7L17.8463 2H2.15375L10 7ZM2 3.44225V2V13.6923C2 13.7821 2.02883 13.8558 2.0865 13.9135C2.14417 13.9712 2.21792 14 2.30775 14H2V3.44225Z"
                        fill="#D0CDD3"
                      />
                    </svg>
                  </div>
                </div>
                <div className="relative">
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={credentials.password}
                    onChange={handleChange}
                    className="text-[#646167] placeholder-[#646167] ps-[30px] pe-[60px] rounded-[30px] w-full border-[#E2E0E4] focus:outline-none focus:shadow-none focus:ring-0 min-h-[60px]"
                    required
                  />
                  <div className="absolute top-[42%] right-[35px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="23"
                      height="12"
                      viewBox="0 0 23 12"
                      fill="none"
                    >
                      <path
                        d="M6 7.61525C5.5525 7.61525 5.17142 7.45792 4.85675 7.14325C4.54208 6.82858 4.38475 6.4475 4.38475 6C4.38475 5.5525 4.54208 5.17142 4.85675 4.85675C5.17142 4.54208 5.5525 4.38475 6 4.38475C6.4475 4.38475 6.82858 4.54208 7.14325 4.85675C7.45792 5.17142 7.61525 5.5525 7.61525 6C7.61525 6.4475 7.45792 6.82858 7.14325 7.14325C6.82858 7.45792 6.4475 7.61525 6 7.61525ZM6 11.5C4.47433 11.5 3.17625 10.9648 2.10575 9.89425C1.03525 8.82375 0.5 7.52567 0.5 6C0.5 4.47433 1.03525 3.17625 2.10575 2.10575C3.17625 1.03525 4.47433 0.5 6 0.5C7.07183 0.5 8.04108 0.776583 8.90775 1.32975C9.77442 1.88308 10.4359 2.6065 10.8923 3.5H19.8943L22.3943 6L18.548 9.82675L16.6923 8.43275L14.7885 9.846L12.8365 8.5H10.8923C10.4359 9.38717 9.77442 10.1089 8.90775 10.6652C8.04108 11.2218 7.07183 11.5 6 11.5ZM6 10C6.959 10 7.78942 9.71025 8.49125 9.13075C9.19325 8.55125 9.65133 7.841 9.8655 7H13.3077L14.748 7.99625L16.702 6.56725L18.4 7.8655L20.2655 6L19.2655 5H9.8655C9.65133 4.159 9.19325 3.44875 8.49125 2.86925C7.78942 2.28975 6.959 2 6 2C4.9 2 3.95833 2.39167 3.175 3.175C2.39167 3.95833 2 4.9 2 6C2 7.1 2.39167 8.04167 3.175 8.825C3.95833 9.60833 4.9 10 6 10Z"
                        fill="#D0CDD3"
                      />
                    </svg>
                  </div>
                </div>
                <div className="flex itemscenter justify-between">
                  <div className="flex items-center mb-4">
                    <input
                      id="default-checkbox"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 text-[#D0CDD3] bg-transparent border-[#D0CDD3] rounded-sm focus:ring-0 focus:shadow-none"
                    />
                    <label
                      for="default-checkbox"
                      className="ms-2 text-sm font-inter text-[#646167]"
                    >
                      Remember Me
                    </label>
                  </div>
                  <Link
                    to="/forogot-pass"
                    className="font-inter text-[#703CD2] underline hover:no-underline"
                  >
                    Forgot Password?
                  </Link>
                </div>
                {error && <p style={{ color: "red" }}>{error}</p>}
                <button
                  className="btn btn-primary"
                  type="submit"
                  disabled={isLoading}
                >
                  <span className="relative z-[1]">
                    {isLoading ? "Logging In..." : "Login"}
                  </span>
                </button>
              </div>
            </form>
            <div className="dividerwrapper py-[30px] relative before:content-[''] before:absolute before:top-1/2 before:left-0 before:w-full before:h-px before:bg-[#646167] lg:before:bg-[#E2E0E4]">
              <p className="text-[#646167] px-3 bg-[#E9E8EB] lg:bg-white w-auto inline-block relative z-[1]">
                or
              </p>
            </div>
            <div className="social-wrapper flex flex-col items-center justify-center gap-4 mb-6">
              <button className="btn bg-transparent border border-[#E2E0E4] !flex gap-3 items-center lg:min-w-[360px] h-[60px]">
                <img src={googleIcon} alt="google-icon" />
                <Link
                  to="https://accounts.google.com/"
                  className="relative z-[1] font-inter text-[#646167] text-md"
                >
                  Continue with Google
                </Link>
              </button>
              <button className="btn bg-transparent border border-[#E2E0E4] !flex gap-3 items-center lg:min-w-[360px] h-[60px]">
                <img src={linkedinIcon} alt="linkedin-icon" />
                <Link
                  to="https://www.linkedin.com/login"
                  className="relative z-[1] font-inter text-[#646167] text-md"
                >
                  Continue with Facebook
                </Link>
              </button>
            </div>
            <p className="text-[#646167]">
              New here?{" "}
              <Link
                className="text-[#703CD2] underline hover:text-[#371A6C]"
                to="/signup"
              >
                Create an account
              </Link>
              <br></br>and start showcasing your work!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
