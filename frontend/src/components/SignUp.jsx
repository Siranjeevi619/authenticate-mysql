import React, { useState } from "react";
// import { useSearchParams } from "react-router";
import Swal from "sweetalert2";
import axios from "axios";

function SignUpCard({ displayCard }) {
 
  const [userInfo, setUserInfo] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userInfo);
    if (userInfo.password !== userInfo.confirmPassword) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "password wont match ",
      });
    }
    axios
      .post("http://localhost:6969/auth/signup", userInfo)
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
  };
  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{ backgroundColor: "#f8f9fa" }}
    >
      <div
        className="card shadow-lg"
        style={{ width: "35rem", borderRadius: "1rem" }}
      >
        <form onSubmit={handleSubmit}>
          <div className="card-body p-4">
            <h3 className="text-center mb-4" style={{ fontWeight: "bold" }}>
              Sign Up
            </h3>
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="floatingName"
                name="userName"
                value={userInfo.userName}
                onChange={handleChange}
              />
              <label htmlFor="floatingName">Name</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control"
                id="floatingEmail"
                onChange={handleChange}
                name="email"
                value={userInfo.email}
              />
              <label htmlFor="floatingEmail">Email address</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="password"
                className="form-control"
                id="floatingPassword"
                onChange={handleChange}
                name="password"
                value={userInfo.password}
              />
              <label htmlFor="floatingPassword">Password</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="password"
                className="form-control"
                id="floatingConfirmPassword"
                onChange={handleChange}
                name="confirmPassword"
                value={userInfo.confirmPassword}
              />
              <label htmlFor="floatingConfirmPassword">Confirm Password</label>
            </div>
            <div className="d-grid">
              <button className="btn btn-primary btn-lg" type="submit">
                Sign Up
              </button>
            </div>
            <div className="text-center mt-3">
              <small>
                Already have an account?{" "}
                <a
                  href="#"
                  className="text-primary"
                  onClick={(e) => {
                    e.preventDefault();
                    displayCard();
                  }}
                >
                  Login
                </a>
              </small>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUpCard;
