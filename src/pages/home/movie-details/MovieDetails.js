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

    return(
        <div className="movie-detils">
            <h2>
                {movieData.title}
            </h2>
            <p>
                {movieData.overview}
            </p>
            <p>
                Release date: {movieData.release_date}
            </p>
            <p>
                Rating: {movieData.vote_average}
            </p>
        </div>
    );
}