const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    name: { type: String, required: true }, 
    genre: { type: String, required: true }, 
    rating: { type: Number, required: true, min: 0, max: 10 }, 
    description: { type: String, required: true }, 
    personalityType: { type: String, required: true }, // Matches quiz result
    releaseYear: { type: Number, required: true }, 
    director: { type: String }
});

const Movie = mongoose.model('Movie', movieSchema);
module.exports = Movie;
