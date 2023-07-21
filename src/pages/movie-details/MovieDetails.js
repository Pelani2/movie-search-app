import React, { useEffect, useState } from "react";
import "./MovieDetailsStyles.css";
import axios from "axios";

export default function MovieDetails(props) {
    const API_KEY = "4737e7948022809d14a75ad5e7df82c1";
    const API_URL = "https://api.themoviedb.org/3/movie/";

    const [movieData, setMovieData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const movieId = props.match.params.movieId;
        const movieUrl = `${API_URL}${movieId}?api_key=${API_KEY}`;

        axios.get(movieUrl).then((response) => {
            setMovieData(response.data);
            setLoading(false);
        }).catch((error) => {
            console.error(`Error fetching movie details: ${error}`);
            setLoading(false);
        });
    }, [props.match.params.movieId]);

    return(
        <div>

        </div>
    );
}