import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "../App.css";

const Login = ({ setIsLoggedIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post("http://localhost:5000/login", {
        email,
        password,
      });
      localStorage.setItem("username", res.data.username);
      setIsLoggedIn(true);
      navigate("/home");
    } catch (error) {
      alert("Invalid Credentials");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="login-container p-4 shadow rounded bg-white text-center">
        <h2
          className="mb-4"
          style={{ color: "#6b4e37", fontFamily: "'Playfair Display', serif" }}
        >
          Login
        </h2>

        <input
          type="email"
          className="form-control mb-3"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          className="form-control mb-3"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="btn btn-custom w-100 mb-3" onClick={handleLogin}>
          Login
        </button>

        <p>
          New user?{" "}
          <Link
            to="/register"
            className="text-decoration-none"
            style={{ color: "#6b4e37" }}
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
