import React from "react";
import "../CSS/Signup.css";
import { FaEnvelope } from "react-icons/fa";
import { FaLock } from "react-icons/fa";

const Signup = () => {
  return (
    <div className="sign-container-big">
      <div className="login-container" id="signup-form-container">
        <div className="login-card">
          <h2>Sign Up</h2>
          <form id="signup-form">
            <div className="form-group">
              <label htmlFor="email">
                <FaEnvelope /> Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">
                <FaLock /> Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="confirm-password">
                <FaLock /> Confirm Password
              </label>
              <input
                type="password"
                id="confirm-password"
                placeholder="Confirm your password"
                required
              />
            </div>
            <button
              type="submit"
              className="btn btn-secondary"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
