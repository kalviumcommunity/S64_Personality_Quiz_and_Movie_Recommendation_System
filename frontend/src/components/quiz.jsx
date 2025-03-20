import { useState } from "react";
import { useNavigate } from "react-router-dom";

const questions = [
  { 
    question: "How do you prefer to spend your weekend?", 
    options: [
      { text: "Exploring a new place", type: "Adventurous Explorer" },
      { text: "Reading a book", type: "Thoughtful Analyst" },
      { text: "Helping others", type: "Compassionate Healer" },
      { text: "Planning next week", type: "Strategic Leader" }
    ] 
  },
  { 
    question: "How do you handle challenges?", 
    options: [
      { text: "Jump in and figure it out", type: "Bold Adventurer" },
      { text: "Think before acting", type: "Intellectual Thinker" },
      { text: "Seek help from others", type: "Compassionate Healer" },
      { text: "Make a structured plan", type: "Logical Problem Solver" }
    ] 
  },
  { 
    question: "Which genre of movies do you enjoy the most?", 
    options: [
      { text: "Psychological Thrillers", type: "Psychological Thriller Fan" },
      { text: "Comedies", type: "Comedy Enthusiast" },
      { text: "Biographies", type: "Thoughtful Analyst" },
      { text: "Romantic Dramas", type: "Romantic Heart" }
    ] 
  },
  { 
    question: "What best describes your personality?", 
    options: [
      { text: "Free-spirited and spontaneous", type: "Free-Spirited Nomad" },
      { text: "Visionary and creative", type: "Visionary Creator" },
      { text: "Intellectual and logical", type: "Intellectual Thinker" },
      { text: "Fun-loving and social", type: "Entertaining Socialite" }
    ] 
  },
  { 
    question: "What motivates you the most?", 
    options: [
      { text: "Discovering new experiences", type: "Adventurous Explorer" },
      { text: "Creating something unique", type: "Visionary Creator" },
      { text: "Achieving success and wealth", type: "Strategic Leader" },
      { text: "Making a difference in others' lives", type: "Compassionate Healer" }
    ] 
  },
  { 
    question: "Your ideal vacation would be?", 
    options: [
      { text: "Adventuring in the mountains", type: "Bold Adventurer" },
      { text: "Relaxing on a beach", type: "Free-Spirited Nomad" },
      { text: "Exploring historical sites", type: "Curious Investigator" },
      { text: "Visiting a vibrant city", type: "Entertaining Socialite" }
    ] 
  },
  { 
    question: "How do you prefer to solve a problem?", 
    options: [
      { text: "Investigate all possible solutions", type: "Curious Investigator" },
      { text: "Think creatively", type: "Imaginative Dreamer" },
      { text: "Analyze data logically", type: "Logical Problem Solver" },
      { text: "Talk it out with others", type: "Compassionate Healer" }
    ] 
  },
  { 
    question: "What do you value most?", 
    options: [
      { text: "Creativity", type: "Visionary Creator" },
      { text: "Intelligence", type: "Intellectual Thinker" },
      { text: "Relationships", type: "Emotional Idealist" },
      { text: "Freedom", type: "Free-Spirited Nomad" }
    ] 
  },
  { 
    question: "Your dream job would be?", 
    options: [
      { text: "Actor/Artist", type: "Visionary Creator" },
      { text: "Entrepreneur", type: "Strategic Leader" },
      { text: "Scientist", type: "Thoughtful Analyst" },
      { text: "Travel Blogger", type: "Adventurous Explorer" }
    ] 
  },
  { 
    question: "How do you recharge after a long day?", 
    options: [
      { text: "Exercise or go outside", type: "Bold Adventurer" },
      { text: "Read a book", type: "Thoughtful Analyst" },
      { text: "Listen to music", type: "Emotional Idealist" },
      { text: "Watch a fun movie", type: "Comedy Enthusiast" }
    ] 
  }
];

const QuizComponent = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const navigate = useNavigate();

  const handleAnswer = (selectedOption) => {
    setAnswers([...answers, selectedOption.type]);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      determinePersonality();
    }
  };

  const determinePersonality = () => {
    const personalityCounts = answers.reduce((acc, type) => {
      acc[type] = (acc[type] || 0) + 1;
      return acc;
    }, {});

    const dominantPersonality = Object.keys(personalityCounts).reduce((a, b) =>
      personalityCounts[a] > personalityCounts[b] ? a : b
    );

    navigate("/recommendations", { state: { personality: dominantPersonality } });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-6">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-lg text-center">
        <h2 className="text-2xl font-bold mb-4">Question {currentQuestion + 1} / {questions.length}</h2>
        <p className="text-lg mb-6">{questions[currentQuestion].question}</p>
        <div className="grid grid-cols-1 gap-4">
          {questions[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition transform hover:scale-105"
              onClick={() => handleAnswer(option)}
            >
              {option.text}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuizComponent;
