import React from "react";
import '../CSS/Login.css'
import { FaEnvelope } from "react-icons/fa";
import { FaLock } from "react-icons/fa";



const LoginPage = () => {
  return (
    <div className="login-container-big">
      <div className="container login-container" id="login-form-container">
        <div className="card login-card">
          <h2>Sign In</h2>
          <form id="login-form">
            <div className="form-group">
              <label for="email">
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
              <label for="password">
                <FaLock/> Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                required
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              onclick="signIn(); return false;"
            >
              Sign In
            </button>

            <div className="form-footer">
              <a
                href="#"
                onclick="showForgotPassword()"
                className="forgot-password"
              >
                Forgot Password?
              </a>
              <p>
                Don't have an account?{" "}
                <a href="#" onclick="showSignUp()">
                  Sign Up
                </a>
              </p>
            </div>
          </form>
          <p id="error-message" className="error-message"></p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
