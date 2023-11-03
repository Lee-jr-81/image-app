import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner.jsx";
import DragBox from "./components/DragBox.jsx";
import Features from "./components/Features.jsx";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <div className="overall-container">
        <Banner />

        <DragBox />

        <Features />

      </div>
    </>
  );
}

export default App;
