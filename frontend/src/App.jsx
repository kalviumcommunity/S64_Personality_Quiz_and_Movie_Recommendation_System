import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landingpage";
import Signup from "./pages/signup";
import Login from "./pages/login";
import Quiz from "./components/quiz";
import MovieRecommendations from "./components/movierecommendations";
import "./App.css"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/recommendations" element={<MovieRecommendations />} />
      </Routes>
    </Router>
  );
}

export default App;
