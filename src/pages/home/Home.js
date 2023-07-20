import React from "react";
import Navbar from "../../components/navbar/Navbar";
import SearchSection from "./search-section/SearchSection";
import MovieDetails from "./movie-details/MovieDetails";

export default function Home() {
    return(
        <div>
            <Navbar />
            <SearchSection />
            <MovieDetails />
        </div>
    );
}