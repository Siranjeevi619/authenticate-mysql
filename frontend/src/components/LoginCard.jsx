import React, { useState } from "react";

function LoginCard({ displayCard }) {
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
  });

  const handleCredentailChange = (event) => {
    const { name, value } = event.target;
    setUserCredentials((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http:localhost:6969/auth/login')
  };
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
          <form onSubmit={handleSubmit}>
            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
                name="email"
                value={userCredentials.email}
                onChange={handleCredentailChange}
              />
              <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="password"
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
                value={userCredentials.password}
                name="password"
                onChange={handleCredentailChange}
              />
              <label htmlFor="floatingPassword">Password</label>
            </div>
            <div className="d-grid">
              <button className="btn btn-primary btn-lg" type="submit">
                Login
              </button>
            </div>
          </form>
          <div className="text-center mt-3">
            <small>
              Don't have an account?{" "}
              <a
                href="#"
                className="text-primary"
                onClick={(e) => {
                  e.preventDefault();
                  displayCard();
                }}
              >
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
