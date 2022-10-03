import React from "react";
import "./Home.css";
import coverImg from "../img/Landing page image.svg";

const Home = () => {
  return (
    <div>
      <div class="card min-h-screen p-6">
        <div class="hero-content flex-col lg:flex-row">
          <img src={coverImg} class="max-w-sm rounded-lg shadow-2xl" alt="8" />
          <div className="text-center lg:text-end m-6">
            <h1
              class="text-4xl lg:text-6xl font-bold"
              style={{ color: "#240D57" }}
            >
              Imagine if <br /> <span>Snapchat</span> <br /> had events{" "}
            </h1>
            <p class="py-6 lg:text-3xl">
              Easily host and share events with your friends across any social
              media.
            </p>
            <button class="btn btn-primary text-white lg:text-xl font-bold border-0">
              Create my event
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
