import React, { useEffect, useState } from "react";
import axios from "axios";
import "./FeaturedMoviesStyles.scss";

export default function FeaturedMovies() {
    const [featuredMovies, setFeaturedMovies] = useState([]);
    const [activeIndex, setActiveIndex] = useState(0);

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

   useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % featuredMovies.length);
        }, 5000);

        return () => clearInterval(interval);
   }, [featuredMovies]);
    
    return(
        <section className="featured-movies">
            <div 
                className="featured-movies__container"
                style={{
                    transform: `translateX(-${activeIndex * 100}%)`,
                    width: `${featuredMovies.length * 100}%`
                }}
            >
                {featuredMovies.map((movie, index) => (
                    <div
                        key={movie.id}
                        className={`featured-movies__item${index === activeIndex ? " active" : ""}`}
                    >
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