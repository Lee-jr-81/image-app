import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";


function navbar() {
    return (
        <section>
            <nav class="navbar navbar-expand-lg ">
                <a class="navbar-brand" href="#"> 
                {/* <></> <-- put logo image link here*/}
                Minify</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse d-flex justify-content-evenly" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Go Premium!</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Log In</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </section>
    )
}

export default navbar;