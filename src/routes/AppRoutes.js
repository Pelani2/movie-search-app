import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import MovieDetails from "../pages/movie-details/MovieDetails";

const AppRoutes = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/moviedetails/:movieId",
        element: <MovieDetails />
    }
]);

export default AppRoutes;