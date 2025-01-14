import React from "react";

function LoginCard() {
  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100 pb-5"
      style={{ backgroundColor: "#f8f9fa" }}
    >
      <div
        className="card shadow-lg"
        style={{ width: "30rem", borderRadius: "1rem" }}
      >
        <div className="card-body p-4">
          <h3 className="text-center mb-4" style={{ fontWeight: "bold" }}>
            Login
          </h3>
          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>
          <div className="d-grid">
            <button className="btn btn-primary btn-lg" type="submit">
              Login
            </button>
          </div>
          <div className="text-center mt-3">
            <small>
              Don't have an account?{" "}
              <a href="#" className="text-primary">
                Sign Up
              </a>
            </small>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginCard;
