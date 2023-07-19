import React, { useState } from "react";
import "./SearchSectionStyles.css";
import SearchMovieButton from "../../../components/buttons/search-movie-button/SearchMovieButton";

export default function SearchSection() {
    const [searchText, setSearchText] = useState("");

    const handleSearch = () => {
        // API LOGIC HERE

        console.log(`Performing search for : ${searchText}`);
    };

    const handleInputChange = (event) => {
        setSearchText(event.target.value);
    };

    return(
        <section className="search-container"> 
            <h2 className="search-title">
                Search for Movies
            </h2>
            <div className="search-box">
                <input 
                    type="text"
                    placeholder="Enter movie title here..."
                    value={searchText}
                    onChange={handleInputChange}
                />
                <SearchMovieButton 
                    text="Search" 
                    clickFunc={handleSearch}
                />
            </div>
        </section>
    );
}