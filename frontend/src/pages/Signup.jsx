import React, { useState } from "react";
import "../styles/auth.css";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [college, setCollege] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const { signup } = useAuth();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    if (password !== confirm) {
      alert("Passwords do not match");
      return;
    }

    try {
      await signup({
        name,
        email,
        college,
        password,
        confirmPassword: confirm,
      });

      // redirect after signup
      navigate("/login");
    } catch (err) {
      alert(err.message);
    }
  }

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">CampusConnect</div>
      </nav>

      {/* Signup Form */}
      <div className="auth-container">
        <h2 className="auth-title">Create your account</h2>

        <form className="auth-form" onSubmit={handleSubmit}>
          <input
            className="input"
            placeholder="Full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <input
            className="input"
            type="email"
            placeholder="College email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            className="input"
            placeholder="College / University (optional)"
            value={college}
            onChange={(e) => setCollege(e.target.value)}
          />

          <input
            className="input"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <input
            className="input"
            type="password"
            placeholder="Confirm password"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
            required
          />

          <div className="auth-actions">
            <button className="btn-primary" type="submit">
              Sign up
            </button>

            <Link to="/login" className="btn-outline">
              Have an account?
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
