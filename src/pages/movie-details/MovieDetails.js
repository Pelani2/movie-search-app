import React, { useEffect, useState } from "react";
import "./MovieDetailsStyles.scss";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function MovieDetails() {
    const API_KEY = "4737e7948022809d14a75ad5e7df82c1";
    const API_URL = "https://api.themoviedb.org/3/movie/";

    const [movieData, setMovieData] = useState(null);
    const [loading, setLoading] = useState(true);

    const { movieId } = useParams();

    useEffect(() => {
        const movieUrl = `${API_URL}${movieId}?api_key=${API_KEY}`;

        axios.get(movieUrl).then((response) => {
            setMovieData(response.data);
            setLoading(false);
        }).catch((error) => {
            console.error(`Error fetching movie details: ${error}`);
            setLoading(false);
        });
    }, [movieId]);

    if (loading) {
        return(
            <div>
                Loading...
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
        <div className="movie__details-container">
            <div className="movie__details">
                <h2 className="movie__title">
                    {movieData.title}
                </h2>
                <p className="movie__overview">
                    {movieData.overview}
                </p>
                {movieData.poster_path && (
                    <img 
                        src={`https://image.tmdb.org/t/p/w500${movieData.poster_path}`}
                        alt={movieData.title}
                        className="movie__poster"
                    />
                )}
            </div>
        </div>  
    );
}