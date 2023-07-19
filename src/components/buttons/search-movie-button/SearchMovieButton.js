import React from "react";
import "./SearchMovieButtonStyles.css";

export default function SearchMovieButton({
    text, clickFunc
}) {
    return(
        <button 
            className="search-movie-button" 
            onClick={clickFunc}
        >
            {text}
        </button>
    )
}