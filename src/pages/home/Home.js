import React from "react";
import Navbar from "../../components/navbar/Navbar";
import SearchSection from "./search-section/SearchSection";
import FeaturedMovies from "./featured-movies/FeaturedMovies";

export default function Home() {
    return(
        <div>
            <Navbar />
            <SearchSection />
            <FeaturedMovies />
        </div>
    );
}