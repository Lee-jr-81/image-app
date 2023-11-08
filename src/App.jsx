import React from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner.jsx";
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

        <Compressor />

        <Features />

        <Footer />
      </div>
    </>
  );
}

export default App;
