import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({ username: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signup Data:", formData);
    navigate("/start-quiz"); // Redirect to Start Quiz page
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white p-6">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-3xl font-bold mb-6 text-center">Sign Up</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input type="text" name="username" placeholder="Username" value={formData.username} onChange={handleChange} className="p-3 rounded-lg bg-gray-700 text-white focus:outline-none" required />
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} className="p-3 rounded-lg bg-gray-700 text-white focus:outline-none" required />
          <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} className="p-3 rounded-lg bg-gray-700 text-white focus:outline-none" required />
          <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-semibold transition transform hover:scale-105">Sign Up</button>
        </form>
        <p className="mt-4 text-center">
          Already have an account? <Link to="/login" className="text-blue-400 hover:underline">Log in</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
