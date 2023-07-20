import React, { useEffect, useState } from "react";
import "./MovieDetailsStyles.css";
import axios from "axios";
import MovieSwitch from "../../../components/buttons/movie-switch/MovieSwitch";

export default function MovieDetails() {
    const API_KEY = "4737e7948022809d14a75ad5e7df82c1";
    const MOVIE_ID = 551;
    
    const [movieData, setMovieData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentMovieID, setCurrentMovieID] = useState(MOVIE_ID);

    const fetchMovieDetails = (movieID) => {
        setLoading(true);
        setError(null);

        const API_URL = `https://api.themoviedb.org/3/movie/${movieID}?api_key=${API_KEY}`;

        axios.get(API_URL).then((response) => {
            setMovieData(response.data);
            setLoading(false);
            console.log(response.data);
        })
        .catch((error) => {
            setError(error.message);
            setLoading(false);
        });
    };

    useEffect(() => {
        fetchMovieDetails(currentMovieID);
    }, [currentMovieID]);

    const handlePreviousClick = () => {
        if (currentMovieID > 1) {
            setCurrentMovieID(currentMovieID - 1);
        }
    };

    const handleNextClick = () => {
        setCurrentMovieID(currentMovieID + 1);
    };
    

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
                Error: {error}
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
        <div className="movie__details-background">
            <div className="movie__details">
                <div className="movie__navigation">
                    <MovieSwitch 
                        text="Previous"
                        onClickFunc={handlePreviousClick}
                    />
                    <MovieSwitch 
                        text="Next"
                        onClickFunc={handleNextClick}
                    />
                </div>
                <h2 className="movie__title">
                    {movieData.title}
                </h2>
                <div className="movie__flex">
                    <p className="movie__detail">
                        {movieData.tagline}
                    </p>

                    <p className="movie__detail">
                        Genres: {movieData.genres.length > 0 ? movieData.genres.map((genre) => genre.name).join(", ") : "N/A"}
                    </p>

                    <p className="movie__detail">
                        Release date: {movieData.release_date}
                    </p>
                </div>

                <div className="movie__flex">
                    <p className="movie__detail-overview">
                        {movieData.overview}
                    </p>
                </div>

                <div className="movie__flex">
                    <p className="movie__detail">
                        Rating: {movieData.vote_average}
                    </p>

                    <p className="movie__detail">
                        Budget: {formatBudget(movieData.budget)}
                    </p>

                    <p className="movie__detail">
                        Language: {movieData.spoken_languages.length > 0 ? movieData.spoken_languages.map((language) => language.name).join(", ") : "N/A"}
                    </p>
                </div>

                <p className="movie__detail">
                    Production by: {movieData.production_companies.length > 0 ? movieData.production_companies.map((company) => company.name).join(", ") : "N/A"}
                </p>
            </div>
        </div>
    );
}