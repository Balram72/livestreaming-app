import React from "react";
import { Link } from "react-router-dom";
import BG from "../assets/bg.jpg";
const Home = () => {
  return (
    <>
      <div className="hero">
        <div className="content">
          <h1 className="fade-in">
            Stream AnyWhere, Anytime for <span>Free</span>
          </h1>
          <p className="fade-in delay-1">Live Streaming Made Easy</p>
          <Link className="btn fade-in delay-2" to="/live-stream">
            Get Started
          </Link>
        </div>
        {/* Image */}
        <div className="image-container slide-in">
          <img src={BG} alt="banner" />
        </div>
      </div>
    </>
  );
};

export default Home;
