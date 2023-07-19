import React from "react";
import "./NavbarStyles.css";
import { Link } from "react-router-dom";

export default function Navbar() {
    return(
        <nav className="navbar">
            <div className="navbar__logo">
                <a href="/">
                    My Logo
                </a>
            </div>

            <ul className="navbar__links"> 

            </ul>   
            
            <div className="navbar__auth-buttons">

            </div>
        </nav>
    );
}

