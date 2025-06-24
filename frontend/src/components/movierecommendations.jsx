import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const MovieRecommendation = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const personalityType = queryParams.get("personality");

    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!personalityType) return;

        fetch(`http://localhost:5000/api/recommendations/${personalityType}`)
            .then((res) => res.json())
            .then((data) => {
                setMovies(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching movies:", error);
                setLoading(false);
            });
    }, [personalityType]);

    return (
        <div>
            <h2>Recommended Movies</h2>
            {loading ? <p>Loading...</p> : (
                <ul>
                    {movies.map((movie) => (
                        <li key={movie._id}>{movie.title} ({movie.genre})</li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default MovieRecommendation;
