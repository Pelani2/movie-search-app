import React from "react";
import "./FeaturedMoviesStyles.scss";

export default function FeaturedMovies() {
    return(
        <section className="featured-movies">
            <div className="featured-movies__container">
                {FeaturedMovies.map((movie) => (
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