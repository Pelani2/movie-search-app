import React, { useState } from "react";
import "./SearchSectionStyles.css";
import SearchMovieButton from "../../../components/buttons/search-movie-button/SearchMovieButton";
import axios from "axios";
import "./SearchResultsStyles.css";
import { Link } from "react-router-dom";

export default function SearchSection() {
    const API_KEY = "4737e7948022809d14a75ad5e7df82c1";
    const API_URL = "https://api.themoviedb.org/3/search/movie";

    const [searchText, setSearchText] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    

    const handleSearch = () => {
        if (searchText.trim() === "") {
            setSearchResults([]);
            return;
        }
    };

    axios.get(API_URL, {
        params: {
            api_key: API_KEY,
            query: searchText.trim(),
        }
    }).then((response) => {
        setSearchResults(response.data.results);
    }).catch((error) => {
        console.error(`Error fetching search results: ${error}`);
    });

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
                <section className="movie-container">
                    <div className="movie-search-container">
                        <div className="search-results">
                            {searchResults.length > 0 ? (
                                <ul>
                                    {searchResults.map((movie) => (
                                        <Link 
                                            key={movie.id}
                                            className="dropped-movie"
                                            to={`/moviedetails/${movie.id}`}
                                        >
                                            {movie.title}
                                        </Link>
                                    ))}
                                </ul>
                            ) : (
                                <p>
                                    No search results found.
                                </p>
                            )}
                        </div>
                    </div>
                </section>
        </section>
    );
}