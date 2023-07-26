import React, { useEffect, useState } from "react";
import "./FeaturedMoviesStyles.scss";
import axios from "axios";

export default function FeaturedMovies() {
    const [featuredMovies, setFeaturedMovies] = useState([]);

   useEffect(() => {
        const fetchFeaturedMovies = async () => {
            try {
                const apiKey = "4737e7948022809d14a75ad5e7df82c1";
                const response = await axios.get(
                    `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`
                );
                setFeaturedMovies(response.data.results);
            } catch(error) {
                console.error("Error fetching movie data: ", error);
            }
        };
        fetchFeaturedMovies();
   }, []);
    
    return(
        <section className="featured-movies">
            <div className="featured-movies__container">
                {featuredMovies.map((movie) => (
                    <div key={movie.id} className="featured-movies__item">
                        <h2 className="featured-movies__title">
                            {movie.title}
                        </h2>
                        <p className="featured-movies__overview">
                            {movie.overview}
                        </p>
                        {movie.poster_path && (
                            <img 
                                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                alt={movie.title}
                                className="featured-movies__poster"
                            />
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}