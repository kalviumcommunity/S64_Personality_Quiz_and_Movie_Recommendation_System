import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-900 via-gray-900 to-black text-white px-6 sm:px-10 md:px-16 lg:px-24 py-16">
      {/* Heading Section */}
      <div className="text-center max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400 mb-6 md:mb-8 leading-tight">
          Discover Your Personality & Find Your Perfect Movie
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-10 md:mb-12 px-4 md:px-8 leading-relaxed">
          Take our personality quiz and receive movie recommendations tailored just for you.  
          Explore films that match your unique traits and interests!
        </p>
      </div>

      {/* Buttons Section */}
      <div className="flex flex-col sm:flex-row gap-6 md:gap-8">
        <Link to="/signup">
          <button className="px-8 md:px-12 py-3 md:py-4 text-lg md:text-xl font-semibold bg-blue-500 hover:bg-blue-600 text-white rounded-xl shadow-lg transform hover:scale-105 transition duration-300">
            Sign Up
          </button>
        </Link>
        <Link to="/login">
          <button className="px-8 md:px-12 py-3 md:py-4 text-lg md:text-xl font-semibold bg-gray-700 hover:bg-gray-800 text-white rounded-xl shadow-lg transform hover:scale-105 transition duration-300">
            Login
          </button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
