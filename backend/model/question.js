const mongoose = require('mongoose');

// Question Schema
const questionSchema = new mongoose.Schema({
    questionText: { type: String, required: true },
    options: [
        {
            optionText: { type: String, required: true },
            personalityType: { type: String, required: true } // Each option maps to a personality type
        }
    ]
});

const Question = mongoose.model('Question', questionSchema);

module.exports = Question
