import React from "react";
import "./MovieSwitchStyles.css";

export default function MovieSwitch({
    text, onClickFunc
}) {
    return(
        <button
            className="movie-switch"
            onClick={onClickFunc}
        >
            {text}
        </button>
    );
}