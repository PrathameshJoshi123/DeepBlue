import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LoginPage from "./components/LoginPage";
import Signup from "./components/Signup";
import Donor from "./components/Donor";
import Receiver from "./components/Receiver";
import DeliveryPage from "./components/DeliveryPage";
import AboutUs from "./components/AboutUs";

function App() {
  return (
    <div className="app">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/donor" element={<Donor />} />
          <Route path="/receiver" element={<Receiver />} />
          <Route path="/delivery" element={<DeliveryPage />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
