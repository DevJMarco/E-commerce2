import React from "react";
import Products from "./products";

const Home = () => {
  return (
    <div className="hero">
      <div className="card bg-dark text-white border-0">
        <img
          src="/assets/banner.jpg"
          className="card-img"
          alt="banner"
          height="750px"
        />
        <div className="card-img-overlay">
          <div className="container">
          </div>
        </div>
      </div>
      <Products />
    </div>
  );
};

export default Home;
