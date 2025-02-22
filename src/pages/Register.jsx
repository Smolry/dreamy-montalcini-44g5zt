import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "../App.css"; // Import CSS
import Login from "./Login";

const Register = ({ setIsLoggedIn }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async () => {
    await axios.post("http://localhost:5000/register", {
      username,
      email,
      password,
    });
    localStorage.setItem("username", username);
    setIsLoggedIn(true);
    navigate("/home");
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="register-container p-4 shadow rounded bg-white text-center">
        <h2
          className="mb-4"
          style={{ color: "#6b4e37", fontFamily: "'Playfair Display', serif" }}
        >
          Register
        </h2>

        <input
          type="text"
          className="form-control mb-3"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />

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

        <button className="btn btn-custom w-100 mb-3" onClick={handleRegister}>
          Register
        </button>

        <p>
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-decoration-none"
            style={{ color: "#6b4e37" }}
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
