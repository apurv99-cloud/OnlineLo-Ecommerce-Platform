import React, { useState } from "react";
import axios from "axios";

const Signup = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:8080/api/auth/register", user);

      alert("Signup successful ✅");
      window.location.href = "/login";
    } catch (err) {
      console.error(err);
      alert("Signup failed ❌");
    }
  };

  // 🔥 OAuth handlers
  const handleGoogleSignup = () => {
    window.location.href = "http://localhost:8080/oauth2/authorization/google";
  };

  const handleGithubSignup = () => {
    window.location.href = "http://localhost:8080/oauth2/authorization/github";
  };

  return (
    <div className="container mt-5 pt-5 d-flex justify-content-center">
      <div className="card shadow p-4" style={{ width: "400px" }}>
        <h3 className="text-center mb-4">Signup</h3>

        <form onSubmit={handleSignup}>
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

          <button className="btn btn-success w-100 mb-3">Signup</button>
        </form>

        {/* 🔥 Divider */}
        <div className="text-center mb-3">OR</div>

        {/* 🔥 OAuth Buttons */}
        <button
          className="btn btn-light w-100 mb-2 d-flex align-items-center justify-content-center"
          onClick={handleGoogleSignup}
        >
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
            alt="google"
            width="20"
            className="me-2"
          />
          Sign up with Google
        </button>

        <button
          className="btn btn-dark w-100 d-flex align-items-center justify-content-center"
          onClick={handleGithubSignup}
        >
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
            alt="github"
            width="20"
            className="me-2"
          />
          Sign up with GitHub
        </button>
      </div>
    </div>
  );
};

export default Signup;
