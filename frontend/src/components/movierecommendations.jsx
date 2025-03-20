import { useLocation, useNavigate } from "react-router-dom";

const movieRecommendations = {
  "Adventurous Explorer": ["Into the Wild", "The Secret Life of Walter Mitty", "Wild"],
  "Thoughtful Analyst": ["A Beautiful Mind", "The Imitation Game", "The Social Network"],
  "Compassionate Healer": ["The Pursuit of Happyness", "Patch Adams", "Wonder"],
  "Strategic Leader": ["The Wolf of Wall Street", "Moneyball", "The Founder"],
  "Imaginative Dreamer": ["Inception", "Eternal Sunshine of the Spotless Mind", "Life of Pi"],
  "Entertaining Socialite": ["Deadpool", "Superbad", "The Hangover"],
  "Intellectual Thinker": ["Interstellar", "Good Will Hunting", "The Theory of Everything"],
  "Emotional Idealist": ["The Fault in Our Stars", "Titanic", "Me Before You"],
  "Logical Problem Solver": ["Sherlock Holmes", "The Big Short", "Margin Call"],
  "Curious Investigator": ["The Da Vinci Code", "Gone Girl", "Zodiac"],
  "Bold Adventurer": ["Mad Max: Fury Road", "Gladiator", "300"],
  "Free-Spirited Nomad": ["Eat Pray Love", "Nomadland", "Tracks"],
  "Visionary Creator": ["The Grand Budapest Hotel", "La La Land", "Amélie"],
  "Romantic Heart": ["Pride & Prejudice", "The Notebook", "A Star is Born"],
  "Comedy Enthusiast": ["Step Brothers", "21 Jump Street", "Anchorman"],
  "Psychological Thriller Fan": ["Shutter Island", "Fight Club", "Black Swan"]
};

const MovieRecommendation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { personality } = location.state || {};

  if (!personality || !movieRecommendations[personality]) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
        <h2 className="text-3xl font-bold mb-6">Oops! No Personality Type Found</h2>
        <button 
          onClick={() => navigate("/")} 
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg"
        >
          Take the Quiz Again
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-6">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-lg text-center">
        <h2 className="text-3xl font-bold mb-4">Your Personality Type:</h2>
        <p className="text-xl font-semibold mb-6 text-yellow-400">{personality}</p>
        
        <h3 className="text-2xl font-bold mb-3">Recommended Movies:</h3>
        <ul className="text-lg">
          {movieRecommendations[personality].map((movie, index) => (
            <li key={index} className="mb-2">🎬 {movie}</li>
          ))}
        </ul>

        <button 
          onClick={() => navigate("/")} 
          className="mt-6 bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg"
        >
          Retake the Quiz
        </button>
      </div>
    </div>
  );
};

export default MovieRecommendation;
