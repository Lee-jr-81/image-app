import React from "react";
// import { BrowserRouter, Route, Link } from "react-router-dom";

export default function navbar() {
  return (
    <section>

      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          <img src="../assets/logo-small.jpg" />
          Minify
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#features">Features</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#exampleModal" data-toggle="modal" data-target="#exampleModal">Log In</a>
            </li>

          </ul>
        </div>
      </nav>

    </section>
  );
}


