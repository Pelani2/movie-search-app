import React from "react";
import "./NavbarStyles.css";
import NavbarLinkButton from "../buttons/navbar-link-button/NavbarLinkButton";
import AuthButton from "../buttons/auth-buttons/AuthButton";

export default function Navbar() {
    return(
        <nav className="navbar">
            <div className="navbar__logo">
                <a href="/">
                    My Logo
                </a>
            </div>

            <ul className="navbar__links"> 
                <NavbarLinkButton 
                    toProp="/"
                    text="Home"
                />
                <NavbarLinkButton 
                    toProp="/"
                    text="Movies"
                />
                <NavbarLinkButton 
                    toProp="/"
                    text="TV Shows"
                />
            </ul>   
            
            <div className="navbar__auth-buttons">
                <AuthButton 
                    text="Log In"
                    toProp="/loginpage"
                />
                <AuthButton 
                    text="Sign Up"
                    toProp="/signuppage"
                />
            </div>
        </nav>
    );
}

