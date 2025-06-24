import React, { useState, useEffect } from "react";

const Quiz = () => {
    const [questions, setQuestions] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [traitCount, setTraitCount] = useState({});
    const [result, setResult] = useState(null);
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("http://localhost:3000/api/questions")
            .then((res) => res.json())
            .then((data) => {
                setQuestions(data);
                setLoading(false);
            })
            .catch(error => console.error("Error fetching questions:", error));
    }, []);

    const handleAnswer = (personalityType) => {
        setTraitCount(prev => ({
            ...prev,
            [personalityType]: (prev[personalityType] || 0) + 1
        }));

        if (currentQuestion + 1 < questions.length) {
            setCurrentQuestion(prev => prev + 1);
        }
    };

    useEffect(() => {
        if (currentQuestion === questions.length - 1) {
            determinePersonality();
        }
    }, [traitCount]);

    const determinePersonality = () => {
        if (Object.keys(traitCount).length === 0) return;

        const personality = Object.keys(traitCount).reduce((a, b) =>
            traitCount[a] > traitCount[b] ? a : b
        );

        setResult(personality);
    };

    useEffect(() => {
        if (result) {
            fetchMovies(result);
        }
    }, [result]);

    const fetchMovies = (personality) => {
        fetch(`http://localhost:3000/api/movies?personalityType=${personality}`)
            .then((res) => res.json())
            .then((data) => {
                setMovies(data.slice(0, 3)); // Display only 3 movies
            })
            .catch(error => console.error("Error fetching movies:", error));
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
            <div className="w-full max-w-2xl p-6 bg-gray-800 rounded-lg shadow-lg">
                {loading ? (
                    <p className="text-center text-lg font-semibold">Loading...</p>
                ) : result ? (
                    <div className="text-center">
                        <h2 className="text-3xl font-bold mb-4">Your Personality Type:</h2>
                        <p className="text-2xl text-green-400 font-semibold">{result}</p>
                        <h3 className="text-xl font-bold mt-6">Recommended Movies:</h3>
                        <ul className="mt-3">
                            {movies.length > 0 ? (
                                movies.map((movie, index) => (
                                    <li key={index} className="text-lg">
                                        {movie.name} - ⭐ {movie.rating}
                                    </li>
                                ))
                            ) : (
                                <p>No movies found for this personality type.</p>
                            )}
                        </ul>
                    </div>
                ) : (
                    <div>
                        <h2 className="text-2xl font-bold mb-6 text-center">
                            {questions[currentQuestion]?.question}
                        </h2>
                        <div className="grid gap-4">
                            {questions[currentQuestion]?.options.map((option) => (
                                <button
                                    key={option._id}
                                    onClick={() => handleAnswer(option.trait)}
                                    className="w-full px-4 py-2 text-lg font-semibold bg-blue-600 rounded-lg shadow-md hover:bg-blue-500 transition duration-300"
                                >
                                    {option.text}
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Quiz;
