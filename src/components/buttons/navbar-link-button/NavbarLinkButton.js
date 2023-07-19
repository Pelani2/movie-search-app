import React from "react";
import { Link } from "react-router-dom";

export default function NavbarLinkButton({
    text, toProp
}) {
    return(
        <Link 
            to={toProp}
            className="navbar__link-button"
        >
            {text}
        </Link>
    );
}