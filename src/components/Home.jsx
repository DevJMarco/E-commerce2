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
          height="550px"
        />
        <div className="card-img-overlay">
          <div className="container">
            {/* <h5 className="card-title display-3 fw-bolder mb-0 text-center">NUEVOS PRODUCTOS</h5> */}
            {/* <p className="card-text lead fs-2 text-center">
              CHECK OUT ALL THE TRENDS
            </p> */}
          </div>
        </div>
      </div>
      <Products />
    </div>
  );
};

export default Home;