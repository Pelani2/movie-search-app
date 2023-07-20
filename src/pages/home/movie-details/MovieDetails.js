import React, { useEffect, useState } from "react";
import "./MovieDetailsStyles.css";
import axios from "axios";

export default function MovieDetails() {
    const API_KEY = "4737e7948022809d14a75ad5e7df82c1";
    const MOVIE_ID = 550;
    const API_URL = `https://api.themoviedb.org/3/movie/${MOVIE_ID}?api_key=${API_KEY}`;

    const [movieData, setMovieData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get(API_URL).then((response) => {
            setMovieData(response.data);
            setLoading(false);
            console.log(response.data);
        })
        .catch((error) => {
            setError(error.message);
            setLoading(false);
        });
    }, []);
    

    if (loading) {
        return(
            <div>
                Loading...
            </div>
        );
    }

    if (error) {
        return(
            <div>
                Error:
            </div>
        );
    }

    if (!movieData) {
        return(
            <div>
                No movie data available.
            </div>
        );
    }

    const formatBudget = (budget) => {
        return Number(budget).toLocaleString(undefined, {
            style: "currency",
            currency: "USD"
        });
    };

    return(
        <div className="movie__details">
            <h2 className="movie__title">
                {movieData.title}
            </h2>
            <p className="movie__detail">
                {movieData.tagline}
            </p>
            <p className="movie__detail">
                Genres: {movieData.genres.length > 0 ? movieData.genres.map((genre) => genre.name).join(", ") : "N/A"}
            </p>
            <p className="movie__detail">
                {movieData.overview}
            </p>
            <p className="movie__detail">
                Release date: {movieData.release_date}
            </p>
            <p className="movie__detail">
                Rating: {movieData.vote_average}
            </p>
            <p className="movie__detail">
                Budget: {formatBudget(movieData.budget)}
            </p>
            <p className="movie__detail">
                Language: {movieData.spoken_languages.length > 0 ? movieData.spoken_languages.map((language) => language.name).join(", ") : "N/A"}
            </p>
            <p className="movie__detail">
                Production by: {movieData.production_companies.length > 0 ? movieData.production_companies.map((company) => company.name).join(", ") : "N/A"}
            </p>
        </div>
    );
}