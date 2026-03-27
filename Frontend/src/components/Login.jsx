import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:8080/api/authlogin", user);
      const token = res.data.token || res.data;

      localStorage.setItem("token", token);

      alert("Login successful ✅");
      window.location.href = "/";
    } catch (err) {
      console.error(err);
      alert("Login failed ❌");
    }
  };

  // 🔥 OAuth handlers
  const handleGoogleLogin = () => {
    window.location.href = "http://localhost:8080/oauth2/authorization/google";
  };

  const handleGithubLogin = () => {
    window.location.href = "http://localhost:8080/oauth2/authorization/github";
  };

  return (
    <div className="container mt-5 pt-5 d-flex justify-content-center">
      <div className="card shadow p-4" style={{ width: "400px" }}>
        <h3 className="text-center mb-4">Login</h3>

        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label className="form-label">Username</label>
            <input
              type="text"
              className="form-control"
              name="username"
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              onChange={handleChange}
              required
            />
          </div>

          <button className="btn btn-primary w-100 mb-3">Login</button>
        </form>

        {/* 🔥 Divider */}
        <div className="text-center mb-3">OR</div>

        {/* 🔥 OAuth Buttons */}
        <button
          className="btn btn-light w-100 mb-2 d-flex align-items-center justify-content-center"
          onClick={handleGoogleLogin}
        >
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
            alt="google"
            width="20"
            className="me-2"
          />
          Continue with Google
        </button>

        <button
          className="btn btn-dark w-100 d-flex align-items-center justify-content-center"
          onClick={handleGithubLogin}
        >
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
            alt="github"
            width="20"
            className="me-2"
          />
          Continue with GitHub
        </button>
      </div>
    </div>
  );
};

export default Login;
