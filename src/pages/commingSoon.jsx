import React from "react";
import "./ComingSoon.css";

const ComingSoon = () => {
  return (
    <div
      className="flex flex-column justify-content-between align-items-center text-center min-h-screen w-full responsive-coming-soon bg-black p-8"
      style={{
        backgroundColor: "#000000",
        color: "#04dec8",
        padding: "2rem",
      }}
    >
      <header>
        <div className="text-3xl sm:text-5xl font-bold mb-3 title">
          We Are Coming Very Soon!
        </div>
        <div className="mb-8 text-lg font-bold subtitle">
          We are ready to launch{" "}
          <a
            href=" "
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-300 underline"
          >
          </a>
        </div>
      </header>

      <div className="flex justify-center items-center mb-8">
        <div className="wave-loader-container">
          <div className="wave-loader">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className="loading-text">LOADING</div>
        </div>
      </div>

      <footer>
        <div>
          <i>
            Powered by
            <a href="https://everefficient.lk/" style={{ color: "#04dec8" }}>
              {" "}
              EVER EFFICIENT Business Management (Pvt) Ltd.
            </a>
          </i>
        </div>

        <div className="mt-4 ml-4 social-icons">
          <a
            href="https://www.facebook.com/everefficient.official"
            className="mr-3"
            style={{ color: "#04dec8", }}
          >
            <i className="pi pi-facebook text-2xl" aria-hidden="true"></i>
          </a>
          <a
            href="https://www.linkedin.com/company/ever-efficient"
            className="mr-3"
            style={{ color: "#04dec8", }}
          >
            <i className="pi pi-linkedin text-2xl"> </i>
          </a>
          <a
            href="https://www.youtube.com/@EverEfficient"
            className="mr-3"
            style={{ color: "#04dec8", }}
          >
            <i className="pi pi-youtube text-2xl"></i>
          </a>
        </div>
      </footer>
    </div>
  );
};

export default ComingSoon;
