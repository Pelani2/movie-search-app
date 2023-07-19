import React from "react";
import "./AuthButtonStyles.css";
import { Link } from "react-router-dom";

export default function AuthButton({
    text, toProp
}) {
    return(
        <Link to={toProp}>
            {text}
        </Link>
    );
}