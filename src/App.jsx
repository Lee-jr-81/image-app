import React from "react";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner.jsx";
// import DragBox from "./components/DragBox.jsx";
import Features from "./components/Features.jsx";
import Compressor from "./components/Compressor.jsx";
import Footer from "./components/Footer.jsx";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <div className="overall-container">
        <Banner />

        {/* <DragBox /> */}
        <Compressor />

        <Features />

        <Footer />
      </div>
    </>
  );
}

export default App;
