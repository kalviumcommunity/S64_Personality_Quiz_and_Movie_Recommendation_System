const mongoose = require('mongoose');

// Movie Schema
const movieSchema = new mongoose.Schema({
    personalityType: { type: String, required: true },
    movies: [
        {
            title: { type: String, required: true },
            description: { type: String },
            releaseYear: { type: Number }
        }
    ]
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie
