import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="hero-section">
        <div className="hero-content">
          <h1>Welcome to Recipe Sharing Platform</h1>
          <p>Discover & Share Amazing Recipes with Food Lovers Around the World</p>
          <div className="home-buttons">
            <Link to="/login" className="home-button login">Login</Link>
            <Link to="/register" className="home-button register">Register</Link>
          </div>
        </div>
        <div className="hero-image">
          
          <img src= "/Pic.png" alt="hey!"></img>
        </div>
      </div>
    </div>
  );
};

export default Home;