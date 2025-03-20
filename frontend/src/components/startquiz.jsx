import { useState } from "react";
import QuizComponent from "./quiz"; // Import the quiz component

const StartQuiz = () => {
  const [quizStarted, setQuizStarted] = useState(false);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-6">
      {!quizStarted ? (
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-md w-full text-center">
          <h2 className="text-3xl font-bold mb-6">Welcome!</h2>
          <p className="text-lg mb-6">You're all set to begin your personality quiz.</p>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold transition transform hover:scale-105"
            onClick={() => setQuizStarted(true)}
          >
            Start Quiz
          </button>
        </div>
      ) : (
        <QuizComponent />
      )}
    </div>
  );
};

export default StartQuiz;
