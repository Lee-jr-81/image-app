import React from "react";


export default function navbar() {
  return (
    <section>

      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <span className="navbar-brand" href="#">
          <img src="../assets/logo-small.jpg" width="30" height="30"/>
          Minify
        </span>
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
            <a class="nav-link" href="#compressor">Compress</a>
            </li>

          </ul>
        </div>
      </nav>

    </section>
  );


  }
